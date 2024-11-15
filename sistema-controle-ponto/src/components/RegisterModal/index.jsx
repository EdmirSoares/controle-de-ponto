import React from 'react';
import useApp from './useApp';
import './styles.css';

export default function RegisterModal({ onClose, data }) {
	const { dateTime, handleConfirm, handleClose } = useApp(onClose, data);

	return (
		<div className="modalContainer" onClick={handleClose}>
			{dateTime && (
				<div
					className="modalContent"
					onClick={e => e.stopPropagation()}
				>
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
								<p className="displayText">{dateTime}</p>
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
							onClick={handleClose}
						>
							Cancelar
						</button>
						<button
							className="footerButtons"
							onClick={handleConfirm}
						>
							Confirmar
						</button>
					</div>
				</div>
			)}
		</div>
	);
}
