import axios from 'axios';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';
import {
	deleteEmployee,
	getEmployees,
	updateStatusEmployee,
	deleteWorkPeriod,
} from '../../utils/api';

export default function useApp() {
	const [loading, setLoading] = useState(false);
	const [dataEmployees, setDataEmployees] = useState([]);
	const [dataRegisterEmployee, setDataRegisterEmployee] = useState({});
	const [idEmployee, setIdEmployee] = useState(null);
	const [statusEmployee, setStatusEmployee] = useState(null);

	const [modalRegisterEmployee, setModalRegisterEmployee] = useState(false);
	const [modalDeleteEmployee, setModalDeleteEmployee] = useState(false);
	const [modalStatusEmployee, setModalStatusEmployee] = useState(false);
	const [modalDeleteWorkPeriod, setModalDeleteWorkPeriod] = useState(false);

	const getDataEmployees = async () => {
		setLoading(true);
		try {
			const response = await getEmployees();

			setDataEmployees(response.data);
			setLoading(false);
		} catch (error) {
			console.error(error);
			toast.error('Erro ao carregar os dados');
		}
	};

	const handleDeleteEmployee = async () => {
		try {
			const response = await deleteEmployee(idEmployee);

			toast.success(response.message);
			handleCloseDeleteEmployee();
			handleOpenDeleteWorkPeriod(idEmployee);
		} catch (error) {
			const errorMessage =
				error.response?.data?.error || 'Erro ao desligar o colaborador';
			toast.error(errorMessage);
			console.error(error);
		}
	};

	const handleUpdateStatusEmployee = async () => {
		try {
			const response = await updateStatusEmployee(
				statusEmployee.idFuncionario,
				statusEmployee.flAtivo === 0 ? 1 : 0,
			);
			toast.success(response.message);
			handleCloseStatusEmployee();
		} catch (error) {
			const errorMessage =
				error.response?.data?.error || 'Erro ao alterar status';
			toast.error(errorMessage);
			console.error(error);
		}
	};

	const handleOpenRegisterEmployee = item => {
		setModalRegisterEmployee(true);
		setDataRegisterEmployee(
			dataEmployees.filter(
				dataEmployees =>
					dataEmployees.idFuncionario === item.idFuncionario,
			)[0],
		);
	};

	const deleteWorkPeriodEmployee = async () => {
		try {
			const response = await deleteWorkPeriod({
				idFuncionario: idEmployee,
			});
			toast.success(response.message);
			handleCloseDeleteWorkPeriod();
		} catch (error) {
			const errorMessage =
				error.response?.data?.error || 'Erro ao excluir os registros';
			toast.error(errorMessage);
			console.error(error);
		}
	};

	const handleCloseRegisterEmployee = () => {
		setModalRegisterEmployee(false);
		getDataEmployees();
	};

	const handleOpenDeleteEmployee = item => {
		setModalDeleteEmployee(true);
		setIdEmployee(item.idFuncionario);
	};

	const handleCloseDeleteEmployee = () => {
		setModalDeleteEmployee(false);
	};

	const handleOpenStatusEmployee = item => {
		setModalStatusEmployee(true);
		setStatusEmployee(item);
	};

	const handleCloseStatusEmployee = () => {
		setModalStatusEmployee(false);
		getDataEmployees();
	};

	const handleOpenDeleteWorkPeriod = () => {
		setModalDeleteWorkPeriod(true);
	};

	const handleCloseDeleteWorkPeriod = () => {
		getDataEmployees();
		setModalDeleteWorkPeriod(false);
	};

	useEffect(() => {
		getDataEmployees();
	}, []);

	return {
		loading,
		dataEmployees,
		modalRegisterEmployee,
		dataRegisterEmployee,
		modalDeleteEmployee,
		modalStatusEmployee,
		statusEmployee,
		getDataEmployees,
		handleOpenRegisterEmployee,
		handleCloseRegisterEmployee,
		handleOpenDeleteEmployee,
		handleCloseDeleteEmployee,
		handleDeleteEmployee,
		handleOpenStatusEmployee,
		handleCloseStatusEmployee,
		handleUpdateStatusEmployee,
		handleOpenDeleteWorkPeriod,
		handleCloseDeleteWorkPeriod,
		modalDeleteWorkPeriod,
		deleteWorkPeriodEmployee,
	};
}
