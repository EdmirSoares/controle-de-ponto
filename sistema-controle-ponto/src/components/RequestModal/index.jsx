import React from "react";
import useApp from "./useApp";
import "./styles.css";
import { formatDate } from "../../utils/date";

export default function RequestModal({ data, onClose }) {
	const { handleConfirm, handleClose } = useApp(onClose, data);

	return (
		<div className="modalContainer" onClick={handleClose}>
			<div
				className="modalContentView"
				onClick={(e) => e.stopPropagation()}
			>
				<div className="modalHeaderView">
					<div>
						<h2 className="modalTitle">Visualização do Registro</h2>
						<p className="modalSubTitle">
							Confira todos os dados dos eu registro!
						</p>
					</div>
					{data.tpStatus === "Confirmado" && (
						<button
							className="footerButtons"
							onClick={handleConfirm}
						>
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
									{formatDate(data.dtPonto)}
								</p>
							</div>
						</div>
						<div className="infoContainer">
							<div className="labelTitle">
								<p className="infoText">Status</p>
							</div>
							<div className="displayContent">
								<p className="displayText">{data.tpStatus}</p>
							</div>
						</div>
					</div>
					<div className="lowerContainer">
						<div className="descriptionContainer">
							<div className="labelTitle">
								<p className="infoText">Descrição</p>
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
