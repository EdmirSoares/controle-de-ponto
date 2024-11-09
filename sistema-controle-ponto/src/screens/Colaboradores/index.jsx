import "./styles.css";
import SideMenu from "../../components/SideMenu";
import RightAreaScreen from "../../components/RightAreaScreen";
import TableEmployees from "../../components/TableEmployees";
import useApp from "./useApp";
import RegisterEmployeeModal from "../../components/RegisterEmployeeModal";
import { useEffect } from "react";
import GenericConfirmModal from "../../components/GenericConfirmModal";

export default function Colaboradores() {
	const {
		loading,
		dataEmployees,
		dataRegisterEmployee,
		modalRegisterEmployee,
		modalDeleteEmployee,
		getDataEmployees,
		handleOpenRegisterEmployee,
		handleCloseRegisterEmployee,
		handleOpenDeleteEmployee,
		handleCloseDeleteEmployee,
		handleDeleteEmployee,
	} = useApp();

	return (
		<div className="container">
			<SideMenu />
			<RightAreaScreen
				title="Gerenciar Colaboradores"
				subTitle="Atualize as informações dos colaboradores em um só lugar"
				positiveButtonLabel={"Cadastrar"}
				onClickPositiveButton={handleOpenRegisterEmployee}
				onClickReload={getDataEmployees}
			>
				{loading ? (
					<p>Carregando...</p>
				) : (
					<TableEmployees
						data={dataEmployees}
						onEdit={(item) => handleOpenRegisterEmployee(item)}
						onActive={(item) => console.log("Ativar", item)}
						onInactive={(item) => console.log("Inativar", item)}
						onDelete={(item) => handleOpenDeleteEmployee(item)}
					/>
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
		</div>
	);
}
