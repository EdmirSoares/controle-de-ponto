import { useState, useContext } from "react";
import { AuthContext } from "../../context/auth";
import { toast } from "sonner";

export default function useApp() {
	const { signIn } = useContext(AuthContext);

	const [capturedDataLogin, setCapturedDataLogin] = useState({
		name: "",
		email: "",
	});

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setCapturedDataLogin((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	const handlerLogin = () => {
		if (capturedDataLogin.email === "" || capturedDataLogin.name === "") {
			toast.error("Preencha todos os campos para continuar");
			return;
		}
		signIn(capturedDataLogin);
	};

	return {
		capturedDataLogin,
		handleInputChange,
		handlerLogin,
	};
}
