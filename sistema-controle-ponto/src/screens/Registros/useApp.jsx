import { useEffect, useState } from 'react';
import { toast } from 'sonner';
import { getRegistros, getJornada } from '../../utils/api';
import { getUserDataLocalStorage } from '../../utils/user';

export default function useApp() {
	const [loading, setLoading] = useState(false);
	const [user, setUser] = useState({});
	const [typeCommentary, setTypeCommentary] = useState({
		dsMotivo: '',
		tipo: 'entrada',
	});
	const [dataRegisters, setDataRegisters] = useState([{}]);
	const [dataRequest, setDataRequest] = useState([{}]);
	const [dataView, setDataView] = useState([{}]);
	const [dataEdit, setDataEdit] = useState([{}]);

	const [modalRegister, setModalRegister] = useState(false);

	const [modalView, setModalView] = useState(false);
	const [modalEdit, setModalEdit] = useState(false);
	const [requestModal, setRequestModal] = useState(false);

	const getDataRegisters = async () => {
		setLoading(true);
		try {
			const response = await getRegistros();
			setDataRegisters(response.data);
			setLoading(false);
		} catch (error) {
			console.error(error);
			toast.error('Erro ao carregar os dados');
		}
	};

	const validateWorkPeriod = async idFuncionario => {
		const entryTime = new Date();
		const response = await getJornada(idFuncionario);

		const [hours, minutes, seconds] = response?.data[0]?.horaEntrada
			.split(':')
			.map(Number);

		const [endHours, endMinutes, endSeconds] = response?.data[0]?.horaSaida
			.split(':')
			.map(Number);

		const maxAtrasoMinutos = response?.data[0]?.maxAtrasoMinutos;

		const workStartTime = new Date();
		const workEndTime = new Date();

		workStartTime.setHours(hours, minutes + maxAtrasoMinutos, seconds, 0);
		workEndTime.setHours(endHours, endMinutes, endSeconds, 0);

		const diffStart = Math.abs(entryTime - workStartTime);
		const diffEnd = Math.abs(entryTime - workEndTime);

		if (entryTime >= workStartTime || entryTime >= workEndTime) {
			toast.success('O ponto será registrado fora do horário!');
			setTypeCommentary(prev => ({
				...prev,
				dsMotivo: 'Fora do horário, solicitar edição',
			}));
		}

		if (diffStart < diffEnd) {
			setTypeCommentary(prev => ({
				...prev,
				tipo: 'saida',
			}));
		} else {
			setTypeCommentary(prev => ({
				...prev,
				tipo: 'entrada',
			}));
		}
	};
	const handleOpenRegister = () => {
		setModalRegister(true);
	};

	const handleCloseRegister = () => {
		setModalRegister(false);
		getDataRegisters();
	};

	const handleOpenEdit = item => {
		setDataEdit(item);
		setModalEdit(true);
	};

	const handleCloseEdit = () => {
		setModalEdit(false);
		getDataRegisters();
	};

	const handleOpenView = item => {
		setDataView(item);
		setModalView(true);
	};

	const handleCloseView = () => {
		setModalView(false);
		getDataRegisters();
	};

	const handlerRequestEdit = () => {
		setDataRequest(dataView);
		setModalView(false);
		setRequestModal(true);
	};

	const handlerCloseRequest = () => {
		setRequestModal(false);
		getDataRegisters();
	};

	useEffect(() => {
		getDataRegisters();
		setUser(getUserDataLocalStorage());
	}, []);

	useEffect(() => {
		if (user?.idFuncionario) {
			validateWorkPeriod(user.idFuncionario);
		}
	}, [user]);

	return {
		loading,
		dataRegisters,
		getDataRegisters,
		handleOpenEdit,
		handleCloseEdit,
		handleOpenView,
		handleCloseView,
		modalView,
		dataView,
		modalEdit,
		handleOpenRegister,
		handleCloseRegister,
		handlerRequestEdit,
		handlerCloseRequest,
		dataRequest,
		modalRegister,
		requestModal,
		dataEdit,
		typeCommentary,
	};
}
