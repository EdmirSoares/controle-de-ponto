import { useEffect, useState } from "react";

export default function useApp(onClose, data) {
	const [justification, setJustification] = useState("");
	const [disabledButton, setDisabledButton] = useState(true);

	const handleJustification = (e) => {
		setJustification(e.target.value);
	};

	const handleClose = () => {
		onClose();
	};

	useEffect(() => {
		if (justification === "") {
			setDisabledButton(true);
			return;
		}
	}, [justification]);

	return {
		handleClose,
		justification,
		disabledButton,
		handleJustification,
	};
}
