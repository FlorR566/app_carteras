import { useState, useEffect, lazy, Suspense } from "react";
import bagService from "./services/bags.js";
import Navbar from "./components/Navbar/Navbar.jsx";
import Hero from "./components/Hero/Hero.jsx";
import Carousel from "./components/Carousel/Carousel.jsx";
import CardsContainer from "./components/CardsContainer/CardsContainer.jsx";
import "./styles.css";

// No se ven en el primer render — se cargan después
const AboutUs = lazy(() => import("./components/AboutUs/AboutUs.jsx"));
const Footer = lazy(() => import("./components/Footer/Footer.jsx"));

function App() {
	const [bags, setBags] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		// Se ejecuta apenas montamos el componente
		bagService
			.getAll()
			.then((initialBags) => setBags(initialBags))
			.catch(() =>
				setError("No pudimos cargar los productos. Intentá de nuevo."),
			)
			.finally(() => setIsLoading(false));
	}, []);

	return (
		<>
			<Navbar />
			<Hero />
			<main className="mainContent">
				{isLoading && <p className="loadingText">Cargando productos...</p>}
				{error && (
					<p className="errorText" role="alert">
						{error}
					</p>
				)}
				{!isLoading && !error && (
					<>
						<Carousel bags={bags} />
						<CardsContainer bags={bags} />
					</>
				)}
			</main>

			<Suspense fallback={null}>
				<AboutUs />

				{/* Aviso de página en progreso */}
				<aside className="aviso" role="note">
					<p>Página en desarrollo 🚧</p>
				</aside>

				<Footer />
			</Suspense>
		</>
	);
}

export default App;
