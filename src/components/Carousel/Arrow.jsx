import styles from "./styles.module.css";

const Arrow = ({ left, onActivate }) => {
	const stopAndActivate = (e) => {
		e.stopPropagation();
	};

	const handlePointerUp = (e) => {
		e.stopPropagation();

		onActivate();
	};

	return (
		<button
			onPointerDown={stopAndActivate}
			onPointerUp={handlePointerUp}
			onKeyDown={(e) => {
				if (e.key === "Enter" || e.key === " ") onActivate();
			}}
			className={`${styles.arrow} ${left ? styles.arrowLeft : styles.arrowRight}`}
			aria-label={left ? "Anterior" : "Siguiente"}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="1 -0.5 24 24"
				aria-hidden="true"
			>
				{left ? (
					<path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
				) : (
					<path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
				)}
			</svg>
		</button>
	);
};

export default Arrow;
