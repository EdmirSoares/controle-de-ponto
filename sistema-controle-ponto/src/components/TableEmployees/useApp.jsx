import { useState } from "react";

export default function useApp(onEdit, onActive, onInactive, onDelete) {
	const handleEdit = (item) => {
		onEdit(item);
	};

	const handleActive = (item) => {
		onActive(item);
	};

	const handleInative = (item) => {
		onInactive(item);
	};
	const handleDelete = (item) => {
		onDelete(item);
	};

	return {
		handleEdit,
		handleActive,
		handleInative,
		handleDelete,
	};
}
