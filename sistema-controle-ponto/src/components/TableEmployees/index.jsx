import {
	AlertOctagon,
	CheckCircle,
	Edit3,
	MoreHorizontal,
	UserX,
} from "react-feather";
import "./styles.css";
import { Fragment } from "react";
import StatusBoolean from "../StatusBoolean";
import useApp from "./useApp";

export default function TableEmployees({ data, onView }) {
	const { handleInative, handleDelete } = useApp();

	return (
		<div className="table-container">
			<div className="table-wrapper">
				{data && data.length > 0 ? (
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
											onClick={() => onView(item)}
										/>
										{item.flAtivo === 0 ? (
											<CheckCircle
												size={20}
												className="btnTable"
												color="var(--green-theme-color)"
												onClick={() =>
													handleInative(
														item.idFuncionario
													)
												}
											/>
										) : (
											<AlertOctagon
												size={20}
												className="btnTable"
												color="var(--yellow-theme-color)"
												onClick={() =>
													handleInative(
														item.idFuncionario
													)
												}
											/>
										)}
										<UserX
											size={20}
											className="btnTable"
											color="var(--red-theme-color)"
											onClick={() => handleDelete(item)}
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
