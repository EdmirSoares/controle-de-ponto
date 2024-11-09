import React from "react";
import useApp from "./useApp";
import "./styles.css";
import { formatDate } from "../../utils/date";
import { useEffect } from "react";

export default function RegisterEmployeeModal({ data, onClose }) {
	const {
		handleConfirm,
		handleClose,
		handlerChangeInputs,
		alertField,
		registerData,
	} = useApp(onClose, data);

	return (
		<div className="modalContainer" onClick={handleClose}>
			<div
				className="modalContentRequest"
				onClick={(e) => e.stopPropagation()}
			>
				<div className="modalHeaderView">
					<div>
						<h2 className="modalTitle">Cadastrar Colaborador</h2>
						<p className="modalSubTitle">
							Insira as informações para realizar o cadastro
						</p>
					</div>
				</div>
				<div className="modalBody">
					<div className="lowerContainer">
						<div className="descriptionContainer">
							<div className="labelTitle">
								<p className="infoText">
									Nome <span className="requiredSpan">*</span>
								</p>
							</div>
							<div
								className="descriptionContentInput"
								style={{
									border: "1px solid #e4e4e7",
								}}
							>
								<input
									area-label="Nome"
									type={"text"}
									className="displayDescription"
									placeholder="Nome"
									name="nmFuncionario"
									value={registerData.nmFuncionario}
									onChange={(e) => handlerChangeInputs(e)}
									maxLength={100}
								/>
							</div>
						</div>
						<div className="descriptionContainer">
							<div className="labelTitle">
								<p className="infoText">
									Email{" "}
									<span className="requiredSpan">*</span>
								</p>
							</div>
							<div
								className="descriptionContentInput"
								style={{
									border: "1px solid #e4e4e7",
								}}
							>
								<input
									area-label="Nome"
									type={"text"}
									className="displayDescription"
									placeholder="Email"
									name="dsEmail"
									value={registerData.dsEmail}
									onChange={(e) => handlerChangeInputs(e)}
									maxLength={100}
								/>
							</div>
						</div>
						<div className="descriptionContainer">
							<div className="labelTitle">
								<p className="infoText">
									Função{" "}
									<span className="requiredSpan">*</span>
								</p>
							</div>
							<div
								className="descriptionContentInput"
								style={{
									border: "1px solid #e4e4e7",
								}}
							>
								<select
									name="dsFuncao"
									value={registerData.dsFuncao}
									onChange={(e) => handlerChangeInputs(e)}
									maxLength={100}
								>
									<option value="Selecione">Selecione</option>
									<option value="Gerente">Gerente</option>
									<option value="Colaborador">
										Colaborador
									</option>
								</select>
							</div>
						</div>
						<div className="descriptionContainer">
							<div className="rowContainer">
								<input
									className="inputCheckbox"
									type="checkbox"
									name="isAdmin"
									value={registerData.isAdmin}
									checked={registerData.isAdmin}
									onChange={(e) => handlerChangeInputs(e)}
								/>
								<p className="infoText">Supervisor?</p>
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
						Solicitar
					</button>
				</div>
			</div>
		</div>
	);
}
