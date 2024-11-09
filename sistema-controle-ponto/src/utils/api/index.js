import axios from "axios";

export const getEmployees = async () => {
	const response = await axios.get("http://localhost:3000/colaboradores");
	return response.data;
};

export const createEmployee = async (data) => {
	const response = await axios.post(
		"http://localhost:3000/colaboradores",
		data
	);
	return response.data;
};
