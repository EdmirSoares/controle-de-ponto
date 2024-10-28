import { useContext, useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../context/auth";

export default function useApp() {
	const [activeScreen, setActiveScreen] = useState("Dashboard");
	const navigate = useNavigate();
	const location = useLocation();

	const { signOut } = useContext(AuthContext);

	const handleNavigation = (screen) => {
		if (activeScreen === screen) return;

		setActiveScreen(screen);
		navigate(screen);
	};

	useEffect(() => {
		setActiveScreen(location.pathname);
		const activeScreenElement = document.querySelector(
			"[data-active-screen]"
		);
		if (activeScreenElement) {
			activeScreenElement.classList.remove("activeScreen");
			activeScreenElement.removeAttribute("data-active-screen");
		}
		const newActiveScreenElement = document.querySelector(
			`[data-screen="${activeScreen}"]`
		);
		if (newActiveScreenElement) {
			newActiveScreenElement.classList.add("activeScreen");
			newActiveScreenElement.setAttribute("data-active-screen", "");
		}
	}, [location, activeScreen]);

	return { handleNavigation, signOut };
}
