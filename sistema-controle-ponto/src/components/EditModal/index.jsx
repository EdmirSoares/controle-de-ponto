import React from "react";
import useApp from "./useApp";
import "./styles.css";
import { formatDate } from "../../utils/date";

export default function EditModal({ onClose, onRequest }) {
	const { handleClose } = useApp(onClose);

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
								<p className="displayText">{""}</p>
							</div>
						</div>
						<div className="infoContainer">
							<div className="labelTitle">
								<p className="infoText">Status</p>
							</div>
							<div className="displayContent">
								<p className="displayText">{""}</p>
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
									value={""}
								>
									{""}
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
