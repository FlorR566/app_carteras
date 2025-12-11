import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Carousel from "./components/Carousel";

import img1 from "./assets/banner_photo.jpg";
import img2 from "./assets/bolso_cuero.png";
import img3 from "./assets/carteras_cuadrado.png";
import img4 from "./assets/bolso_negro.png";
import img5 from "./assets/carteras_vertical.png";

const imagesMobile = [img1, img2, img3, img4, img5];

function App() {
	return (
		<>
			<div id="home">
				<Navbar />
			</div>

			<main className="mainContent">
				<Carousel imagesMobile={imagesMobile} />
				<div className="aviso">
					<h1>Página en desarrollo</h1>
					<h3> 1º etapa: mobile</h3>
					<h3> 2º etapa: desktop</h3>
				</div>
			</main>
			<div id="contacto">
				<Footer />
			</div>
		</>
	);
}

export default App;
