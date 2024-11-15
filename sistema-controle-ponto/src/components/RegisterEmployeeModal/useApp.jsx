import { useEffect, useState } from 'react';
import { toast } from 'sonner';
import { getUserDataLocalStorage } from '../../utils/user';
import { createEmployee, updateEmployee } from '../../utils/api';

export default function useApp(onClose, data) {
	const [registerData, setRegisterData] = useState({
		nmFuncionario: '',
		dsEmail: '',
		dsFuncao: '',
		flAtivo: true,
		isAdmin: false,
		horaEntrada: '',
		horaSaida: '',
		maxAtrasoMinutos: '',
	});
	const [alertField, setAlertField] = useState(true);
	const [user, setUser] = useState({});

	const handlerChangeInputs = e => {
		const { name, value, type, checked } = e.target;
		setRegisterData(prevData => ({
			...prevData,
			[name]: type === 'checkbox' ? checked : value,
		}));
	};

	const handleConfirm = async () => {
		const formData = {
			...(data && data.idFuncionario
				? { idFuncionario: data.idFuncionario }
				: {}),
			...registerData,
		};

		let allFieldsFilled = true;
		Object.values(formData).forEach(value => {
			if (value === '') {
				allFieldsFilled = false;
			}
		});

		if (!allFieldsFilled) {
			toast.error(`Preencha todos os campos obrigatórios!`);
			return;
		}

		if (formData.dsFuncao === 'Colaborador' && formData.isAdmin) {
			toast.error(`Colaboradores não podem ser supervisores!`);
			return;
		}

		try {
			if (data && data.idFuncionario) {
				await updateEmployee(formData);
				console.log(formData);
				toast.success('Funcionário atualizado com sucesso!');
				handleClose();
				return;
			}
			await createEmployee(formData);
			toast.success('Funcionário cadastrado com sucesso!');
			handleClose();
		} catch (error) {
			const errorMessage =
				error.response?.data?.error || 'Erro ao cadastrar funcionário';
			toast.error(errorMessage);
			console.error(error);
		}
	};

	const handleClose = () => {
		onClose();
		setAlertField(false);
		setRegisterData({
			nmFuncionario: '',
			dsEmail: '',
			dsFuncao: '',
			flAtivo: true,
			isAdmin: false,
		});
	};

	useEffect(() => {
		setUser(getUserDataLocalStorage());
	}, []);

	useEffect(() => {
		if (!registerData.nmFuncionario) {
			setAlertField(true);
		} else {
			setAlertField(false);
		}
	}, [registerData.nmFuncionario]);

	useEffect(() => {
		if (data && data.idFuncionario) {
			setRegisterData({
				nmFuncionario: data.nmFuncionario,
				dsEmail: data.dsEmail,
				dsFuncao: data.dsFuncao,
				flAtivo: data.flAtivo,
				isAdmin: data.isAdmin,
				horaEntrada: data.horaEntrada,
				horaSaida: data.horaSaida,
				maxAtrasoMinutos: data.maxAtrasoMinutos,
			});
		}
	}, [data]);

	return {
		handleConfirm,
		handleClose,
		handlerChangeInputs,
		alertField,
		registerData,
	};
}
