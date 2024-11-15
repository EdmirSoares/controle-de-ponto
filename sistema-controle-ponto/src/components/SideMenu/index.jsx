import './styles.css';
import { useContext } from 'react';
import { AuthContext } from '../../context/auth';
import { LogOut } from 'react-feather';
import useApp from './useApp';
import User_b from '../../assets/images/User_b.png';

export default function SideMenu() {
	const { handleNavigation, signOut, infoUser } = useApp();
	const { isAdmin } = useContext(AuthContext);
	return (
		<div className="containerSideMenu">
			<div className="headerContainer">
				<img className="imageContainer" src={User_b} />
				<div className="infoContainer">
					<h1>{infoUser?.nmFuncionario}</h1>
					<p>{infoUser?.dsEmail}</p>
				</div>
			</div>
			<div className="navigationContainer">
				<div
					className="menuItem"
					onClick={() => handleNavigation('/home')}
				>
					<p className="textNavigation" data-screen="/home">
						News
					</p>
				</div>
				<div
					className="menuItem"
					onClick={() => handleNavigation('/registros')}
				>
					<p className="textNavigation" data-screen="/registros">
						Registros
					</p>
				</div>
				<div
					className="menuItem"
					onClick={() => handleNavigation('/solicitacoes')}
				>
					<p className="textNavigation" data-screen="/solicitacoes">
						Solicitações
					</p>
				</div>
				{isAdmin && (
					<div
						className="menuItem"
						onClick={() => handleNavigation('/colaboradores')}
					>
						<p
							className="textNavigation"
							data-screen="/colaboradores"
						>
							Colaboradores
						</p>
					</div>
				)}
			</div>
			<div className="footerContainer">
				<p className="textNavigation" onClick={signOut}>
					Sair
				</p>
				<LogOut onClick={signOut} style={{ cursor: 'pointer' }} />
			</div>
		</div>
	);
}
