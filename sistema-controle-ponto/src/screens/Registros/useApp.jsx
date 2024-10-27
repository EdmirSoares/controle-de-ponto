import { useEffect, useState } from "react";
import { toast } from "sonner";

export default function useApp() {
	const [loading, setLoading] = useState(false);
	const [dataRegisters, setDataRegisters] = useState([{}]);
	const [dataView, setDataView] = useState([{}]);

	const [modalRegister, setModalRegister] = useState(false);

	const [modalView, setModalView] = useState(false);
	const [modalEdit, setModalEdit] = useState(false);
	const [requestModal, setRequestModal] = useState(false);

	const data = [
		{
			idFuncionario: "1",
			nmFuncionario: "Alex Souza",
			dsEmail: "alexsouza@gmail.com",
			tpStatus: "Editado",
			dtPonto: "2023-10-01T08:30:00Z",
			dsDescricao: "Correção de horário",
		},
		{
			idFuncionario: "2",
			nmFuncionario: "Maria Silva",
			dsEmail: "mariasilva@gmail.com",
			tpStatus: "Confirmado",
			dtPonto: "2023-10-01T09:00:00Z",
			dsDescricao: "",
		},
		{
			idFuncionario: "3",
			nmFuncionario: "João Pereira",
			dsEmail: "joaopereira@gmail.com",
			tpStatus: "Rejeitado",
			dtPonto: "2023-10-01T09:15:00Z",
			dsDescricao: "Atraso não justificado",
		},
		{
			idFuncionario: "4",
			nmFuncionario: "Ana Costa",
			dsEmail: "anacosta@gmail.com",
			tpStatus: "Disponível",
			dtPonto: "2023-10-01T09:45:00Z",
			dsDescricao: "",
		},
		{
			idFuncionario: "5",
			nmFuncionario: "Carlos Lima",
			dsEmail: "carloslima@gmail.com",
			tpStatus: "Editado",
			dtPonto: "2023-10-01T10:00:00Z",
			dsDescricao: "Correção de ponto manual",
		},
		{
			idFuncionario: "6",
			nmFuncionario: "Beatriz Fernandes",
			dsEmail: "beatrizfernandes@gmail.com",
			tpStatus: "Confirmado",
			dtPonto: "2023-10-01T10:30:00Z",
			dsDescricao: "",
		},
		{
			idFuncionario: "7",
			nmFuncionario: "Pedro Rocha",
			dsEmail: "pedrorocha@gmail.com",
			tpStatus: "Editado",
			dtPonto: "2023-10-01T11:00:00Z",
			dsDescricao: "Alteração solicitada pelo gestor",
		},
		{
			idFuncionario: "8",
			nmFuncionario: "Lucas Oliveira",
			dsEmail: "lucasoliveira@gmail.com",
			tpStatus: "Confirmado",
			dtPonto: "2023-10-01T11:30:00Z",
			dsDescricao: "",
		},
		{
			idFuncionario: "9",
			nmFuncionario: "Juliana Santos",
			dsEmail: "julianasantos@gmail.com",
			tpStatus: "Rejeitado",
			dtPonto: "2023-10-01T12:00:00Z",
			dsDescricao: "Registro duplicado",
		},
		{
			idFuncionario: "10",
			nmFuncionario: "Fernando Ribeiro",
			dsEmail: "fernandoribeiro@gmail.com",
			tpStatus: "Disponível",
			dtPonto: "2023-10-01T12:30:00Z",
			dsDescricao: "",
		},
		{
			idFuncionario: "11",
			nmFuncionario: "Carla Mendes",
			dsEmail: "carlamendes@gmail.com",
			tpStatus: "Confirmado",
			dtPonto: "2023-10-01T13:00:00Z",
			dsDescricao: "",
		},
		{
			idFuncionario: "12",
			nmFuncionario: "Ricardo Martins",
			dsEmail: "ricardomartins@gmail.com",
			tpStatus: "Editado",
			dtPonto: "2023-10-01T13:30:00Z",
			dsDescricao: "Atualização de horário",
		},
		{
			idFuncionario: "13",
			nmFuncionario: "Patrícia Almeida",
			dsEmail: "patricia.almeida@gmail.com",
			tpStatus: "Disponível",
			dtPonto: "2023-10-01T14:00:00Z",
			dsDescricao: "",
		},
		{
			idFuncionario: "14",
			nmFuncionario: "Thiago Nunes",
			dsEmail: "thiagonunes@gmail.com",
			tpStatus: "Rejeitado",
			dtPonto: "2023-10-01T14:30:00Z",
			dsDescricao: "Horário inconsistente",
		},
		{
			idFuncionario: "15",
			nmFuncionario: "Mariana Campos",
			dsEmail: "marianacampos@gmail.com",
			tpStatus: "Confirmado",
			dtPonto: "2023-10-01T15:00:00Z",
			dsDescricao: "",
		},
	];

	const getDataRegisters = async () => {
		try {
			//const response = await fetch('http://localhost:3000/registers');
			//const data = await response.json();

			setDataRegisters(data);
			setLoading(false);
			//toast.success('Registros carregados com sucesso');
		} catch (error) {
			console.error(error);
			toast.error("Erro ao carregar os dados");
		}
	};

	const handleOpenRegister = () => {
		setModalRegister(true);
	};

	const handleCloseRegister = () => {
		setModalRegister(false);
	};

	const handleOpenEdit = (item) => {
		console.log("Edit item:", item);
		setModalEdit(true);
	};

	const handleCloseEdit = () => {
		setModalView(false);
	};

	const handleOpenView = (item) => {
		setDataView(item);
		setModalView(true);
	};

	const handleCloseView = () => {
		setModalView(false);
	};

	const handlerRequestEdit = () => {
		setDataView({});
		setModalView(false);
		setRequestModal(true);
	};

	useEffect(() => {
		getDataRegisters();
	}, []);

	return {
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
		modalRegister,
		requestModal,
	};
}
