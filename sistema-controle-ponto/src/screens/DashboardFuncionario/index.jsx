import "./styles.css";
import SideMenu from "../../components/SideMenu";

export default function DashboardFuncionario() {
	return (
		<div className="container">
			<SideMenu />
			<div className="rightContainer">
				<div className="headerContainer">
					<h1>Dashboard</h1>
				</div>
			</div>
		</div>
	);
}
