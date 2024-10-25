import "./styles.css";
import useApp from "./useApp";

export default function Login() {
	const { capturedDataLogin, handleInputChange, handlerLogin } = useApp();

	return (
		<div className="containerLogin">
			<div className="leftContainer">
				<div className="headerContainer">
					<h1>Olá!</h1>
					<div className="subTitleTextContainer">
						<p>
							Faça login para registrar seu ponto ou acompanhar
							suas solicitações
						</p>
					</div>
				</div>
				<div className="inputContainer">
					<div className="inputContent">
						<label className="labelnput">Nome</label>
						<input
							type="text"
							name="name"
							placeholder="Nome"
							value={capturedDataLogin.password}
							onChange={(e) => handleInputChange(e)}
						/>
					</div>

					<div className="inputContent">
						<label className="labelnput">Email</label>
						<input
							type="text"
							name="email"
							placeholder="Email"
							value={capturedDataLogin.email}
							onChange={(e) => handleInputChange(e)}
						/>
					</div>

					<div className="forgotPassword">
						<a href="#">Esqueceu seu acesso?</a>
					</div>
					<button onClick={() => handlerLogin()}>Entrar</button>
				</div>
			</div>
			<div className="rightContainer"></div>
		</div>
	);
}
