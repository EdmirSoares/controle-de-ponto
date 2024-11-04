import React from "react";
import useApp from "./useApp";
import "./styles.css";
import { formatDate } from "../../utils/date";

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
								<p className="infoText">Nome</p>
							</div>
							<div
								className="descriptionContentInput"
								style={{
									border:
										registerData.nmFuncionario &&
										registerData.nmFuncionario === "" &&
										alertField
											? "1px solid red"
											: "1px solid #e4e4e7",
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
							{/* {alertField &&
								registerData.nmFuncionario &&
								registerData.nmFuncionario === "" && (
									<p className="alertInfoText">
										* Informe um nome
									</p>
								)} */}
						</div>
						<div className="descriptionContainer">
							<div className="labelTitle">
								<p className="infoText">Email</p>
							</div>
							<div
								className="descriptionContentInput"
								style={{
									border:
										registerData.dsEmail &&
										registerData.dsEmail === "" &&
										alertField
											? "1px solid red"
											: "1px solid #e4e4e7",
								}}
							>
								<input
									area-label="Nome"
									type={"text"}
									className="displayDescription"
									placeholder="Nome"
									name="dsEmail"
									value={registerData.dsEmail}
									onChange={(e) => handlerChangeInputs(e)}
									maxLength={100}
								/>
							</div>
							{/* {alertField &&
								registerData.nmFuncionario &&
								registerData.nmFuncionario === "" && (
									<p className="alertInfoText">
										* Informe um nome
									</p>
								)} */}
						</div>
						<div className="descriptionContainer">
							<div className="labelTitle">
								<p className="infoText">Função</p>
							</div>
							<div
								className="descriptionContentInput"
								style={{
									border:
										registerData.dsFuncao &&
										registerData.dsFuncao === "" &&
										alertField
											? "1px solid red"
											: "1px solid #e4e4e7",
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
							{/* {alertField &&
								registerData.nmFuncionario &&
								registerData.nmFuncionario === "" && (
									<p className="alertInfoText">
										* Informe um nome
									</p>
								)} */}
						</div>
						<div className="descriptionContainer">
							<div className="labelTitle">
								<p className="infoText">Função</p>
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
