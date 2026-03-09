import styles from "./styles.module.css";
import useIsMobile from "../../hooks/useIsMobile";
import { HERO_IMAGES, HERO_CONTENT } from "../../constants/hero";

const Hero = () => {
	const isMobile = useIsMobile();
	const content = isMobile ? HERO_CONTENT.mobile : HERO_CONTENT.desktop;

	return (
		<section className={styles.hero} id="home">
			<div className={styles.heroImageContainer}>
				{!isMobile && (
					<img
						src={HERO_IMAGES.secondary}
						alt="Mochila de cuero marrón"
						className={styles.heroImageB}
						fetchPriority="high"
					/>
				)}
			</div>

			<img
				src={HERO_IMAGES.main}
				alt="Cartera de cuero negra con correas doradas"
				className={styles.heroImageA}
				fetchPriority="high"
			/>

			<div className={styles.heroContent}>
				<h1 className={styles.title}>{content.title}</h1>

				{isMobile ? ( // Mobile
					<p className={styles.subtitle}>{content.subtitle}</p>
				) : (
					// Desktop
					<p className={styles.subtitle}>
						Carteras, mochilas y billeteras hechas con materiales de{" "}
						<b>primera calidad</b> y <b>100% cuero</b>.<br />
						Encontrá el diseño que te acompaña todos los días.
					</p>
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
