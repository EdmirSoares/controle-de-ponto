import { useEffect, useState } from 'react';
import { approveRequest } from '../../utils/api';
import { toast } from 'sonner';

export default function useApp(onClose, data) {
	const [justification, setJustification] = useState('');

	const handleJustification = e => {
		setJustification(e.target.value);
	};

	const onApprove = async statusProps => {
		const formData = {
			idPonto: data.idPonto,
			status: statusProps,
			dsJustificativa: justification,
		};
		try {
			if (!justification || justification.length < 10) {
				toast.error('Justificativa deve ter no mínimo 10 caracteres');
				return;
			}
			const response = await approveRequest(formData);
			onClose();
			toast.success(response.message);
		} catch (error) {
			console.error(error);
			toast.error('aaaaa');
		}
	};

	const onDecline = async () => {
		try {
			//const response = await fetch('http://localhost:3000/registers');
			//const data = await response.json();
			onClose();
			toast.success('Solicitação rejeitada com sucesso');
		} catch (error) {
			console.error(error);
			toast.error('Erro ao carregar os dados');
		}
	};

	return {
		justification,
		handleJustification,
		onApprove,
	};
}
