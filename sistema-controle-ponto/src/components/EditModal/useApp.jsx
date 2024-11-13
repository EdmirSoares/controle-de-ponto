import { useEffect, useState } from 'react';
import { getUserDataLocalStorage } from '../../utils/user';
import { toast } from 'sonner';

export default function useApp(onClose, data) {
	const [user, setUser] = useState({});
	const [date, setDate] = useState('');
	const [time, setTime] = useState('');
	const [isDateTimeEmpty, setIsDateTimeEmpty] = useState(false);
	const [dataEdit, setDataEdit] = useState({});

	function convertToDateTimeLocalFormat(dateString) {
		return dateString ? dateString.slice(0, 16) : '';
	}

	const handleClose = () => {
		onClose();
	};

	const handlerChangeDate = e => {
		setDate(e.target.value);
	};

	const handlerChangeTime = e => {
		setTime(e.target.value);
	};

	const handleConfirm = () => {
		const dateTime = `${date}T${time}`;
		const formData = {
			dataHora: new Date(dateTime).toISOString(),
		};

		if (!dateTime && !dataEdit.dataHora) {
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
		setDataEdit(data);
	}, [data]);

	useEffect(() => {
		if (dataEdit.dataHora) {
			const [datePart, timePart] = dataEdit.dataHora.split(' ');
			setDate(datePart);
			setTime(timePart.slice(0, 5));
		}
	}, [dataEdit.dataHora]);

	useEffect(() => {
		if (date !== '' && time !== '') {
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
