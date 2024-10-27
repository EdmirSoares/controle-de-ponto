import { useEffect, useState } from "react";
import { getUserDataLocalStorage } from "../../utils/user";
import { formatDate } from "../../utils/date";
import { toast } from "sonner";

export default function useApp(onClose) {
	const [user, setUser] = useState({});
	const [dateTime, setDateTime] = useState("");

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
			date: new Date(dateTime),
		};

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

	return {
		handleClose,
		handlerChangeDateTime,
		handleConfirm,
		dateTime,
	};
}
