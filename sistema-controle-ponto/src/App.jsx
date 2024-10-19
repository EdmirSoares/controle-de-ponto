import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { AuthProvider } from "./context/auth";
import { Toaster } from "sonner";
import RoutesApp from "./routes";

function App() {
	return (
		<BrowserRouter>
			<AuthProvider>
				<RoutesApp />
				<Toaster
					className="custom-toaster"
					position="top-right"
					duration={5000}
					closeButton
					toastOptions={{
						style: {
							marginTop: "46px",
							fontFamily: "Nunito",
						},
					}}
				/>
			</AuthProvider>
		</BrowserRouter>
	);
}

export default App;
