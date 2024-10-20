import "./styles.css";
import SideMenu from "../../components/SideMenu";
import RightAreaScreen from "../../components/RightAreaScreen";
import Table from "../../components/Table";
import useApp from "./useApp";

export default function Registros() {
	const { getDataRegisters, dataRegisters } = useApp();

	return (
		<div className="container">
			<SideMenu />
			<RightAreaScreen
				title="Registros"
				subTitle="Registro de todos os pontos cadastrados"
				buttonLabel="Registrar Ponto"
			>
				{dataRegisters && dataRegisters.length === 0 ? (
					<p>Nenhum registro encontrado</p>
				) : (
					<Table data={dataRegisters} />
				)}
			</RightAreaScreen>
		</div>
	);
}
