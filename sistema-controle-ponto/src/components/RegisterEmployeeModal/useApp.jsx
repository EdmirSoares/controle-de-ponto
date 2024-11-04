import { useEffect, useState } from "react";
import { toast } from "sonner";
import { getUserDataLocalStorage } from "../../utils/user";

export default function useApp(onClose) {
	const [registerData, setRegisterData] = useState({
		nmFuncionario: "",
		dsEmail: "",
		dsFuncao: "",
		flAtivo: false,
		isAdmin: false,
	});
	const [alertField, setAlertField] = useState(true);
	const [user, setUser] = useState({});

	const handlerChangeInputs = (e) => {
		const { name, value } = e.target;
		setRegisterData({ ...registerData, [name]: value });
		console.log(registerData);
	};

	const handleConfirm = () => {
		const formData = {
			...registerData,
		};

		/* if (!formData.nmFuncionario) {
			setAlertField(true);
			return;
		} */

		try {
			console.log(formData);
			toast.success(`Solicitação enviada com sucesso!`);
		} catch (error) {
			console.error(error);
		}
	};

	const handleClose = () => {
		onClose();
		setRegisterData({
			nmFuncionario: "",
			dsEmail: "",
			dsFuncao: "",
			flAtivo: false,
			isAdmin: false,
		});
		setAlertField(false);
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

	return {
		handleConfirm,
		handleClose,
		handlerChangeInputs,
		alertField,
		registerData,
	};
}
