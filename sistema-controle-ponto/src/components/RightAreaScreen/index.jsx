import "./styles.css";
export default function RightAreaScreen({
	title,
	subTitle,
	buttonLabel,
	children,
}) {
	return (
		<div className="rightContainerScreens">
			<div className="headerContainerScreens">
				<div className="textContentHeader">
					<h1 className="headerTitle">{title}</h1>
					<p>{subTitle}</p>
				</div>
				{buttonLabel && buttonLabel !== "" && (
					<button className="buttonHeader">{buttonLabel}</button>
				)}
			</div>
			{children}
		</div>
	);
}
