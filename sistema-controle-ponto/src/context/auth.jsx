import { createContext, useEffect, useState } from "react";

const AuthContext = createContext();

function AuthProvider({ children }) {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);
	const [loadingSign, setLoadingSign] = useState(false);
	const [isLogged, setIsLogged] = useState(false);

	useEffect(() => {
		try {
			const user = JSON.parse(localStorage.getItem("@user_data"));
			if (user) {
				setUser(user);
				setIsLogged(true);
			} else {
				setIsLogged(false);
			}
		} catch (error) {
			setIsLogged(false);
			setLoading(false);
		} finally {
			setLoading(false);
		}
	}, []);

	const signIn = async (dataUser) => {
		setLoadingSign(true);
		try {
			//const response = await postLogin();
			setLocalStorage(dataUser);
		} catch (error) {
			setIsLogged(false);
			setLoadingSign(false);
		} finally {
			setLoadingSign(false);
		}
	};

	const signOut = async () => {
		setLoadingSign(true);
		try {
			//await postLogout();
			setUser(null);
			setIsLogged(false);
			localStorage.removeItem("@user_data");
		} catch (error) {
			console.log(error);
		} finally {
			setLoadingSign(false);
		}
	};

	const setLocalStorage = async (dataUser) => {
		try {
			localStorage.setItem("@user_data", JSON.stringify(dataUser));
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<AuthContext.Provider
			value={{
				user,
				setUser,
				loading,
				setLoading,
				loadingSign,
				setLoadingSign,
				isLogged,
				setIsLogged,
				signIn,
				signOut,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
}

export { AuthContext, AuthProvider };
