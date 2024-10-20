import "./styles.css";
import SideMenu from "../../components/SideMenu";
import RightAreaScreen from "../../components/RightAreaScreen";
import Table from "../../components/Table";

export default function Registros() {
	return (
		<div className="container">
			<SideMenu />
			<RightAreaScreen
				title="Registros"
				subTitle="Registro de todos os pontos cadastrados"
				buttonLabel="Registrar Ponto"
			>
				<Table />
			</RightAreaScreen>
		</div>
	);
}
