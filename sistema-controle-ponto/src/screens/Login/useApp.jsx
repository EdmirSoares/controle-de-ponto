import { useState, useContext } from 'react';
import { AuthContext } from '../../context/auth';
import { toast } from 'sonner';

export default function useApp() {
	const { signIn } = useContext(AuthContext);

	const [dataLogin, setDataLogin] = useState({
		nmFuncionario: '',
		dsEmail: '',
	});

	const handleInputChange = e => {
		const { name, value } = e.target;
		setDataLogin(prevState => ({
			...prevState,
			[name]: value,
		}));
	};

	const handlerLogin = () => {
		if (dataLogin.nmFuncionario === '' || dataLogin.dsEmail === '') {
			toast.error('Preencha todos os campos para continuar');
			return;
		}
		signIn(dataLogin.nmFuncionario, dataLogin.dsEmail);
	};

	return {
		dataLogin,
		handleInputChange,
		handlerLogin,
	};
}
