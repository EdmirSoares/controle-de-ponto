import { Eye } from "react-feather";
import StatusTable from "../StatusTable";
import "./styles.css";
import { formatDate } from "../../utils/date";
import { Fragment } from "react";

export default function TableRequest({ data, onView }) {
	return (
		<div className="table-container">
			<div className="table-wrapper">
				{data && data.length > 0 ? (
					<table>
						<thead className="tableHeader">
							<tr className="columnsHeader">
								<th className="labelHeader">Colaborador</th>
								<th className="labelHeader">Email</th>
								<th className="labelHeader">
									Data Solicitação
								</th>
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
										{formatDate(item.dtPonto)}
									</td>
									<td className="textsColumn">
										<StatusTable
											statusText={item.tpStatus}
										/>
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
