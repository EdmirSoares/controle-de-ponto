import "./styles.css";
import SideMenu from "../../components/SideMenu";
import RightAreaScreen from "../../components/RightAreaScreen";
import Table from "../../components/Table";
import useApp from "./useApp";
import RegisterModal from "../../components/RegisterModal";
import ViewModal from "../../components/ViewModal";
import RequestModal from "../../components/RequestModal";
import EditModal from "../../components/EditModal";

export default function Registros() {
	const {
		getDataRegisters,
		dataRegisters,
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
	} = useApp();

	return (
		<div className="container">
			<SideMenu />
			<RightAreaScreen
				title="Registros"
				subTitle="Registro de todos os pontos cadastrados"
				positiveButtonLabel="Registrar Ponto"
				onClickPositiveButton={handleOpenRegister}
				onClickReload={() => getDataRegisters()}
			>
				{dataRegisters && dataRegisters.length === 0 ? (
					<p>Nenhum registro encontrado</p>
				) : (
					<Table
						data={dataRegisters}
						onEdit={handleOpenEdit}
						onView={handleOpenView}
					/>
				)}
			</RightAreaScreen>
			{modalRegister && <RegisterModal onClose={handleCloseRegister} />}
			{modalView && (
				<ViewModal
					data={dataView}
					onClose={handleCloseView}
					onRequest={handlerRequestEdit}
				/>
			)}
			{requestModal && (
				<RequestModal
					data={dataRequest}
					onClose={handlerCloseRequest}
				/>
			)}
			{modalEdit && (
				<EditModal onClose={handleCloseEdit} data={dataEdit} />
			)}
		</div>
	);
}
