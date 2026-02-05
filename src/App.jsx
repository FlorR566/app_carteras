import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Carousel from "./components/Carousel";
import CardsContainer from "./components/CardsContainer";
import Footer from "./components/Footer";

import bagService from "./services/bags.js";

function App() {
	const [bags, setBags] = useState([]);

	useEffect(() => {
		// Se ejecuta apenas montamos el componente
		bagService
			.getAll()
			.then((initialBags) => {
				console.log("Datos recibidos del servidor", initialBags);
				setBags(initialBags); // Carteras de la DB se guardan en el estado
			})
			.catch((error) => {
				console.log("Error al buscar carteras: ", error);
			});
	}, []);

	return (
		<>
			<Navbar />
			<Hero />
			<main className="mainContent">
				<Carousel bags={bags} />
				<CardsContainer bags={bags} />
				{/* Aviso de página en progreso */}
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
