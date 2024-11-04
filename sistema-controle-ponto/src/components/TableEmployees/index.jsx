import { Eye } from "react-feather";
import "./styles.css";
import { Fragment } from "react";
import StatusBoolean from "../StatusBoolean";

export default function TableEmployees({ data, onView }) {
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
								<th className="labelHeaderNoSize btnActionsColumn">
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
									<td className="btnActionsColumn">
										<Eye
											size={18}
											className="btnEdit"
											onClick={() => onView(item)}
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
