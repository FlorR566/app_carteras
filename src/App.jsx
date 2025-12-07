import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
	return (
		<>
			<Navbar />
			<main>
				<div className="aviso">
					<h1>Página en desarrollo</h1>
					<h3> 1º etapa: mobile</h3>
					<h3> 2º etapa: desktop</h3>
				</div>
			</main>
			<Footer />
		</>
	);
}

export default App;
