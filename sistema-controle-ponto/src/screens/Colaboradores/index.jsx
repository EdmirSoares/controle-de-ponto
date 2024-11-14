import './styles.css';
import SideMenu from '../../components/SideMenu';
import RightAreaScreen from '../../components/RightAreaScreen';
import TableEmployees from '../../components/TableEmployees';
import useApp from './useApp';
import RegisterEmployeeModal from '../../components/RegisterEmployeeModal';
import { useEffect } from 'react';
import GenericConfirmModal from '../../components/GenericConfirmModal';

export default function Colaboradores() {
	const {
		loading,
		dataEmployees,
		dataRegisterEmployee,
		modalRegisterEmployee,
		modalDeleteEmployee,
		modalStatusEmployee,
		statusEmployee,
		getDataEmployees,
		handleOpenRegisterEmployee,
		handleCloseRegisterEmployee,
		handleOpenDeleteEmployee,
		handleCloseDeleteEmployee,
		handleDeleteEmployee,
		handleOpenStatusEmployee,
		handleCloseStatusEmployee,
		handleUpdateStatusEmployee,
	} = useApp();

	return (
		<div className="container">
			<SideMenu />
			<RightAreaScreen
				title="Gerenciar Colaboradores"
				subTitle="Atualize as informações dos colaboradores em um só lugar"
				positiveButtonLabel={'Cadastrar'}
				onClickPositiveButton={handleOpenRegisterEmployee}
				onClickReload={getDataEmployees}
			>
				{loading ? (
					<div className="loadingContainer">
						<div className="loading">
							<p>Carregando</p>
							<span></span>
							<span></span>
							<span></span>
						</div>
					</div>
				) : (
					dataEmployees &&
					dataEmployees.length > 0 && (
						<TableEmployees
							data={dataEmployees}
							onEdit={item => handleOpenRegisterEmployee(item)}
							onActive={item => handleOpenStatusEmployee(item)}
							onInactive={item => handleOpenStatusEmployee(item)}
							onDelete={item => handleOpenDeleteEmployee(item)}
						/>
					)
				)}
			</RightAreaScreen>
			{modalRegisterEmployee && (
				<RegisterEmployeeModal
					data={dataRegisterEmployee}
					onClose={handleCloseRegisterEmployee}
				/>
			)}
			{modalDeleteEmployee && (
				<GenericConfirmModal
					title="Desligar Colaborador"
					subtitle="Esta ação irá remover o registro do sistema!"
					mainText="Confirmar desligamento?"
					onClose={handleCloseDeleteEmployee}
					onConfirm={handleDeleteEmployee}
				/>
			)}
			{modalStatusEmployee && (
				<GenericConfirmModal
					title={
						statusEmployee === 0
							? 'Desativar Colaborador'
							: 'Ativar Colaborador'
					}
					subtitle="Alterar Status do colaborador"
					mainText="Deseja Ativar este Colaborador?"
					onClose={handleCloseStatusEmployee}
					onConfirm={handleUpdateStatusEmployee}
				/>
			)}
		</div>
	);
}
