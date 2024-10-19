import { Route, Routes } from "react-router-dom";
import DashboardFuncionario from "../screens/DashboardFuncionario";

export default function Authenticated() {
	return (
		<Routes>
			<Route path="*" element={<DashboardFuncionario />} />
			<Route
				path="/dashboard-funcionario"
				element={<DashboardFuncionario />}
			/>
		</Routes>
	);
}
