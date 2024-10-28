import { useEffect, useState } from "react";
import { toast } from "sonner";

export default function useApp() {
	const [loading, setLoading] = useState(false);
	const [dataRequests, setDataRequests] = useState([]);

	const [modalApprove, setModalApprove] = useState(false);
	const [approveData, setApproveData] = useState({});

	const data = [
		{
			idFuncionario: "1",
			nmFuncionario: "Alex Souza",
			dsEmail: "alexsouza@gmail.com",
			tpStatus: "Aguardando",
			dtPonto: "2023-10-01T08:30:00Z",
			dsDescricao: "Correção de horário",
		},
		{
			idFuncionario: "2",
			nmFuncionario: "Maria Silva",
			dsEmail: "mariasilva@gmail.com",
			tpStatus: "Aguardando",
			dtPonto: "2023-10-01T09:00:00Z",
			dsDescricao: "Registro fora do horário",
		},
		{
			idFuncionario: "3",
			nmFuncionario: "João Pereira",
			dsEmail: "joaopereira@gmail.com",
			tpStatus: "Aguardando",
			dtPonto: "2023-10-01T09:15:00Z",
			dsDescricao: "Atraso não justificado",
		},
		{
			idFuncionario: "4",
			nmFuncionario: "Ana Costa",
			dsEmail: "anacosta@gmail.com",
			tpStatus: "Aguardando",
			dtPonto: "2023-10-01T09:45:00Z",
			dsDescricao: "Correção de Data",
		},
		{
			idFuncionario: "5",
			nmFuncionario: "Carlos Lima",
			dsEmail: "carloslima@gmail.com",
			tpStatus: "Aguardando",
			dtPonto: "2023-10-01T10:00:00Z",
			dsDescricao: "Correção de ponto manual",
		},
		{
			idFuncionario: "6",
			nmFuncionario: "Beatriz Fernandes",
			dsEmail: "beatrizfernandes@gmail.com",
			tpStatus: "Aguardando",
			dtPonto: "2023-10-01T10:30:00Z",
			dsDescricao: "Alteração de horário",
		},
		{
			idFuncionario: "7",
			nmFuncionario: "Pedro Rocha",
			dsEmail: "pedrorocha@gmail.com",
			tpStatus: "Aguardando",
			dtPonto: "2023-10-01T11:00:00Z",
			dsDescricao: "Alteração solicitada pelo gestor",
		},
		{
			idFuncionario: "8",
			nmFuncionario: "Lucas Oliveira",
			dsEmail: "lucasoliveira@gmail.com",
			tpStatus: "Aguardando",
			dtPonto: "2023-10-01T11:30:00Z",
			dsDescricao: "",
		},
		{
			idFuncionario: "9",
			nmFuncionario: "Juliana Santos",
			dsEmail: "julianasantos@gmail.com",
			tpStatus: "Aguardando",
			dtPonto: "2023-10-01T12:00:00Z",
			dsDescricao: "Registro duplicado",
		},
		{
			idFuncionario: "10",
			nmFuncionario: "Fernando Ribeiro",
			dsEmail: "fernandoribeiro@gmail.com",
			tpStatus: "Aguardando",
			dtPonto: "2023-10-01T12:30:00Z",
			dsDescricao: "",
		},
		{
			idFuncionario: "11",
			nmFuncionario: "Carla Mendes",
			dsEmail: "carlamendes@gmail.com",
			tpStatus: "Aguardando",
			dtPonto: "2023-10-01T13:00:00Z",
			dsDescricao: "",
		},
		{
			idFuncionario: "12",
			nmFuncionario: "Ricardo Martins",
			dsEmail: "ricardomartins@gmail.com",
			tpStatus: "Aguardando",
			dtPonto: "2023-10-01T13:30:00Z",
			dsDescricao: "Atualização de horário",
		},
		{
			idFuncionario: "13",
			nmFuncionario: "Patrícia Almeida",
			dsEmail: "patricia.almeida@gmail.com",
			tpStatus: "Aguardando",
			dtPonto: "2023-10-01T14:00:00Z",
			dsDescricao: "",
		},
		{
			idFuncionario: "14",
			nmFuncionario: "Thiago Nunes",
			dsEmail: "thiagonunes@gmail.com",
			tpStatus: "Aguardando",
			dtPonto: "2023-10-01T14:30:00Z",
			dsDescricao: "Horário inconsistente",
		},
		{
			idFuncionario: "15",
			nmFuncionario: "Mariana Campos",
			dsEmail: "marianacampos@gmail.com",
			tpStatus: "Aguardando",
			dtPonto: "2023-10-01T15:00:00Z",
			dsDescricao: "",
		},
	];

	const getDataRequests = async () => {
		try {
			//const response = await fetch('http://localhost:3000/registers');
			//const data = await response.json();

			setDataRequests(data);
			setLoading(false);
		} catch (error) {
			console.error(error);
			toast.error("Erro ao carregar os dados");
		}
	};

	const putApprove = async () => {
		try {
			//const response = await fetch('http://localhost:3000/registers');
			//const data = await response.json();
			setModalApprove(!modalApprove);
			setLoading(false);
			toast.success("Solicitação aprovada com sucesso");
		} catch (error) {
			console.error(error);
			toast.error("Erro ao carregar os dados");
		}
	};

	const putReject = async () => {
		try {
			//const response = await fetch('http://localhost:3000/registers');
			//const data = await response.json();

			setModalApprove(!modalApprove);
			setLoading(false);
			toast.success("Solicitação rejeitada com sucesso");
		} catch (error) {
			console.error(error);
			toast.error("Erro ao carregar os dados");
		}
	};

	const handlerModalApprove = (item) => {
		setModalApprove(!modalApprove);
		setApproveData(item);
	};

	const handleCloseModalApprove = () => {
		setModalApprove(false);
	};

	useEffect(() => {
		getDataRequests();
	}, []);

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
