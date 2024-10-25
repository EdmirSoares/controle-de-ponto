import { Route, Routes } from "react-router-dom";
import Registros from "../screens/Registros";
import Home from "../screens/Home";

export default function Authenticated() {
	return (
		<Routes>
			<Route path="*" element={<Home />} />
			<Route path="/home" element={<Home />} />
			<Route path="/registros" element={<Registros />} />
		</Routes>
	);
}
