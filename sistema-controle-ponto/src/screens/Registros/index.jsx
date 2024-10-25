import "./styles.css";
import SideMenu from "../../components/SideMenu";
import RightAreaScreen from "../../components/RightAreaScreen";
import Table from "../../components/Table";
import useApp from "./useApp";
import RegisterModal from "../../components/RegisterModal";

export default function Registros() {
	const {
		getDataRegisters,
		dataRegisters,
		handleOpenEdit,
		handleOpenView,
		modalView,
		modalEdit,
		handleOpenRegister,
		handleCloseRegister,
		modalRegister,
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
		</div>
	);
}
