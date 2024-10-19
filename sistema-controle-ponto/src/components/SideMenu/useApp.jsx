import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function useApp() {
	const [activeScreen, setActiveScreen] = useState("Dashboard");
	const navigate = useNavigate();
	const location = useLocation();

	const handleNavigation = (screen) => {
		if (activeScreen === screen) return;

		setActiveScreen(screen);
		navigate(screen);
	};

	useEffect(() => {
		setActiveScreen(location.pathname);
	}, [location]);

	return { handleNavigation, activeScreen };
}
