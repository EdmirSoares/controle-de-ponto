import "./styles.css";

export default function Table() {
	return (
		<div>
			<div className="headerTable">
				<div className="labelHeader">Id</div>
				<div className="labelHeader">Colaborador</div>
				<div className="labelHeader">Email</div>
				<div className="labelHeader">Ultimo Ponto</div>
				<div className="labelHeader">Status</div>
				<div className="labelHeader">Ações</div>
			</div>
			<table>
				<thead>
					<tr>
						<th>Nome</th>
						<th>Idade</th>
						<th>Profissão</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>João</td>
						<td>25</td>
						<td>Programador</td>
					</tr>
					<tr>
						<td>Maria</td>
						<td>30</td>
						<td>Designer</td>
					</tr>
					<tr>
						<td>José</td>
						<td>40</td>
						<td>Engenheiro</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
}
