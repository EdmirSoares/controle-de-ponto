import { useEffect, useState } from "react";
import { getUserDataLocalStorage } from "../../utils/user";
import { toast } from "sonner";

export default function useApp(onClose, initialData) {
	const [user, setUser] = useState({});
	const [dateTime, setDateTime] = useState("");
	const [isDateTimeEmpty, setIsDateTimeEmpty] = useState(false);
	const [dataEdit, setDataEdit] = useState({});

	function convertToDateTimeLocalFormat(dateString) {
		return dateString ? dateString.slice(0, 16) : "";
	}

	const handleClose = () => {
		onClose();
	};

	const handlerChangeDateTime = (e) => {
		setDateTime(e.target.value);
	};

	const handleConfirm = () => {
		const formData = {
			nmFuncionario: user.name,
			dsEmail: user.email,
			dtPonto: new Date(dateTime).toISOString(),
		};

		if (!dateTime && !dataEdit.dtPonto) {
			setIsDateTimeEmpty(true);
			return;
		}

		try {
			console.log(formData);
			handleClose();
			toast.success(`Ponto editado com sucesso!`);
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		setUser(getUserDataLocalStorage());
	}, []);

	useEffect(() => {
		setDataEdit(initialData);
	}, [initialData]);

	useEffect(() => {
		if (dataEdit.dtPonto) {
			setDateTime(convertToDateTimeLocalFormat(dataEdit.dtPonto));
		}
	}, [dataEdit.dtPonto]);

	useEffect(() => {
		if (dateTime !== "") {
			setIsDateTimeEmpty(false);
		}
	}, [dateTime]);

	return {
		handleClose,
		handlerChangeDateTime,
		handleConfirm,
		isDateTimeEmpty,
		dateTime,
		dataEdit,
		convertToDateTimeLocalFormat,
	};
}
