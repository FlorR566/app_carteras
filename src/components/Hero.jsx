import styles from "./Hero.module.css";
import heroImgA from "../assets/negro_correas.png";
import heroImgB from "../assets/mochila_marron.png";
import useIsMobile from "../useIsMobile";

const Hero = () => {
	const isMobile = useIsMobile();

	return (
		<section className={styles.hero} id="home">
			{isMobile ? (
				<div className={styles.heroImageContainer}>
					<img src={heroImgA} alt="Cartera" className={styles.heroImageA} />
				</div>
			) : (
				<>
					<div className={styles.heroImageContainer}>
						<img src={heroImgA} alt="Cartera" className={styles.heroImageA} />

						<img src={heroImgB} alt="Cartera" className={styles.heroImageB} />
					</div>
				</>
			)}

			<div className={styles.heroContent}>
				<h1 className={styles.title}>
					Merry Christmas 🎄
					<br />
					Jo Jo Jo!! 🎅🏼
				</h1>

				{isMobile ? ( // Mobile
					<p className={styles.subtitle}>
						Carteras, mochilas y billeteras hechas con estilo y materiales de
						primera calidad.
						<br />
						Encontrá el diseño que te acompaña todos los días.{" "}
					</p>
				) : (
					//Desktop
					<p className={styles.subtitle}>
						Carteras, mochilas y billeteras hechas con dedicación, estilo y
						materiales de primera calidad.
						<br />
						Encontrá el diseño que te acompaña todos los días.
						<br />
						También hacemos guardapolvos docentes personalizables.
					</p>
				)}

				{/*Buttons */}
				<div className={styles.buttonRow}>
					<a href="#productos" className={styles.btnPrimary}>
						Ver productos
					</a>
					<a href="#contacto" className={styles.btnSecondary}>
						Contactar
					</a>
				</div>
			</div>
		</section>
	);
};

export default Hero;
