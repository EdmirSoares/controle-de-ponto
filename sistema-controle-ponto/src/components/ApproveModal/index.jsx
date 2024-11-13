import React from 'react';
import useApp from './useApp';
import './styles.css';
import { formatDate } from '../../utils/date';

export default function ApproveModal({ data, onClose }) {
	const { handleClose, justification, handleJustification, onApprove } =
		useApp(onClose, data);

	return (
		<div className="modalContainer" onClick={handleClose}>
			<div
				className="modalContentApprove"
				onClick={e => e.stopPropagation()}
			>
				<div className="modalHeaderView">
					<div>
						<h2 className="modalTitle">Aprovar Solicitação</h2>
						<p className="modalSubTitle">
							Aprove ou rejeite a solicitação!
						</p>
					</div>
					<button
						className="footerButtons cancelButton"
						onClick={onClose}
					>
						Fechar
					</button>
				</div>
				<div className="modalBody">
					<div className="lowerContainer">
						<div className="descriptionContainer">
							<div className="labelTitle">
								<p className="infoText">Descrição do Motivo</p>
							</div>
							<div className="descriptionContentAprove">
								<textarea
									className="displayDescription"
									readOnly
									value={
										data.dsMotivo && data.dsMotivo !== ''
											? data.dsMotivo
											: 'Sem descrição'
									}
								>
									{data.dsMotivo && data.dsMotivo !== ''
										? data.dsMotivo
										: 'Sem descrição'}
								</textarea>
							</div>
						</div>
						<div className="descriptionContainer">
							<div className="labelTitle">
								<p className="infoText">
									Justificativa da Decisão
								</p>
							</div>
							<div
								className="descriptionContent"
								style={{
									border: '1px solid #e4e4e7',
								}}
							>
								<textarea
									className="displayDescription"
									value={justification}
									onChange={e => handleJustification(e)}
									required
								>
									{justification}
								</textarea>
							</div>
						</div>
					</div>
				</div>
				<div className="modalFooter">
					<button
						className="footerButtons rejectButton"
						onClick={() => onApprove('rejeitado')}
					>
						Rejeitar
					</button>
					<button
						className="footerButtons approveBurron"
						onClick={() => onApprove('pendente')}
					>
						Aprovar
					</button>
				</div>
			</div>
		</div>
	);
}
