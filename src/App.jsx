import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Carousel from "./components/Carousel";
import CardsContainer from "./components/CardsContainer";
import Footer from "./components/Footer";

import imagesMobile from "./imagesMobile.js";
import images from "./images.js";

function App() {
	return (
		<>
			<Navbar />
			<Hero />
			<main className="mainContent">
				<Carousel imagesMobile={imagesMobile} />
				<CardsContainer images={images} />
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
