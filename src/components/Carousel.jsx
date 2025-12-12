import { useState, useRef } from "react";
import styles from "./Carousel.module.css";

function Arrow({ left, onActivate }) {
	const stopAndActivate = (e) => {
		e.stopPropagation();
	};

	const handlePointerUp = (e) => {
		e.stopPropagation();

		onActivate();
	};

	return (
		<svg
			onPointerDown={stopAndActivate}
			onPointerUp={handlePointerUp}
			className={`${styles.arrow} ${
				left ? styles.arrowLeft : styles.arrowRight
			}`}
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			role="button"
			tabIndex={0}
			aria-label={left ? "Anterior" : "Siguiente"}
		>
			{left ? (
				<path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
			) : (
				<path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
			)}
		</svg>
	);
}

const Carousel = ({ imagesMobile }) => {
	const [index, setIndex] = useState(0);

	const blockSwipe = useRef(false);

	const startX = useRef(0);
	const currentX = useRef(0);
	const threshold = 50;

	const next = () =>
		setIndex((i) => (i === imagesMobile.length - 1 ? 0 : i + 1));
	const prev = () =>
		setIndex((i) => (i === 0 ? imagesMobile.length - 1 : i - 1));

	const handlePrev = () => {
		blockSwipe.current = true;
		prev();
	};

	const handleNext = () => {
		blockSwipe.current = true;
		next();
	};

	const handlePointerDown = (e) => {
		if (blockSwipe.current) return;

		try {
			e.currentTarget.setPointerCapture(e.pointerId);
			// eslint-disable-next-line no-unused-vars
		} catch (err) {
			/* empty */
		}
		startX.current = e.clientX;
		currentX.current = e.clientX;
	};

	const handlePointerMove = (e) => {
		if (blockSwipe.current) return;

		if (!startX.current && startX.current !== 0) return;
		currentX.current = e.clientX;
	};

	const handlePointerUpOrCancel = (e) => {
		if (blockSwipe.current) {
			blockSwipe.current = false;
			startX.current = 0;
			currentX.current = 0;
			try {
				e.currentTarget.releasePointerCapture(e.pointerId);
			} catch {
				/* empty */
			}
			return;
		}

		const diff = currentX.current - startX.current;

		if (diff > threshold) prev();
		else if (diff < -threshold) next();

		startX.current = 0;
		currentX.current = 0;
		try {
			e.currentTarget.releasePointerCapture(e.pointerId);
		} catch {
			/* empty */
		}
	};

	return (
		<section
			id="productos"
			className={styles.carouselContainer}
			onPointerDown={handlePointerDown}
			onPointerMove={handlePointerMove}
			onPointerUp={handlePointerUpOrCancel}
			onPointerCancel={handlePointerUpOrCancel}
			onPointerLeave={handlePointerUpOrCancel}
		>
			<Arrow left onActivate={handlePrev} />
			<Arrow onActivate={handleNext} />

			<div className={styles.trackWrapper}>
				<div
					className={styles.carouselTrack}
					style={{ transform: `translateX(-${index * 100}%)` }}
				>
					{imagesMobile.map((src, i) => (
						<img key={i} src={src} alt="" className={styles.carouselImage} />
					))}
				</div>
			</div>

			<div className={styles.carouselDots}>
				{imagesMobile.map((_, i) => (
					<div
						key={i}
						className={`${styles.carouselDot} ${
							i === index ? styles.active : ""
						}`}
					/>
				))}
			</div>
		</section>
	);
};

export default Carousel;
