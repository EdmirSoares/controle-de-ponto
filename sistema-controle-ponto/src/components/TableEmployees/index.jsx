import { AlertOctagon, CheckCircle, Edit3, UserX } from "react-feather";
import "./styles.css";
import { Fragment } from "react";
import StatusBoolean from "../StatusBoolean";

export default function TableEmployees({
	data,
	onEdit,
	onActive,
	onInactive,
	onDelete,
}) {
	return (
		<div className="table-container">
			<div className="table-wrapper">
				{data && data?.length > 0 ? (
					<table>
						<thead className="tableHeader">
							<tr className="columnsHeader">
								<th className="labelHeader">Colaborador</th>
								<th className="labelHeader">Email</th>
								<th className="labelHeader">Função</th>
								<th className="labelHeader">Status</th>
								<th className="labelHeaderNoSize ColumnActions">
									Ações
								</th>
							</tr>
						</thead>
						<tbody className="tableBody">
							{data.map((item, index) => (
								<tr
									key={`${item.idFuncionario}-${index}`}
									className="columnsBody"
								>
									<td className="textsColumn">
										{item.nmFuncionario}
									</td>
									<td className="textsColumn">
										{item.dsEmail}
									</td>
									<td className="textsColumn">
										{item.dsFuncao}
									</td>
									<td className="textsColumn">
										{
											<StatusBoolean
												status={item.flAtivo}
											/>
										}
									</td>
									<td className="ColumnActions">
										<Edit3
											size={20}
											className="btnTable"
											onClick={() => onEdit(item)}
										/>
										{item.flAtivo === 0 ? (
											<CheckCircle
												size={20}
												className="btnTable"
												color="var(--green-theme-color)"
												onClick={() => onActive(item)}
											/>
										) : (
											<AlertOctagon
												size={20}
												className="btnTable"
												color="var(--yellow-theme-color)"
												onClick={() =>
													onInactive(
														item.idFuncionario
													)
												}
											/>
										)}
										<UserX
											size={20}
											className="btnTable"
											color="var(--red-theme-color)"
											onClick={() => onDelete(item)}
										/>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				) : (
					<Fragment>
						<p>Nenhuma solicitação encontrada</p>
					</Fragment>
				)}
			</div>
		</div>
	);
}
