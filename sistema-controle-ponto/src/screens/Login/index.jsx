import "./styles.css";

export default function Login() {
	return (
		<div className="containerLogin">
			<div className="leftContainer">
				<div className="headerContainer">
					<h1>Olá!</h1>
					<div className="subTitleText">
						<p>
							Faça login para registrar seu ponto ou acompanhar
							suas solicitações
						</p>
					</div>
				</div>
				<div className="inputContainer">
					<input
						className="inputLogin"
						type="text"
						placeholder="Email"
					/>
					<input type="password" placeholder="Password" />
					<button>Login</button>
				</div>
			</div>
			<div className="rightContainer"></div>
		</div>
	);
}
