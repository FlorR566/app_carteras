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
					<img src={heroImgB} alt="Cartera" className={styles.heroImageB} />
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
				{isMobile ? ( // Mobile
					<>
						<h1 className={styles.title}>
							Artesanía en cada <br />
							detalle
						</h1>
						<p className={styles.subtitle}>
							Encontrá el diseño que te acompaña
						</p>
					</>
				) : (
					//Desktop
					<>
						<h1 className={styles.title}>
							Colección Otoño
							<br />
							🍂🍁
						</h1>

						<p className={styles.subtitle}>
							Carteras, mochilas, billeteras y cintos hechos con dedicación,
							estilo y materiales de primera calidad,{" "}
							<strong>100% cuero</strong>.
							<br />
							Encontrá el diseño que te acompaña todos los días.
							<br />
							También hacemos guardapolvos docentes personalizables.
						</p>
					</>
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
