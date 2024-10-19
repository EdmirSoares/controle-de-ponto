import "./styles.css";
import { Camera, LogOut } from "react-feather";
import useApp from "./useApp";

export default function SideMenu() {
	const { handleNavigation } = useApp();
	return (
		<div className="containerSideMenu">
			<div className="headerContainer">
				<img
					className="imageContainer"
					src="https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=2349"
				/>
				<div className="infoContainer">
					<h1>{"Alex"}</h1>
					<p>{"alex.souza@email.com"}</p>
				</div>
			</div>
			<div className="navigationContainer">
				<div
					className="menuItem"
					onClick={() => handleNavigation("/dashboard-funcionario")}
				>
					<p
						className="textNavigation"
						data-screen="/dashboard-funcionario"
					>
						Dashboard
					</p>
				</div>
				<div
					className="menuItem"
					onClick={() => handleNavigation("/registros")}
				>
					<p className="textNavigation">Registros</p>
				</div>
				<div
					className="menuItem"
					onClick={() => handleNavigation("/solicitacoes")}
				>
					<p className="textNavigation">Solicitações</p>
				</div>
			</div>
			<div className="footerContainer">
				<p className="textNavigation">Sair</p>
				<LogOut />
			</div>
		</div>
	);
}
