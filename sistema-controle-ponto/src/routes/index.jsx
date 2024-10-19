import { useContext } from "react";
import { AuthContext } from "../context/auth";
import Authenticated from "./Authenticated";
import NoAuthenticated from "./NoAuthenticated";

export default function RoutesApp() {
	const { isLogged, loading } = useContext(AuthContext);

	return isLogged ? <Authenticated /> : <NoAuthenticated />;
}
