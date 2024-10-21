import { useState } from "react";

export default function useApp() {
	const [itemEdit, setItemEdit] = useState(null);

	const handleEdit = (item) => {
		setItemEdit(item);
		console.log(item);
	};

	return { handleEdit };
}
