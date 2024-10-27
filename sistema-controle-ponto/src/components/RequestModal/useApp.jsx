import { useEffect, useState } from "react";
import { toast } from "sonner";
import { getUserDataLocalStorage } from "../../utils/user";

export default function useApp(onClose) {
	const [dateTime, setDateTime] = useState("");
	const [description, setDescription] = useState("");
	const [disabledButton, setDisabledButton] = useState(true);
	const [isDescriptionEmpty, setIsDescriptionEmpty] = useState(false);
	const [user, setUser] = useState({});

	const localDate = () => {
		const date = new Date();
		const timeZoneOffset = -3;
		const localDate = new Date(
			date.getTime() + timeZoneOffset * 60 * 60 * 1000
		);
		return localDate;
	};

	const handleConfirm = () => {
		const formData = {
			userName: user.name,
			userEmail: user.email,
			date: localDate().toISOString(),
			dsDescricao: description,
		};

		try {
			if (!description) {
				setIsDescriptionEmpty(true);
				return;
			}

			handleClose();
			toast.success(`Solicitação enviada com sucesso!`);
		} catch (error) {
			console.error(error);
		}
	};

	const handleClose = () => {
		onClose();
		setDateTime("");
		setUser({});
		setDescription("");
		setIsDescriptionEmpty(false);
	};

	useEffect(() => {
		setUser(getUserDataLocalStorage());
	}, []);

	useEffect(() => {
		if (!description) {
			setDisabledButton(true);
			return;
		}
		if (description.length > 0) {
			setIsDescriptionEmpty(false);
		}
	}, [description]);

	return {
		dateTime,
		handleConfirm,
		handleClose,
		description,
		setDescription,
		disabledButton,
		isDescriptionEmpty,
	};
}
