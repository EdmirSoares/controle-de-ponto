import { Route, Routes } from "react-router-dom";
import Login from "../screens/Login";

export default function NoAuthenticated() {
	return (
		<Routes>
			<Route path="*" element={<Login />} />
			<Route path="/login" element={<Login />} />
		</Routes>
	);
}
