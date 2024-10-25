import "./styles.css";
export default function useApp() {
	const handlerStatus = (statusText) => {
		if (statusText === "Confirmado") {
			return {
				text: "Confirmado",
				color: "#3A974C",
				backgroundColor: "rgba(58, 151, 76, 0.10)",
			};
		}
		if (statusText === "Editado") {
			return {
				text: "Editado",
				color: "#F29339",
				backgroundColor: "rgba(242, 147, 57, 0.10)",
			};
		}
		if (statusText === "Rejeitado") {
			return {
				text: "Rejeitado",
				color: "#D11A2A",
				backgroundColor: "rgba(209, 26, 42, 0.10)",
			};
		}
		if (statusText === "Disponível") {
			return {
				text: "Disponível",
				color: "#421ad1",
				backgroundColor: "rgba(66, 26, 209, 0.10)",
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
