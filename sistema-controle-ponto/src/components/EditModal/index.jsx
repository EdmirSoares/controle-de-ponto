import React from "react";
import useApp from "./useApp";
import "./styles.css";

export default function EditModal({ onClose, data }) {
	const {
		handleClose,
		handlerChangeDateTime,
		handleConfirm,
		isDateTimeEmpty,
		dateTime,
		dataEdit,
	} = useApp(onClose, data);

	return (
		<div className="modalContainer" onClick={handleClose}>
			<div
				className="modalContentEdit"
				onClick={(e) => e.stopPropagation()}
			>
				<div className="modalHeaderView">
					<div>
						<h2 className="modalTitle">Editar Registro</h2>
						<p className="modalSubTitle">
							Atualize sua jornada de trabalho
						</p>
					</div>
				</div>
				<div className="modalBody">
					<div className="upperContainer">
						<div className="infoContainer">
							<div className="labelTitle">
								<p className="infoText">Data e Hora</p>
							</div>
							<div
								className="displayContent"
								style={{
									border:
										isDateTimeEmpty &&
										dataEdit.dtPonto &&
										"1px solid red",
								}}
							>
								<input
									aria-label="Date and time"
									type="datetime-local"
									className="displayText"
									value={dateTime}
									style={{
										backgroundColor: "transparent",
									}}
									onChange={(e) => handlerChangeDateTime(e)}
								/>
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
										data.dsDescicao &&
										data.dsDescricao !== ""
											? data.dsDescricao
											: "Sem descrição"
									}
								>
									{data.dsDescicao}
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
					<button className="footerButtons" onClick={handleConfirm}>
						Enviar
					</button>
				</div>
			</div>
		</div>
	);
}
