import "./styles.css";
import useApp from "./useApp";

export default function StatusBoolean({ status }) {
	const { handlerStatus } = useApp();
	const statusInfo = handlerStatus(status);
	const { text, color, backgroundColor } = statusInfo;

	return (
		<div
			className="statusColumn"
			style={{ backgroundColor: backgroundColor }}
		>
			<p className="statusText" style={{ color: color }}>
				{text}
			</p>
		</div>
	);
}
