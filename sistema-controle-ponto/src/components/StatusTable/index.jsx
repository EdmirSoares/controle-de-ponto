import "./styles.css";
import useApp from "./useApp";

export default function StatusTable({ statusText }) {
	const { handlerStatus } = useApp();
	const statusInfo = handlerStatus(statusText);
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
