import { Route, Routes } from "react-router-dom";
import Registros from "../screens/Registros";
import Home from "../screens/Home";
import Solicitacoes from "../screens/Solicitações";
import Colaboradores from "../screens/Colaboradores";

export default function Authenticated() {
	return (
		<Routes>
			<Route path="*" element={<Home />} />
			<Route path="/home" element={<Home />} />
			<Route path="/registros" element={<Registros />} />
			<Route path="/solicitacoes" element={<Solicitacoes />} />
			<Route path="/colaboradores" element={<Colaboradores />} />
		</Routes>
	);
}
