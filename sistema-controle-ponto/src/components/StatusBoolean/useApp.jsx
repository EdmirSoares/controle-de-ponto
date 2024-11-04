import "./styles.css";
export default function useApp() {
	const handlerStatus = (statusText) => {
		if (statusText === 1) {
			return {
				text: "Ativo",
				color: "#3A974C",
				backgroundColor: "rgba(58, 151, 76, 0.10)",
			};
		}
		if (statusText === 0) {
			return {
				text: "Inativo",
				color: "#F29339",
				backgroundColor: "rgba(242, 147, 57, 0.10)",
			};
		}
		return {
			text: "Desconhecido",
			color: "#000000",
			backgroundColor: "rgba(0, 0, 0, 0.10)",
		};
	};

	return {
		handlerStatus,
	};
}
