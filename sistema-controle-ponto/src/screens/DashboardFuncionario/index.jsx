import "./styles.css";
import SideMenu from "../../components/SideMenu";

export default function DashboardFuncionario() {
	return (
		<div className="container">
			<SideMenu />
			<div
				style={{
					height: "100%",
					width: "100%",
					borderRadius: "20px 0px 0px 20px",
					backgroundColor: "#ffffff",
				}}
			></div>
		</div>
	);
}
