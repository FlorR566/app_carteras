import styles from "./styles.module.css";
import Arrow from "./Arrow";
import { useCarousel } from "../../hooks/useCarousel";

const Carousel = ({ bags = [] }) => {
	const {
		index,
		setIndex,
		handlePrev,
		handleNext,
		handlePointerDown,
		handlePointerMove,
		handlePointerUpOrCancel,
	} = useCarousel(bags.length);

	if (!bags || bags.length === 0) {
		return <p>Cargando carteras...</p>;
	}

	return (
		<section
			className={styles.carouselContainer}
			onPointerDown={handlePointerDown}
			onPointerMove={handlePointerMove}
			onPointerUp={handlePointerUpOrCancel}
			onPointerCancel={handlePointerUpOrCancel}
		>
			{/* Flechas */}
			<Arrow left onActivate={handlePrev} />
			<Arrow onActivate={handleNext} />

			{/* Imágenes */}
			<div className={styles.trackWrapper}>
				<div
					className={styles.carouselTrack}
					style={{ transform: `translateX(-${index * 100}%)` }}
				>
					{bags.map((bag) => (
						<img
							key={bag.id}
							src={bag.images[0]}
							alt={bag.name}
							className={styles.carouselImage}
						/>
					))}
				</div>
			</div>

			{/* Dots */}
			<div className={styles.carouselDots}>
				{bags.map((bag, i) => (
					<button
						key={bag.id}
						onPointerDown={(e) => e.stopPropagation()}
						onClick={() => setIndex(i)}
						className={`${styles.carouselDot} ${i === index ? styles.active : ""}`}
						aria-label={`Ir a imagen ${i + 1}`}
						aria-current={i === index ? "true" : undefined}
					/>
				))}
			</div>
		</section>
	);
};

export default Carousel;
