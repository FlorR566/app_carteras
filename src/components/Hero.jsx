import styles from "./Hero.module.css";
import heroImgA from "../assets/negro-correas.png";
import heroImgB from "../assets/mochila-marron.png";

const Hero = () => {
	return (
		<section className={styles.hero} id="home">
			<div className={styles.heroContent}>
				<h1 className={styles.title}>
					Merry Christmas 🎄
					<br />
					Jo Jo Jo!! 🎅🏼
				</h1>

				<p className={styles.subtitle}>
					Carteras, mochilas y billeteras hechas con dedicación, estilo y
					materiales de primera calidad.
					<br />
					Encontrá el diseño que te acompaña todos los días.
					<br />
					También hacemos guardapolvos docentes personalizables.
				</p>

				<div className={styles.ctaRow}>
					<a href="#productos" className={styles.ctaPrimary}>
						Ver productos
					</a>
					<a href="#contacto" className={styles.ctaSecondary}>
						Contactar
					</a>
				</div>
			</div>

			<div className={styles.heroImageContainer}>
				<img src={heroImgB} alt="Cartera" className={styles.heroImage} />
			</div>

			<div className={styles.heroImageContainer}>
				<img src={heroImgA} alt="Cartera" className={styles.heroImage} />
			</div>
		</section>
	);
};

export default Hero;
