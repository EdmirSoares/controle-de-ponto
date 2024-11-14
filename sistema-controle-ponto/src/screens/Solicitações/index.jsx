import './styles.css';
import SideMenu from '../../components/SideMenu';
import RightAreaScreen from '../../components/RightAreaScreen';
import Table from '../../components/Table';
import useApp from './useApp';
import RegisterModal from '../../components/RegisterModal';
import ViewModal from '../../components/ViewModal';
import RequestModal from '../../components/RequestModal';
import EditModal from '../../components/EditModal';
import TableRequest from '../../components/TableRequest';
import ApproveModal from '../../components/ApproveModal';
import { AlertTriangle } from 'react-feather';

export default function Solicitacoes() {
	const {
		loading,
		dataRequests,
		getDataRequests,
		modalApprove,
		approveData,
		handlerModalApprove,
		handleCloseModalApprove,
	} = useApp();

	return (
		<div className="container">
			<SideMenu />
			<RightAreaScreen
				title="Solicitações de Edição"
				subTitle="Autorize ou rejeite as solicitações feitas!"
				onClickReload={() => getDataRequests()}
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
				) : dataRequests && dataRequests.length > 0 ? (
					<TableRequest
						data={dataRequests}
						onView={handlerModalApprove}
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
			{modalApprove && (
				<ApproveModal
					data={approveData}
					onClose={handleCloseModalApprove}
				/>
			)}
		</div>
	);
}
