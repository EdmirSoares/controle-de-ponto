import { useEffect, useState } from 'react';
import { toast } from 'sonner';
import { getRegistrosSolicitados } from '../../utils/api';

export default function useApp() {
	const [loading, setLoading] = useState(false);
	const [dataRequests, setDataRequests] = useState([{}]);

	const [modalApprove, setModalApprove] = useState(false);
	const [approveData, setApproveData] = useState({});

	const getDataRequests = async () => {
		try {
			const formData = {
				status: 'solicitado',
			};
			const response = await getRegistrosSolicitados(formData);

			setDataRequests(response.data);
			setLoading(false);
		} catch (error) {
			console.error(error);
			toast.error('Erro ao carregar os dados');
		}
	};

	const putApprove = async () => {
		try {
			//const response = await fetch('http://localhost:3000/registers');
			//const data = await response.json();
			setModalApprove(!modalApprove);
			setLoading(false);
			toast.success('Solicitação aprovada com sucesso');
		} catch (error) {
			console.error(error);
			toast.error('Erro ao carregar os dados');
		}
	};

	const putReject = async () => {
		try {
			//const response = await fetch('http://localhost:3000/registers');
			//const data = await response.json();

			setModalApprove(!modalApprove);
			setLoading(false);
			toast.success('Solicitação rejeitada com sucesso');
		} catch (error) {
			console.error(error);
			toast.error('Erro ao carregar os dados');
		}
	};

	const handlerModalApprove = item => {
		setModalApprove(!modalApprove);
		setApproveData(item);
	};

	const handleCloseModalApprove = () => {
		setModalApprove(false);
	};

	useEffect(() => {
		getDataRequests();
	}, []);

	useEffect(() => {
		console.log(dataRequests);
	}, [dataRequests]);

	return {
		dataRequests,
		getDataRequests,
		modalApprove,
		approveData,
		handlerModalApprove,
		handleCloseModalApprove,
		putApprove,
		putReject,
	};
}
