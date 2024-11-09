import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { deleteEmployee, getEmployees } from "../../utils/api";

export default function useApp() {
	const [loading, setLoading] = useState(false);
	const [dataEmployees, setDataEmployees] = useState([]);
	const [dataRegisterEmployee, setDataRegisterEmployee] = useState({});
	const [idEmployee, setIdEmployee] = useState(null);

	const [modalRegisterEmployee, setModalRegisterEmployee] = useState(false);
	const [modalDeleteEmployee, setModalDeleteEmployee] = useState(false);

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

	useEffect(() => {
		getDataEmployees();
	}, []);

	useEffect(() => {
		console.log(idEmployee);
	}, [idEmployee]);

	return {
		loading,
		dataEmployees,
		modalRegisterEmployee,
		dataRegisterEmployee,
		modalDeleteEmployee,
		getDataEmployees,
		handleOpenRegisterEmployee,
		handleCloseRegisterEmployee,
		handleOpenDeleteEmployee,
		handleCloseDeleteEmployee,
		handleDeleteEmployee,
	};
}
