import "./styles.css";
import { RefreshCw } from "react-feather";

export default function RightAreaScreen({
	title,
	subTitle,
	positiveButtonLabel,
	onClickPositiveButton,
	children,
	onClickReload,
}) {
	return (
		<div className="rightContainerScreens">
			<div className="headerContainerScreens">
				<div className="textContentHeader">
					<h1 className="headerTitle">{title}</h1>
					<p>{subTitle}</p>
				</div>
				<div className="buttonContainer">
					{onClickReload && (
						<button
							className="buttonNegative"
							onClick={onClickReload}
						>
							<RefreshCw size={16} />
						</button>
					)}

					{positiveButtonLabel && positiveButtonLabel !== "" && (
						<button onClick={onClickPositiveButton}>
							{positiveButtonLabel}
						</button>
					)}
				</div>
			</div>
			{children}
		</div>
	);
}
