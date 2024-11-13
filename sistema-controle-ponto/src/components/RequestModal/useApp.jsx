import { useEffect, useState } from 'react';
import { toast } from 'sonner';
import { getUserDataLocalStorage } from '../../utils/user';
import { requestEdit } from '../../utils/api';

export default function useApp(onClose, data) {
	const [dateTime, setDateTime] = useState('');
	const [motive, setMotive] = useState('');
	const [disabledButton, setDisabledButton] = useState(true);
	const [isDescriptionEmpty, setIsDescriptionEmpty] = useState(false);
	const [user, setUser] = useState({});

	const localDate = () => {
		const date = new Date();
		const timeZoneOffset = -3;
		const localDate = new Date(
			date.getTime() + timeZoneOffset * 60 * 60 * 1000,
		);
		return localDate;
	};

	const handleConfirm = async () => {
		const formData = {
			idPonto: data.idPonto,
			dsMotivo: motive,
		};

		try {
			if (!motive) {
				setIsDescriptionEmpty(true);
				return;
			}

			await requestEdit(formData);
			console.log(formData);

			handleClose();
			toast.success(`Solicitação enviada com sucesso!`);
		} catch (error) {
			console.error(error);
		}
	};

	const handleClose = () => {
		onClose();
		setDateTime('');
		setUser({});
		setMotive('');
		setIsDescriptionEmpty(false);
	};

	useEffect(() => {
		setUser(getUserDataLocalStorage());
	}, []);

	useEffect(() => {
		if (!motive) {
			setDisabledButton(true);
			return;
		}
		if (motive.length > 0) {
			setIsDescriptionEmpty(false);
		}
	}, [motive]);

	return {
		dateTime,
		handleConfirm,
		handleClose,
		motive,
		setMotive,
		disabledButton,
		isDescriptionEmpty,
	};
}
