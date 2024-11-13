import axios from 'axios';

export const postLogin = async (nmFuncionario, dsEmail) => {
	const response = await axios.post(
		'http://localhost:3000/colaboradores/login',
		{
			nmFuncionario,
			dsEmail,
		},
	);
	return response.data;
};

export const getEmployees = async () => {
	const response = await axios.get('http://localhost:3000/colaboradores');
	return response.data;
};

export const createEmployee = async data => {
	const response = await axios.post(
		'http://localhost:3000/colaboradores',
		data,
	);
	return response.data;
};

export const updateEmployee = async data => {
	const response = await axios.put(
		'http://localhost:3000/colaboradores/',
		data,
	);
	return response.data;
};

export const deleteEmployee = async idFuncionario => {
	const response = await axios.delete(
		'http://localhost:3000/colaboradores/',
		{
			data: { idFuncionario },
		},
	);
	return response.data;
};

export const updateStatusEmployee = async (idFuncionario, flAtivo) => {
	const response = await axios.put(
		'http://localhost:3000/colaboradores/ativo',
		{
			idFuncionario,
			flAtivo,
		},
	);
	return response.data;
};

// Registros

export const getRegistros = async () => {
	const response = await axios.get('http://localhost:3000/pontos');
	return response.data;
};

export const getRegistrosSolicitados = async data => {
	const response = await axios.post(
		'http://localhost:3000/pontos/status',
		data,
	);
	return response.data;
};

export const createRegistro = async data => {
	const response = await axios.post('http://localhost:3000/pontos', data);
	return response.data;
};

export const requestEdit = async data => {
	const response = await axios.put(
		'http://localhost:3000/pontos/solicitacao',
		data,
	);
	return response.data;
};

export const approveRequest = async data => {
	const response = await axios.put(
		'http://localhost:3000/pontos/status/update',
		data,
	);
	return response.data;
};
