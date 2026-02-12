import styles from "./Hero.module.css";
import useIsMobile from "../useIsMobile";

const Hero = () => {
	const isMobile = useIsMobile();
	const heroImageA =
		"https://res.cloudinary.com/dvcxjks92/image/upload/f_auto,q_auto,c_limit/v1770822244/mochila_marron_ssfuvv.webp";
	const heroImageB =
		"https://res.cloudinary.com/dvcxjks92/image/upload/f_auto,q_auto,c_limit/v1770822244/negro_correas_ffeqot.webp";

	return (
		<section className={styles.hero} id="home">
			{isMobile ? (
				<div className={styles.heroImageContainer}>
					<img src={heroImageA} alt="Cartera" className={styles.heroImageB} />
				</div>
			) : (
				<>
					<div className={styles.heroImageContainer}>
						<img
							src={heroImageA}
							alt="Cartera"
							className={styles.heroImageA}
							fetchPriority="high"
						/>

						<img
							src={heroImageB}
							alt="Cartera"
							className={styles.heroImageB}
							fetchPriority="high"
						/>
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
						<h1 className={styles.title}>Colección Otoño</h1>

						<p className={styles.subtitle}>
							Carteras, mochilas y billeteras hechas con materiales de{" "}
							<b>primera calidad</b> y <b>100% cuero</b>.
							<br />
							Encontrá el diseño que te acompaña todos los días.
						</p>
					</>
				)}

				{/*Buttons */}
				<div className={styles.buttonRow}>
					<a href="#products" className={styles.btnPrimary}>
						Ver productos
					</a>
					<a href="#contact" className={styles.btnSecondary}>
						Contactar
					</a>
				</div>
			</div>
		</section>
	);
};

export default Hero;
