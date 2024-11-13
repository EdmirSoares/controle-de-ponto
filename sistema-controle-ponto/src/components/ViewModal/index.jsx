import React from 'react';
import useApp from './useApp';
import './styles.css';
import { formatDate } from '../../utils/date';

export default function ViewModal({ data, onClose, onRequest }) {
	const { handleClose, isJustified } = useApp(onClose, data);

	return (
		<div className="modalContainer" onClick={handleClose}>
			<div
				className="modalContentView"
				onClick={e => e.stopPropagation()}
			>
				<div className="modalHeaderView">
					<div>
						<h2 className="modalTitle">Visualização do Registro</h2>
						<p className="modalSubTitle">
							Confira todos os dados dos eu registro!
						</p>
					</div>
					{data.status === 'aprovado' && (
						<button className="footerButtons" onClick={onRequest}>
							Solicitar Edição
						</button>
					)}
				</div>
				<div className="modalBody">
					<div className="upperContainer">
						<div className="infoContainer">
							<div className="labelTitle">
								<p className="infoText">Data e Hora</p>
							</div>
							<div className="displayContent">
								<p className="displayText">
									{formatDate(data.dataHora)}
								</p>
							</div>
						</div>
						<div className="infoContainer">
							<div className="labelTitle">
								<p className="infoText">Status</p>
							</div>
							<div className="displayContent">
								<p className="displayText">{data.status}</p>
							</div>
						</div>
					</div>
					<div className="lowerContainer">
						<div className="descriptionContainer">
							<div className="labelTitle">
								<p className="infoText">Descrição</p>
							</div>
							<div className="descriptionContentView">
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
						{isJustified && (
							<div className="descriptionContainer">
								<div className="labelTitle">
									<p className="infoText">
										Motivo da Aprovação/Reprovação
									</p>
								</div>
								<div className="descriptionContentView">
									<textarea
										className="displayDescription"
										readOnly
										value={
											data.dsJustificativa &&
											data.dsJustificativa !== ''
												? data.dsJustificativa
												: 'Sem Justificativa'
										}
									>
										{data.dsJustificativa &&
										data.dsJustificativa !== ''
											? data.dsJustificativa
											: 'Sem Justificativa'}
									</textarea>
								</div>
							</div>
						)}
					</div>
				</div>
				<div className="modalFooter">
					<button
						className="footerButtons cancelButton"
						onClick={handleClose}
					>
						Cancelar
					</button>
				</div>
			</div>
		</div>
	);
}
