import { useEffect, useState } from "react";
import { toast } from "sonner";

export default function useApp() {
	const [loading, setLoading] = useState(false);
	const [dataEmployees, setDataEmployees] = useState([]);

	const [modalRegisterEmployee, setModalRegisterEmployee] = useState(false);

	const getDataEmployees = async () => {
		setLoading(true);
		try {
			const response = await fetch("http://localhost:3000/colaboradores");
			const data = await response.json();

			setDataEmployees(data.data);
			setLoading(false);
		} catch (error) {
			console.error(error);
			toast.error("Erro ao carregar os dados");
		}
	};

	const handleOpenRegisterEmployee = (item) => {
		setModalRegisterEmployee(true);
	};

	const handleCloseRegisterEmployee = () => {
		setModalRegisterEmployee(false);
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
	};
}
