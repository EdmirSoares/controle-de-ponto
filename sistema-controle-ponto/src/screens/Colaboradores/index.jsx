import "./styles.css";
import SideMenu from "../../components/SideMenu";
import RightAreaScreen from "../../components/RightAreaScreen";
import TableEmployees from "../../components/TableEmployees";
import useApp from "./useApp";
import RegisterEmployeeModal from "../../components/RegisterEmployeeModal";

export default function Colaboradores() {
	const {
		loading,
		dataEmployees,
		modalRegisterEmployee,
		getDataEmployees,
		handleOpenRegisterEmployee,
		handleCloseRegisterEmployee,
	} = useApp();

	return (
		<div className="container">
			<SideMenu />
			<RightAreaScreen
				title="Gerenciar Colaboradores"
				subTitle="Atualize as informações dos colaboradores em um só lugar"
				positiveButtonLabel={"Cadastrar"}
				onClickPositiveButton={handleOpenRegisterEmployee}
				onClickReload={() => getDataEmployees()}
			>
				{loading ? (
					<p>Carregando...</p>
				) : (
					<TableEmployees
						data={dataEmployees}
						onView={() => console.log("menu")}
					/>
				)}
			</RightAreaScreen>
			{modalRegisterEmployee && (
				<RegisterEmployeeModal onClose={handleCloseRegisterEmployee} />
			)}
		</div>
	);
}
