import './styles.css';
import useApp from './useApp';
import coverLogin from '../../assets/images/coverLogin.jpg';
import topBanner from '../../assets/images/topBanner.jpg';

export default function Login() {
	const { dataLogin, handleInputChange, handlerLogin } = useApp();

	return (
		<div className="containerLogin">
			<div className="leftContainer">
				<div className="headerContainer">
					<h1>Olá!</h1>
					<div className="subTitleTextContainer">
						<h1 className="rightText">
							Transformando cada segundo em eficiência.
						</h1>
						<p>Porque tempo é o seu maior recurso!</p>
					</div>
				</div>
				<div className="inputContainer">
					<div className="inputContent">
						<label className="labelInput">Nome</label>
						<input
							type="text"
							name="nmFuncionario"
							placeholder="Nome"
							value={dataLogin.nmFuncionario}
							onChange={e => handleInputChange(e)}
						/>
					</div>

					<div className="inputContent">
						<label className="labelInput">Email</label>
						<input
							type="text"
							name="dsEmail"
							placeholder="Email"
							value={dataLogin.dsEmail}
							onChange={e => handleInputChange(e)}
						/>
					</div>

					<button onClick={() => handlerLogin()}>Login</button>
				</div>
			</div>
			<div className="rightContainer">
				<div
					style={{
						position: 'relative',
						width: '100%',
						height: '100%',
						backgroundImage: `url(${coverLogin})`,
						backgroundSize: 'cover',
						backgroundPosition: 'center',
						borderRadius: '20px',
					}}
				></div>
			</div>
		</div>
	);
}
