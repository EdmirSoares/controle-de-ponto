import { Edit3, Eye } from 'react-feather';
import StatusTable from '../StatusTable';
import './styles.css';
import { formatDate } from '../../utils/date';

export default function Table({ data, onEdit, onView }) {
	return (
		<div className="table-container">
			<div className="table-wrapper">
				<table>
					<thead className="tableHeader">
						<tr className="columnsHeader">
							<th className="labelHeaderNoSize">ID</th>
							<th className="labelHeader">Colaborador</th>
							<th className="labelHeader">Data e Hora</th>
							<th className="labelHeader">Tipo</th>
							<th className="labelHeader">Status</th>
							<th className="labelHeaderNoSize btnActionsColumn">
								Ações
							</th>
						</tr>
					</thead>
					<tbody className="tableBody">
						{data.map((item, index) => (
							<tr
								key={`${item.idPonto}-${index}`}
								className="columnsBody"
							>
								<td>#{item.idPonto}</td>
								<td className="textsColumn">
									{item.nmFuncionario}
								</td>
								<td className="textsColumn">
									{formatDate(item.dataHora)}
								</td>
								<td className="textsColumn">{item.tipo}</td>
								<td className="textsColumn">
									<StatusTable statusText={item.status} />
								</td>
								<td className="btnActionsColumn">
									{item.tpStatus &&
									item.tpStatus === 'Disponível' ? (
										<Edit3
											size={18}
											className="btnEdit"
											onClick={() => onEdit(item)}
										/>
									) : (
										<Eye
											size={18}
											className="btnEdit"
											onClick={() => onView(item)}
										/>
									)}
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
}
