import { useEffect, useState } from 'react';
import { formatDate, unFormatDate } from '../../utils/date';
import { toast } from 'sonner';
import { getUserDataLocalStorage } from '../../utils/user';
import { createRegistro } from '../../utils/api';

export default function useApp(onClose, data) {
	const [user, setUser] = useState({});
	const [dateTime, setDateTime] = useState('');

	const localDate = () => {
		const date = new Date();
		const timeZoneOffset = -3;
		const localDate = new Date(
			date.getTime() + timeZoneOffset * 60 * 60 * 1000,
		);
		return localDate;
	};

	const updateDateTime = () => {
		const formattedDate = formatDate(localDate().toISOString());
		setDateTime(formattedDate);
	};

	const handleConfirm = async () => {
		const formData = {
			idFuncionario: user.idFuncionario,
			dataHora: unFormatDate(dateTime),
			dsMotivo: data.dsMotivo,
			tipo: data.tipo,
		};

		try {
			const response = await createRegistro(formData);
			handleClose();
			toast.success(`Ponto registrado com sucesso!`);
		} catch (error) {
			console.error(error);
			toast.error(response.data.message);
		}
	};

	const handleClose = () => {
		onClose();
		setDateTime('');
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
