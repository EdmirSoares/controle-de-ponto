import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { AuthContext } from "../context/auth";
import Registros from "../screens/Registros";
import Home from "../screens/Home";
import Solicitacoes from "../screens/Solicitações";
import Colaboradores from "../screens/Colaboradores";

export default function Authenticated() {
	const { isAdmin } = useContext(AuthContext);
	return (
		<Routes>
			<Route path="*" element={<Home />} />
			<Route path="/home" element={<Home />} />
			<Route path="/registros" element={<Registros />} />
			<Route path="/solicitacoes" element={<Solicitacoes />} />
			{isAdmin && (
				<Route path="/colaboradores" element={<Colaboradores />} />
			)}
		</Routes>
	);
}
