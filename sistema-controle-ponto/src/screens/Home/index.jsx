import "./styles.css";
import SideMenu from "../../components/SideMenu";
import RightAreaScreen from "../../components/RightAreaScreen";

export default function Home() {
	return (
		<div className="container">
			<SideMenu />
			<RightAreaScreen
				title="Dashboard"
				subTitle="Funcionário"
				buttonLabel="Registrar Ponto"
			>
				<div>
					<h2>Olá, Nome do Funcionário</h2>
					<p>Seja bem-vindo ao seu dashboard!</p>
					<p>
						Confira abaixo as informações sobre o seu último
						registro de ponto:
					</p>
					<p>Data: 01/01/2021</p>
					<p>Horário: 08:00</p>
					<p>Status: Entrada</p>
				</div>
			</RightAreaScreen>
		</div>
	);
}
