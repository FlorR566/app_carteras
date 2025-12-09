import { useState } from "react";
import styles from "./Carousel.module.css";

const Carousel = ({ images }) => {
	const [currentIndex, setCurrentIndex] = useState(0);

	const next = () => {
		setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
	};

	const prev = () => {
		setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
	};

	return (
		<div className={styles.carousel}>
			<button onClick={prev} className={styles.btn}>
				◀
			</button>

			<img src={images[currentIndex]} alt="carousel" className={styles.image} />

			<button onClick={next} className={styles.btn}>
				▶
			</button>
		</div>
	);
};

export default Carousel;
