import React from "react";
import useApp from "./useApp";
import "./styles.css";
import { formatDate } from "../../utils/date";

export default function ApproveModal({ data, onClose, onConfirm, onReject }) {
	const { handleClose } = useApp(onClose);

	return (
		<div className="modalContainer" onClick={handleClose}>
			<div
				className="modalContentApprove"
				onClick={(e) => e.stopPropagation()}
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
							<div className="descriptionContent">
								<textarea
									className="displayDescription"
									readOnly
									value={
										data.dsDescricao &&
										data.dsDescricao !== ""
											? data.dsDescricao
											: "Sem descrição"
									}
								>
									{data.dsDescricao && data.dsDescricao !== ""
										? data.dsDescricao
										: "Sem descrição"}
								</textarea>
							</div>
						</div>
					</div>
				</div>
				<div className="modalFooter">
					<button
						className="footerButtons rejectButton"
						onClick={onReject}
					>
						Rejeitar
					</button>
					<button
						className="footerButtons approveBurron"
						onClick={onConfirm}
					>
						Aprovar
					</button>
				</div>
			</div>
		</div>
	);
}
