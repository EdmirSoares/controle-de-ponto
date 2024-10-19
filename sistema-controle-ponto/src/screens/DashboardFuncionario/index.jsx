import "./styles.css";
import SideMenu from "../../components/SideMenu";

export default function DashboardFuncionario(props) {
	return (
		<div className="container">
			<SideMenu />
			<div className="rightContainerScreens">
				<div className="headerContainerScreens">
					<div className="textContentHeader">
						<h1 className="headerTitle">{"Dashboard"}</h1>
						<p>{"Registro de todos os pontos cadastrados"}</p>
					</div>
					<button className="buttonHeader">
						{"Registrar Ponto"}
					</button>
				</div>
			</div>
		</div>
	);
}
