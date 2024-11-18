import './styles.css';
import SideMenu from '../../components/SideMenu';
import RightAreaScreen from '../../components/RightAreaScreen';
import topBanner from '../../assets/images/topBanner.jpg';
import newsUmBanner from '../../assets/images/newsUmBanner.jpg';
import newsDoisBanner from '../../assets/images/newsDoisBanner.jpg';
import newsTresBanner from '../../assets/images/newsTresBanner.jpg';

export default function Home() {
	return (
		<div className="container">
			<SideMenu />
			<RightAreaScreen
				title="News"
				subTitle="Fique por dentro do que está acontecendo!"
			>
				<div
					style={{
						width: '100%',
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						justifyContent: 'center',
						gap: 24,
					}}
				>
					<div
						style={{
							width: '100%',
						}}
					>
						<div
							style={{
								position: 'relative',
								width: '100%',
								height: '236px',
								backgroundImage: `url(${topBanner})`,
								backgroundSize: 'cover',
								backgroundPosition: 'center',
								borderRadius: '20px',
							}}
						>
							<div
								style={{
									position: 'absolute',
									top: '50%',
									left: '40%',
									transform: 'translate(-50%, -50%)',
									color: 'white',
									textAlign: 'left',
									padding: '10px',
									borderRadius: '10px',
								}}
							>
								<p
									style={{
										color: 'white',
										fontSize: 24,
										fontFamily: 'Nunito',
										fontWeight: '800',
										wordWrap: 'break-word',
									}}
								>
									Precisando de uma pausa?
								</p>
								<p
									style={{
										color: 'white',
										fontSize: 24,
										fontFamily: 'Nunito',
										fontWeight: '400',
										wordWrap: 'break-word',
									}}
								>
									Verifique seus dias de folga e programe seu
									descanso merecido!
								</p>
							</div>
						</div>
					</div>
					<div
						style={{
							width: '100%',
							display: 'flex',
							flexDirection: 'row',
							gap: '18px',
							justifyContent: 'space-between',
						}}
					>
						<div
							style={{
								height: 'auto',
								width: '100%',
								padding: 12,
								background: 'white',
								boxShadow:
									'0px 14px 42px rgba(8.24, 15.25, 52.06, 0.06)',
								borderRadius: 20,
								flexDirection: 'column',
								justifyContent: 'flex-start',
								alignItems: 'flex-start',
								gap: 10,
								display: 'inline-flex',
							}}
						>
							<img
								style={{
									resizeMode: 'cover',
									width: '100%',
									borderRadius: 12,
								}}
								src={newsUmBanner}
							/>
							<div
								style={{
									height: 15,
									padding: '8px 12px',
									background: 'rgba(112.20, 45, 255, 0.20)',
									borderRadius: 4,
									justifyContent: 'center',
									alignItems: 'center',
									display: 'inline-flex',
								}}
							>
								<p
									style={{
										color: '#702DFF',
										fontSize: 8,
										fontFamily: 'Nunito',
										fontWeight: '800',
										textTransform: 'uppercase',
										wordWrap: 'break-word',
									}}
								>
									Novidades
								</p>
							</div>
							<div
								style={{
									width: '100%',
									display: 'flex',
									flexDirection: 'column',
									gap: '4px',
								}}
							>
								<span
									style={{
										fontFamily: 'Nunito',
										fontSize: '14px',
										fontWeight: 800,
									}}
								>
									Conferência anual!
									<br />
								</span>
								<span
									style={{
										fontFamily: 'Nunito',
										fontSize: '14px',
										fontWeight: 600,
									}}
								>
									Prepare-se para nossa próxima
								</span>
							</div>
						</div>
						<div
							style={{
								height: '100%',
								width: '100%',
								padding: 12,
								background: 'white',
								boxShadow:
									'0px 14px 42px rgba(8.24, 15.25, 52.06, 0.06)',
								borderRadius: 20,
								flexDirection: 'column',
								justifyContent: 'flex-start',
								alignItems: 'flex-start',
								gap: 10,
								display: 'inline-flex',
							}}
						>
							<img
								style={{
									resizeMode: 'cover',
									width: '100%',
									borderRadius: 12,
								}}
								src={newsDoisBanner}
							/>
							<div
								style={{
									height: 15,
									padding: '8px 12px',
									background: 'rgba(1, 96, 164, 0.2)',
									borderRadius: 4,
									justifyContent: 'center',
									alignItems: 'center',
									display: 'inline-flex',
								}}
							>
								<p
									style={{
										color: 'rgb(1, 96, 164)',
										fontSize: 8,
										fontFamily: 'Nunito',
										fontWeight: '800',
										textTransform: 'uppercase',
										wordWrap: 'break-word',
									}}
								>
									Equipe
								</p>
							</div>
							<div
								style={{
									width: '100%',
									display: 'flex',
									flexDirection: 'column',
									gap: '4px',
								}}
							>
								<span
									style={{
										fontFamily: 'Nunito',
										fontSize: '14px',
										fontWeight: 800,
									}}
								>
									Reconhecimento e Premiações!
									<br />
								</span>
								<span
									style={{
										fontFamily: 'Nunito',
										fontSize: '14px',
										fontWeight: 600,
									}}
								>
									Inspire-se com as histórias de sucesso.
								</span>
							</div>
						</div>
						<div
							style={{
								height: 'auto',
								width: '100%',
								padding: 12,
								background: 'white',
								boxShadow:
									'0px 14px 42px rgba(8.24, 15.25, 52.06, 0.06)',
								borderRadius: 20,
								flexDirection: 'column',
								justifyContent: 'flex-start',
								alignItems: 'flex-start',
								gap: 10,
								display: 'inline-flex',
							}}
						>
							<img
								style={{
									resizeMode: 'cover',
									width: '100%',
									borderRadius: 12,
								}}
								src={newsTresBanner}
							/>
							<div
								style={{
									height: 15,
									padding: '8px 12px',
									background: 'rgba(102, 141, 11, 0.2)',
									borderRadius: 4,
									justifyContent: 'center',
									alignItems: 'center',
									display: 'inline-flex',
								}}
							>
								<p
									style={{
										color: '#578A06',
										fontSize: 8,
										fontFamily: 'Nunito',
										fontWeight: '800',
										textTransform: 'uppercase',
										wordWrap: 'break-word',
									}}
								>
									Empresa
								</p>
							</div>
							<div
								style={{
									width: '100%',
									display: 'flex',
									flexDirection: 'column',
									gap: '4px',
								}}
							>
								<span
									style={{
										fontFamily: 'Nunito',
										fontSize: '14px',
										fontWeight: 800,
									}}
								>
									Novos Projetos no Horizonte!
									<br />
								</span>
								<span
									style={{
										fontFamily: 'Nunito',
										fontSize: '14px',
										fontWeight: 600,
									}}
								>
									Iniciativas transformam nossa empresa.
								</span>
							</div>
						</div>
					</div>
				</div>
			</RightAreaScreen>
		</div>
	);
}
