export const getUserDataLocalStorage = () => {
	const user = localStorage.getItem("@user_data");
	if (user) {
		return JSON.parse(user);
	} else {
		toast.error("Usuário não encontrado!");
	}
};
