import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import {
	deleteEmployee,
	getEmployees,
	updateStatusEmployee,
} from "../../utils/api";

export default function useApp() {
	const [loading, setLoading] = useState(false);
	const [dataEmployees, setDataEmployees] = useState([]);
	const [dataRegisterEmployee, setDataRegisterEmployee] = useState({});
	const [idEmployee, setIdEmployee] = useState(null);
	const [statusEmployee, setStatusEmployee] = useState(null);

	const [modalRegisterEmployee, setModalRegisterEmployee] = useState(false);
	const [modalDeleteEmployee, setModalDeleteEmployee] = useState(false);
	const [modalStatusEmployee, setModalStatusEmployee] = useState(false);

	const getDataEmployees = async () => {
		setLoading(true);
		try {
			const response = await getEmployees();

			setDataEmployees(response.data);
			setLoading(false);
		} catch (error) {
			console.error(error);
			toast.error("Erro ao carregar os dados");
		}
	};

	const handleDeleteEmployee = async () => {
		try {
			const response = await deleteEmployee(idEmployee);

			toast.success(response.message);
			handleCloseDeleteEmployee();
		} catch (error) {
			const errorMessage =
				error.response?.data?.error || "Erro ao desligar o colaborador";
			toast.error(errorMessage);
			console.error(error);
		}
	};

	const handleUpdateStatusEmployee = async () => {
		try {
			console.log(statusEmployee);
			const response = await updateStatusEmployee(
				statusEmployee.idFuncionario,
				statusEmployee.flAtivo === 0 ? 1 : 0
			);
			toast.success(response.message);
			handleCloseStatusEmployee();
		} catch (error) {
			const errorMessage =
				error.response?.data?.error || "Erro ao alterar status";
			toast.error(errorMessage);
			console.error(error);
		}
	};

	const handleOpenRegisterEmployee = (item) => {
		setModalRegisterEmployee(true);
		setDataRegisterEmployee(item);
	};

	const handleCloseRegisterEmployee = () => {
		setModalRegisterEmployee(false);
		getDataEmployees();
	};

	const handleOpenDeleteEmployee = (item) => {
		setModalDeleteEmployee(true);
		setIdEmployee(item.idFuncionario);
	};

	const handleCloseDeleteEmployee = () => {
		setModalDeleteEmployee(false);
		getDataEmployees();
	};

	const handleOpenStatusEmployee = (item) => {
		setModalStatusEmployee(true);
		setStatusEmployee(item);
	};

	const handleCloseStatusEmployee = () => {
		setModalStatusEmployee(false);
		getDataEmployees();
	};

	useEffect(() => {
		getDataEmployees();
	}, []);

	useEffect(() => {
		console.log(statusEmployee);
	}, [statusEmployee]);

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
	};
}
