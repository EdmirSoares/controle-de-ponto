import { useEffect, useState } from "react";
import { toast } from "sonner";

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

	const data = [
		{
			idFuncionario: "1",
			nmFuncionario: "Alex Souza",
			dsEmail: "alexsouza@gmail.com",
			tpStatus: "Editado",
			dtPonto: "2023-10-01T08:30:00Z",
			dsDescricao: "Correção de horário",
			dsJustificativa:
				"Solicitação aprovada pelo gestor por motivo válido",
		},
		{
			idFuncionario: "2",
			nmFuncionario: "Maria Silva",
			dsEmail: "mariasilva@gmail.com",
			tpStatus: "Confirmado",
			dtPonto: "2023-10-01T09:00:00Z",
			dsDescricao: "",
			dsJustificativa: "",
		},
		{
			idFuncionario: "3",
			nmFuncionario: "João Pereira",
			dsEmail: "joaopereira@gmail.com",
			tpStatus: "Rejeitado",
			dtPonto: "2023-10-01T09:15:00Z",
			dsDescricao: "Atraso por motivo pessoal",
			dsJustificativa: "Justificativa inválida",
		},
		{
			idFuncionario: "4",
			nmFuncionario: "Ana Costa",
			dsEmail: "anacosta@gmail.com",
			tpStatus: "Disponível",
			dtPonto: "2023-10-01T09:45:00Z",
			dsDescricao: "Problemas de saúde",
			dsJustificativa: "Justificativa válida para atraso",
		},
		{
			idFuncionario: "5",
			nmFuncionario: "Carlos Lima",
			dsEmail: "carloslima@gmail.com",
			tpStatus: "Editado",
			dtPonto: "2023-10-01T10:00:00Z",
			dsDescricao: "Correção de ponto manual",
			dsJustificativa:
				"Solicitação aprovada pelo gestor por motivo válido",
		},
		{
			idFuncionario: "6",
			nmFuncionario: "Beatriz Fernandes",
			dsEmail: "beatrizfernandes@gmail.com",
			tpStatus: "Confirmado",
			dtPonto: "2023-10-01T10:30:00Z",
			dsDescricao: "",
			dsJustificativa: "",
		},
		{
			idFuncionario: "7",
			nmFuncionario: "Pedro Rocha",
			dsEmail: "pedrorocha@gmail.com",
			tpStatus: "Editado",
			dtPonto: "2023-10-01T11:00:00Z",
			dsDescricao: "Alteração solicitada pelo gestor",
			dsJustificativa:
				"Solicitação aprovada pelo gestor por motivo válido",
		},
		{
			idFuncionario: "8",
			nmFuncionario: "Lucas Oliveira",
			dsEmail: "lucasoliveira@gmail.com",
			tpStatus: "Confirmado",
			dtPonto: "2023-10-01T11:30:00Z",
			dsDescricao: "",
			dsJustificativa: "",
		},
		{
			idFuncionario: "9",
			nmFuncionario: "Juliana Santos",
			dsEmail: "julianasantos@gmail.com",
			tpStatus: "Rejeitado",
			dtPonto: "2023-10-01T12:00:00Z",
			dsDescricao: "Registro duplicado",
			dsJustificativa: "Solicitação inválida, registro não duplicado",
		},
		{
			idFuncionario: "10",
			nmFuncionario: "Fernando Ribeiro",
			dsEmail: "fernandoribeiro@gmail.com",
			tpStatus: "Disponível",
			dtPonto: "2023-10-01T12:30:00Z",
			dsDescricao: "Atraso no exame médico",
			dsJustificativa: "Justificativa válida para atraso",
		},
		{
			idFuncionario: "11",
			nmFuncionario: "Carla Mendes",
			dsEmail: "carlamendes@gmail.com",
			tpStatus: "Confirmado",
			dtPonto: "2023-10-01T13:00:00Z",
			dsDescricao: "",
			dsJustificativa: "",
		},
		{
			idFuncionario: "12",
			nmFuncionario: "Ricardo Martins",
			dsEmail: "ricardomartins@gmail.com",
			tpStatus: "Editado",
			dtPonto: "2023-10-01T13:30:00Z",
			dsDescricao: "Atualização de horário",
			dsJustificativa:
				"Solicitação aprovada pelo gestor por motivo válido",
		},
		{
			idFuncionario: "13",
			nmFuncionario: "Patrícia Almeida",
			dsEmail: "patricia.almeida@gmail.com",
			tpStatus: "Disponível",
			dtPonto: "2023-10-01T14:00:00Z",
			dsDescricao: "Acidente de trânsito",
			dsJustificativa: "Justificativa válida para atraso",
		},
		{
			idFuncionario: "14",
			nmFuncionario: "Thiago Nunes",
			dsEmail: "thiagonunes@gmail.com",
			tpStatus: "Rejeitado",
			dtPonto: "2023-10-01T14:30:00Z",
			dsDescricao: "Horário inconsistente",
			dsJustificativa:
				"Justificativa inválida, horário compatível com a jornada",
		},
		{
			idFuncionario: "15",
			nmFuncionario: "Mariana Campos",
			dsEmail: "marianacampos@gmail.com",
			tpStatus: "Confirmado",
			dtPonto: "2023-10-01T15:00:00Z",
			dsDescricao: "",
			dsJustificativa: "",
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
		setDataEdit(item);
		setModalEdit(true);
	};

	const handleCloseEdit = () => {
		setModalEdit(false);
	};

	const handleOpenView = (item) => {
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
