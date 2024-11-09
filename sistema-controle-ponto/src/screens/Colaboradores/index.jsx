import "./styles.css";
import SideMenu from "../../components/SideMenu";
import RightAreaScreen from "../../components/RightAreaScreen";
import TableEmployees from "../../components/TableEmployees";
import useApp from "./useApp";
import RegisterEmployeeModal from "../../components/RegisterEmployeeModal";
import { useEffect } from "react";

export default function Colaboradores() {
	const {
		loading,
		dataEmployees,
		modalRegisterEmployee,
		getDataEmployees,
		handleOpenRegisterEmployee,
		handleCloseRegisterEmployee,
	} = useApp();

	useEffect(() => {
		console.log(dataEmployees);
	}, [dataEmployees]);

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
						onEdit={(item) => console.log("Editar", item)}
						onActive={(item) => console.log("Ativar", item)}
						onInactive={(item) => console.log("Inativar", item)}
						onDelete={(item) => console.log("Deletar", item)}
					/>
				)}
			</RightAreaScreen>
			{modalRegisterEmployee && (
				<RegisterEmployeeModal onClose={handleCloseRegisterEmployee} />
			)}
		</div>
	);
}
