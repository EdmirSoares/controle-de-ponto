import React from "react";
import "./styles.css";

export default function RegisterModal({ onClose }) {
	return (
		<div className="modalContainer" onClick={onClose}>
			<div className="modalContent">
				<div className="modalHeader">
					<h2 className="modalTitle">Registrar Ponto</h2>
					<p className="modalSubTitle">Marque sua presença!</p>
				</div>
				<div className="modalBody">
					<div className="dateContainer">
						<div className="dateTitle">
							<p className="dateText">Data e hora</p>
						</div>
						<div className="displayContent">
							<p className="displayText">10.06.2023 - 08:02</p>
						</div>
					</div>
					<div className="confirmContainer">
						<p className="confirmText">
							Deseja registar
							<br />o ponto agora?
						</p>
					</div>
				</div>
				<div className="modalFooter">
					<button
						className="footerButtons cancelButton"
						onClick={onClose}
					>
						Cancelar
					</button>
					<button className="footerButtons">Confirmar</button>
				</div>
			</div>
		</div>
	);
}
