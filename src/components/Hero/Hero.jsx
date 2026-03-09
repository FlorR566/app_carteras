import { useState, useEffect, useCallback } from "react";
import styles from "./styles.module.css";
import useIsMobile from "../../hooks/useIsMobile";
import { HERO_SLIDES, HERO_CONTENT } from "../../constants/hero";

const Hero = () => {
	const isMobile = useIsMobile();
	const content = isMobile ? HERO_CONTENT.mobile : HERO_CONTENT.desktop;
	const [activeIndex, setActiveIndex] = useState(0);
	const [isAnimating, setIsAnimating] = useState(false);

	const goToSlide = useCallback(
		(index) => {
			if (isAnimating || index === activeIndex) return;
			setIsAnimating(true);
			setActiveIndex(index);
			setTimeout(() => setIsAnimating(false), 700);
		},
		[isAnimating, activeIndex],
	);

	const handleNext = useCallback(() => {
		goToSlide((activeIndex + 1) % HERO_SLIDES.length);
	}, [activeIndex, goToSlide]);

	// Auto-avance cada 4s en desktop
	useEffect(() => {
		if (isMobile) return;
		const id = setInterval(handleNext, 4000);
		return () => clearInterval(id);
	}, [handleNext, isMobile]);

	return (
		<section className={styles.hero} id="home">
			{/* ── Desktop: carrusel diagonal ── */}
			{!isMobile && (
				<div className={styles.carouselWrapper}>
					{HERO_SLIDES.map((slide, i) => (
						<div
							key={slide.id}
							className={`${styles.slide} ${i === activeIndex ? styles.slideActive : ""}`}
							aria-hidden={i !== activeIndex}
						>
							<img
								src={slide.image}
								alt={slide.alt}
								className={styles.slideImg}
								fetchPriority={i === 0 ? "high" : "auto"}
							/>
							<div className={styles.slideOverlay} />
						</div>
					))}

					{/* Corte diagonal que separa imagen del contenido */}
					<div className={styles.diagonalCut} />

					{/* Etiqueta del slide activo */}
					<div className={styles.slideLabel}>
						<span>{HERO_SLIDES[activeIndex].label}</span>
					</div>

					{/* Contador 01 / 04 */}
					<div className={styles.slideCounter}>
						<span className={styles.counterCurrent}>
							{String(activeIndex + 1).padStart(2, "0")}
						</span>
						<span className={styles.counterLine} />
						<span className={styles.counterTotal}>
							{String(HERO_SLIDES.length).padStart(2, "0")}
						</span>
					</div>

					{/* Segmentos de progreso */}
					<div className={styles.progressBar}>
						{HERO_SLIDES.map((slide, i) => (
							<button
								key={slide.id}
								className={`${styles.progressSegment} ${i === activeIndex ? styles.progressActive : ""}`}
								onClick={() => goToSlide(i)}
								aria-label={`Ver imagen ${i + 1}: ${slide.label}`}
							/>
						))}
					</div>

					{/* Flecha siguiente */}
					<button
						className={styles.arrowNext}
						onClick={handleNext}
						aria-label="Siguiente imagen"
					>
						<svg width="20" height="20" viewBox="0 0 20 20" fill="none">
							<path
								d="M4 10h12M12 5l5 5-5 5"
								stroke="currentColor"
								strokeWidth="1.6"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
					</button>
				</div>
			)}

			{/* ── Mobile: imagen estática ── */}
			{isMobile && (
				<div className={styles.mobileImageWrapper}>
					<img
						src={HERO_SLIDES[0].image}
						alt={HERO_SLIDES[0].alt}
						className={styles.mobileImg}
						fetchPriority="high"
					/>
					<div className={styles.slideOverlay} />
					<span className={styles.floatingTag}>Nueva colección</span>
				</div>
			)}

			{/* ── Contenido ── */}
			<div className={styles.heroContent}>
				<div className={styles.seasonRow}>
					<span className={styles.seasonLine} />
					<span className={styles.seasonLabel}>Otoño 2026</span>
				</div>
				<h1 className={styles.title}>
					{isMobile ? (
						<>
							Artesanía
							<br />
							en cada
							<br />
							<em>detalle.</em>
						</>
					) : (
						<>
							El cuero
							<br />
							que te <em>define.</em>
						</>
					)}
				</h1>
				<p className={styles.subtitle}>
					{isMobile ? (
						content.subtitle
					) : (
						<>
							Carteras, mochilas y billeteras hechas con materiales de{" "}
							<b>primera calidad</b> y <b>100% cuero</b>.<br />
							Encontrá el diseño que te acompaña todos los días.
						</>
					)}
				</p>
				<div className={styles.buttonRow}>
					<a href="#products" className={styles.btnPrimary}>
						Ver productos
					</a>
					<a href="#contact" className={styles.btnSecondary}>
						Contactar
						<svg
							width="14"
							height="14"
							viewBox="0 0 14 14"
							fill="none"
							aria-hidden="true"
						>
							<path
								d="M2 7h10M8 3l4 4-4 4"
								stroke="currentColor"
								strokeWidth="1.5"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
					</a>
				</div>

				{/* Stats */}
				{!isMobile && (
					<div className={styles.statsRow}>
						<div className={styles.stat}>
							<span className={styles.statValue}>100%</span>
							<span className={styles.statLabel}>Cuero</span>
						</div>
						<div className={styles.statDivider} />
						<div className={styles.stat}>
							<span className={styles.statValue}>+30</span>
							<span className={styles.statLabel}>Diseños únicos</span>
						</div>
						<div className={styles.statDivider} />
						<div className={styles.stat}>
							<span className={styles.statValue}>10+</span>
							<span className={styles.statLabel}>Años de oficio</span>
						</div>
					</div>
				)}
			</div>
		</section>
	);
};

export default Hero;
