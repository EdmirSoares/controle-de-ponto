import { useEffect, useState } from "react";

export default function useApp(onClose, data) {
	const [isJustified, setIsJustified] = useState(false);

	const handleClose = () => {
		onClose();
	};

	useEffect(() => {
		if (data.dsJustificativa) {
			setIsJustified(true);
		}
	});

	return {
		handleClose,
		isJustified,
	};
}
