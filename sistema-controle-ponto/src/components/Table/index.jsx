import { LogOut } from "react-feather";
import "./styles.css";
import StatusTable from "../StatusTable";

export default function Table({ data }) {
	return (
		<div className="table-container">
			<table>
				<thead className="tableHeader">
					<tr className="columnsHeader">
						<th className="labelHeader">ID</th>
						<th className="labelHeader">Colaborador</th>
						<th className="labelHeader">Email</th>
						<th className="labelHeader">Ultimo Ponto</th>
						<th className="labelHeader">Status</th>
						<th className="labelHeader">Ações</th>
					</tr>
				</thead>
				<tbody>
					{data.map((item, index) => (
						<tr
							key={`${item.idFuncionario}-${index}`}
							className="columnsBody"
						>
							<td>#{item.idFuncionario}</td>
							<td className="textsColumn">
								{item.nmFuncionario}
							</td>
							<td className="textsColumn">{item.dsEmail}</td>
							<td className="textsColumn">{item.dtPonto}</td>
							<td className="textsColumn">
								<StatusTable statusText={item.tpStatus} />
							</td>
							<td className="btnActionsColumn">aaaaa</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}
