import './styles.css';
import SideMenu from '../../components/SideMenu';
import RightAreaScreen from '../../components/RightAreaScreen';
import Table from '../../components/Table';
import useApp from './useApp';
import RegisterModal from '../../components/RegisterModal';
import ViewModal from '../../components/ViewModal';
import RequestModal from '../../components/RequestModal';
import EditModal from '../../components/EditModal';
import { AlertTriangle } from 'react-feather';

export default function Registros() {
	const {
		loading,
		getDataRegisters,
		dataRegisters,
		handleOpenEdit,
		handleCloseEdit,
		handleOpenView,
		handleCloseView,
		modalView,
		dataView,
		modalEdit,
		handleOpenRegister,
		handleCloseRegister,
		handlerRequestEdit,
		handlerCloseRequest,
		dataRequest,
		modalRegister,
		requestModal,
		dataEdit,
	} = useApp();

	return (
		<div className="container">
			<SideMenu />
			<RightAreaScreen
				title="Registros"
				subTitle="Registro de todos os pontos cadastrados"
				positiveButtonLabel="Registrar Ponto"
				onClickPositiveButton={handleOpenRegister}
				onClickReload={() => getDataRegisters()}
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
				) : dataRegisters && dataRegisters.length > 0 ? (
					<Table
						data={dataRegisters}
						onEdit={handleOpenEdit}
						onView={handleOpenView}
					/>
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
			</RightAreaScreen>
			{modalRegister && <RegisterModal onClose={handleCloseRegister} />}
			{modalView && (
				<ViewModal
					data={dataView}
					onClose={handleCloseView}
					onRequest={handlerRequestEdit}
				/>
			)}
			{requestModal && (
				<RequestModal
					data={dataRequest}
					onClose={handlerCloseRequest}
				/>
			)}
			{modalEdit && (
				<EditModal onClose={handleCloseEdit} data={dataEdit} />
			)}
		</div>
	);
}
