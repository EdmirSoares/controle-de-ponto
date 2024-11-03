import { useEffect, useState } from "react";
import { getUserDataLocalStorage } from "../../utils/user";
import { toast } from "sonner";

export default function useApp(onClose, initialData) {
	const [user, setUser] = useState({});
	const [date, setDate] = useState("");
	const [time, setTime] = useState("");
	const [isDateTimeEmpty, setIsDateTimeEmpty] = useState(false);
	const [dataEdit, setDataEdit] = useState({});

	function convertToDateTimeLocalFormat(dateString) {
		return dateString ? dateString.slice(0, 16) : "";
	}

	const handleClose = () => {
		onClose();
	};

	const handlerChangeDate = (e) => {
		setDate(e.target.value);
	};

	const handlerChangeTime = (e) => {
		setTime(e.target.value);
	};

	const handleConfirm = () => {
		const dateTime = `${date}T${time}`;
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
			const [datePart, timePart] = dataEdit.dtPonto.split("T");
			setDate(datePart);
			setTime(timePart.slice(0, 5)); // Remove os segundos
		}
	}, [dataEdit.dtPonto]);

	useEffect(() => {
		if (date !== "" && time !== "") {
			setIsDateTimeEmpty(false);
		}
	}, [date, time]);

	return {
		handleClose,
		handlerChangeDate,
		handlerChangeTime,
		handleConfirm,
		isDateTimeEmpty,
		date,
		time,
		dataEdit,
		convertToDateTimeLocalFormat,
	};
}
