import { Eye, AlertTriangle } from 'react-feather';
import StatusTable from '../StatusTable';
import './styles.css';
import { formatDate } from '../../utils/date';
import { Fragment } from 'react';

export default function TableRequest({ data, onView }) {
	return (
		<div className="table-container">
			<div className="table-wrapper">
				{data && data.length > 0 ? (
					<table>
						<thead className="tableHeader">
							<tr className="columnsHeader">
								<th className="labelHeader">Colaborador</th>
								<th className="labelHeader">Motivo</th>
								<th className="labelHeader">Data do Ponto</th>
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
									<td className="textsColumn">
										{item.nmFuncionario}
									</td>
									<td className="textsColumn">
										{item.dsMotivo}
									</td>
									<td className="textsColumn">
										{formatDate(item.dataHora)}
									</td>
									<td className="textsColumn">
										<StatusTable statusText={item.status} />
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
					<div className="loadingContainer">
						<div className="loading">
							<AlertTriangle
								size={32}
								color={'var(--text-color-gray)'}
							/>
							<p>Nenhum dado encontrado!</p>
						</div>
					</div>
				)}
			</div>
		</div>
	);
}
