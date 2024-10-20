import { Route, Routes } from "react-router-dom";
import DashboardFuncionario from "../screens/DashboardFuncionario";
import Registros from "../screens/Registros";

export default function Authenticated() {
	return (
		<Routes>
			<Route path="*" element={<DashboardFuncionario />} />
			<Route
				path="/dashboard-funcionario"
				element={<DashboardFuncionario />}
			/>
			<Route path="/registros" element={<Registros />} />
		</Routes>
	);
}
