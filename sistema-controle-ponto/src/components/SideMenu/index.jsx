import "./styles.css";
import { LogOut } from "react-feather";
import useApp from "./useApp";

export default function SideMenu() {
	const { handleNavigation, signOut } = useApp();
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
					onClick={() => handleNavigation("/home")}
				>
					<p className="textNavigation" data-screen="/home">
						Home
					</p>
				</div>
				<div
					className="menuItem"
					onClick={() => handleNavigation("/registros")}
				>
					<p className="textNavigation" data-screen="/registros">
						Registros
					</p>
				</div>
				<div
					className="menuItem"
					onClick={() => handleNavigation("/solicitacoes")}
				>
					<p className="textNavigation" data-screen="/solicitacoes">
						Solicitações
					</p>
				</div>
				<div
					className="menuItem"
					onClick={() => handleNavigation("/colaboradores")}
				>
					<p className="textNavigation" data-screen="/colaboradores">
						Colaboradores
					</p>
				</div>
			</div>
			<div className="footerContainer">
				<p className="textNavigation" onClick={signOut}>
					Sair
				</p>
				<LogOut onClick={signOut} style={{ cursor: "pointer" }} />
			</div>
		</div>
	);
}
