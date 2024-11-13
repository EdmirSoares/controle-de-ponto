import './styles.css';
export default function useApp() {
	const handlerStatus = statusText => {
		if (statusText === 'aprovado') {
			return {
				text: 'Aprovado',
				color: '#3A974C',
				backgroundColor: 'rgba(58, 151, 76, 0.10)',
			};
		}
		if (statusText === 'editado') {
			return {
				text: 'Editado',
				color: '#F29339',
				backgroundColor: 'rgba(242, 147, 57, 0.10)',
			};
		}
		if (statusText === 'rejeitado') {
			return {
				text: 'Rejeitado',
				color: '#D11A2A',
				backgroundColor: 'rgba(209, 26, 42, 0.10)',
			};
		}
		if (statusText === 'solicitado') {
			return {
				text: 'Solicitado',
				color: '#421ad1',
				backgroundColor: 'rgba(66, 26, 209, 0.10)',
			};
		}
		if (statusText === 'pendente') {
			return {
				text: 'Pendente',
				color: '#1aa0d1',
				backgroundColor: 'rgba(26, 160, 290, 0.10)',
			};
		}

		return {
			text: 'Desconhecido',
			color: '#000000',
			backgroundColor: 'rgba(0, 0, 0, 0.10)',
		};
	};

	return {
		handlerStatus,
	};
}
