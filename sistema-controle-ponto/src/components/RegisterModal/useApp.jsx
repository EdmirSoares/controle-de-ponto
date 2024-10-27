import { useEffect, useState } from "react";
import { formatDate } from "../../utils/date";
import { toast } from "sonner";
import { getUserDataLocalStorage } from "../../utils/user";

export default function useApp(onClose) {
	const [user, setUser] = useState({});

	const localDate = () => {
		const date = new Date();
		const timeZoneOffset = -3;
		const localDate = new Date(
			date.getTime() + timeZoneOffset * 60 * 60 * 1000
		);
		return localDate;
	};

	const updateDateTime = () => {
		const formattedDate = formatDate(localDate().toISOString());
		setDateTime(formattedDate);
	};

	const handleConfirm = () => {
		const formData = {
			userName: user.name,
			userEmail: user.email,
			date: localDate().toISOString(),
		};

		try {
			console.log(formData);
			handleClose();
			toast.success(
				`Ponto registrado às ${formatDate(new Date().toISOString())}!`
			);
		} catch (error) {
			console.error(error);
		}
	};

	const handleClose = () => {
		onClose();
		setDateTime("");
		setUser({});
	};

	useEffect(() => {
		setUser(getUserDataLocalStorage());
	}, []);

	useEffect(() => {
		updateDateTime();
		const interval = setInterval(() => {
			updateDateTime();
		}, 1000);
		return () => clearInterval(interval);
	}, []);

	return {
		dateTime,
		handleConfirm,
		handleClose,
	};
}
