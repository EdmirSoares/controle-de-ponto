import React from "react";
import "./styles.css";

export default function GenericConfirmModal({
	title,
	subtitle,
	mainText,
	onClose,
	onConfirm,
}) {
	return (
		<div className="modalContainer" onClick={onClose}>
			<div
				className="modalContentApprove"
				onClick={(e) => e.stopPropagation()}
			>
				<div className="modalHeaderView">
					<div>
						<h2 className="modalTitle">{title}</h2>
						<p className="modalSubTitle">{subtitle}</p>
					</div>
				</div>
				<div className="modalBody">
					<div className="lowerContainer">
						<div className="mainTextContainer">
							<p className="mainText">{mainText}</p>
						</div>
					</div>
				</div>
				<div className="modalFooter">
					<button
						className="footerButtons cancelButton"
						onClick={onClose}
					>
						Cancelar
					</button>
					<button className="footerButtons" onClick={onConfirm}>
						Confirmar
					</button>
				</div>
			</div>
		</div>
	);
}
