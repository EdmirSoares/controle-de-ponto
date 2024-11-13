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

export default function Solicitacoes() {
	const {
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
				<TableRequest
					data={dataRequests}
					onView={handlerModalApprove}
				/>
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
