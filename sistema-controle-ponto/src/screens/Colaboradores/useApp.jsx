import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { getEmployees } from "../../utils/api";

export default function useApp() {
	const [loading, setLoading] = useState(false);
	const [dataEmployees, setDataEmployees] = useState([]);
	const [dataRegisterEmployee, setDataRegisterEmployee] = useState({});

	const [modalRegisterEmployee, setModalRegisterEmployee] = useState(false);

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

	const handleOpenRegisterEmployee = (item) => {
		setModalRegisterEmployee(true);
		setDataRegisterEmployee(item);
	};

	const handleCloseRegisterEmployee = () => {
		setModalRegisterEmployee(false);
		getDataEmployees();
	};

	useEffect(() => {
		getDataEmployees();
	}, []);

	return {
		loading,
		dataEmployees,
		modalRegisterEmployee,
		getDataEmployees,
		handleOpenRegisterEmployee,
		handleCloseRegisterEmployee,
		dataRegisterEmployee,
	};
}
