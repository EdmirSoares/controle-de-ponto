import React from "react";
import useApp from "./useApp";
import "./styles.css";
import { formatDate } from "../../utils/date";

export default function RequestModal({ data, onClose }) {
	const {
		handleConfirm,
		handleClose,
		description,
		setDescription,
		disabledButton,
		isDescriptionEmpty,
	} = useApp(onClose, data);

	return (
		<div className="modalContainer" onClick={handleClose}>
			<div
				className="modalContentRequest"
				onClick={(e) => e.stopPropagation()}
			>
				<div className="modalHeaderView">
					<div>
						<h2 className="modalTitle">Solicitar Edição</h2>
						<p className="modalSubTitle">
							Informe abaixo o motivo da solicitação
						</p>
					</div>
				</div>
				<div className="modalBody">
					<div className="lowerContainer">
						<div className="descriptionContainer">
							<div className="labelTitle">
								<p className="infoText">Motivo</p>
							</div>
							<div
								className="descriptionContent"
								style={{
									border: isDescriptionEmpty
										? "1px solid red"
										: "1px solid #e4e4e7",
								}}
							>
								<textarea
									className="displayDescription"
									value={description}
									onChange={(e) => {
										setDescription(e.target.value);
									}}
									required
								>
									{description}
								</textarea>
							</div>
							{isDescriptionEmpty && (
								<p className="alertInfoText">
									* Informe um motivo
								</p>
							)}
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
					<button className="footerButtons" onClick={handleConfirm}>
						Solicitar
					</button>
				</div>
			</div>
		</div>
	);
}
