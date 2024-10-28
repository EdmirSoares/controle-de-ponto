export default function useApp(onClose) {
	const handleClose = () => {
		onClose();
	};

	return {
		handleClose,
	};
}
