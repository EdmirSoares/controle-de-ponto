import { useEffect, useState } from 'react';
import { toast } from 'sonner';
import { getRegistros } from '../../utils/api';

export default function useApp() {
	const [loading, setLoading] = useState(false);
	const [dataRegisters, setDataRegisters] = useState([{}]);
	const [dataRequest, setDataRequest] = useState([{}]);
	const [dataView, setDataView] = useState([{}]);
	const [dataEdit, setDataEdit] = useState([{}]);

	const [modalRegister, setModalRegister] = useState(false);

	const [modalView, setModalView] = useState(false);
	const [modalEdit, setModalEdit] = useState(false);
	const [requestModal, setRequestModal] = useState(false);

	const getDataRegisters = async () => {
		setLoading(true);
		try {
			const response = await getRegistros();
			setDataRegisters(response.data);
			setLoading(false);
		} catch (error) {
			console.error(error);
			toast.error('Erro ao carregar os dados');
		}
	};

	const handleOpenRegister = () => {
		setModalRegister(true);
	};

	const handleCloseRegister = () => {
		setModalRegister(false);
	};

	const handleOpenEdit = item => {
		setDataEdit(item);
		setModalEdit(true);
	};

	const handleCloseEdit = () => {
		setModalEdit(false);
		getDataRegisters();
	};

	const handleOpenView = item => {
		setDataView(item);
		setModalView(true);
	};

	const handleCloseView = () => {
		setModalView(false);
	};

	const handlerRequestEdit = () => {
		setDataRequest(dataView);
		setModalView(false);
		setRequestModal(true);
	};

	const handlerCloseRequest = () => {
		setRequestModal(false);
	};

	useEffect(() => {
		getDataRegisters();
	}, []);

	return {
		loading,
		dataRegisters,
		getDataRegisters,
		handleOpenEdit,
		handleCloseEdit,
		handleOpenView,
		handleCloseView,
		modalView,
		dataView,
		modalEdit,
		handleOpenRegister,
		handleCloseRegister,
		handlerRequestEdit,
		handlerCloseRequest,
		dataRequest,
		modalRegister,
		requestModal,
		dataEdit,
	};
}
