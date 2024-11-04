import React from "react";
import useApp from "./useApp";
import "./styles.css";

export default function EditModal({ onClose, data }) {
	const {
		handleClose,
		handlerChangeDate,
		handlerChangeTime,
		handleConfirm,
		isDateTimeEmpty,
		date,
		time,
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
						<div className="infoContainerEditModal">
							<div className="labelTitle">
								<p className="infoText">Data e Hora</p>
							</div>
							<div className="displayContainerEdit">
								<div
									className="displayContentEdit"
									style={{
										border:
											isDateTimeEmpty &&
											dataEdit.dtPonto &&
											"1px solid red",
									}}
								>
									<input
										aria-label="Date"
										type="date"
										className="displayText"
										value={date}
										style={{
											backgroundColor: "transparent",
										}}
										onChange={(e) => handlerChangeDate(e)}
									/>
								</div>
								<div
									className="displayContentEdit"
									style={{
										border:
											isDateTimeEmpty &&
											dataEdit.dtPonto &&
											"1px solid red",
									}}
								>
									<input
										aria-label="Time"
										type="time"
										className="displayText"
										value={time}
										style={{
											backgroundColor: "transparent",
										}}
										onChange={(e) => handlerChangeTime(e)}
									/>
								</div>
							</div>
						</div>
					</div>
					<div className="lowerContainer">
						<div className="descriptionContainer">
							<div className="labelTitle">
								<p className="infoText">Descrição</p>
							</div>
							<div className="descriptionContentEdit">
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
									{data.dsDescricao}
								</textarea>
							</div>
						</div>
						<div className="descriptionContainer">
							<div className="labelTitle">
								<p className="infoText">
									Justificativa da Decisão
								</p>
							</div>
							<div className="descriptionContentEdit">
								<textarea
									className="displayDescription"
									readOnly
									value={
										data.dsJustificativa &&
										data.dsJustificativa !== ""
											? data.dsJustificativa
											: "Sem descrição"
									}
								>
									{data.dsJustificativa}
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
