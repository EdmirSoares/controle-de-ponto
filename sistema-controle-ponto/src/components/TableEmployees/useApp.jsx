import { useState } from "react";

export default function useApp() {
	const handleInative = (item) => {
		console.log("Inativar", item);
		setMenuVisible(false);
	};
	const handleDelete = (item) => {
		console.log("Deletar", item);
		setMenuVisible(false);
	};

	return {
		handleInative,
		handleDelete,
	};
}
