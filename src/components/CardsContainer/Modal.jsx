import { useState, useEffect } from "react";
import styles from "./styles.module.css";

const Modal = ({ product, onClose }) => {
	const [activeIndex, setActiveIndex] = useState(0);

	// Cierra con Escape
	useEffect(() => {
		const handleKey = (e) => {
			if (e.key === "Escape") onClose();
		};
		document.addEventListener("keydown", handleKey);
		return () => document.removeEventListener("keydown", handleKey);
	}, [onClose]);

	if (!product) return null;

	const hasMultipleImages = product.images.length > 1;

	return (
		<div
			className={styles.modalBackdrop}
			onClick={onClose}
			role="dialog"
			aria-modal="true"
			aria-label={`Detalle de ${product.name}`}
		>
			<div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
				{/* ── Columna izquierda: imágenes ── */}
				<div className={styles.modalLeft}>
					<img
						key={activeIndex}
						src={product.images[activeIndex]}
						alt={product.name}
						className={styles.modalMainImg}
					/>

					{hasMultipleImages && (
						<div className={styles.modalThumbs}>
							{product.images.map((img, i) => (
								<button
									key={i}
									onClick={() => setActiveIndex(i)}
									className={`${styles.modalThumb} ${
										i === activeIndex ? styles.modalThumbActive : ""
									}`}
									aria-label={`Ver imagen ${i + 1}`}
								>
									<img src={img} alt={`Vista ${i + 1} de ${product.name}`} />
								</button>
							))}
						</div>
					)}
				</div>

				{/* ── Columna derecha: info ── */}
				<div className={styles.modalRight}>
					<button
						className={styles.modalClose}
						onClick={onClose}
						aria-label="Cerrar"
					>
						<svg
							width="12"
							height="12"
							viewBox="0 0 12 12"
							fill="none"
							stroke="currentColor"
							strokeWidth="1.5"
							aria-hidden="true"
						>
							<line x1="1" y1="1" x2="11" y2="11" />
							<line x1="11" y1="1" x2="1" y2="11" />
						</svg>
					</button>

					<p className={styles.modalCategory}>{product.category}</p>
					<h2 className={styles.modalName}>{product.name}</h2>
					<p className={styles.modalDesc}>{product.characteristics}</p>

					<div className={styles.modalDivider} />

					<div className={styles.modalMeta}>
						{product.measures && (
							<div className={styles.modalMetaRow}>
								<span className={styles.modalMetaLabel}>Medidas</span>
								<span className={styles.modalMetaValue}>
									{product.measures}
								</span>
							</div>
						)}
						<div className={styles.modalMetaRow}>
							<span className={styles.modalMetaLabel}>Material</span>
							<span className={styles.modalMetaValue}>100% cuero</span>
						</div>
					</div>

					<p className={styles.modalPrice}>
						$ {product.price.toLocaleString("es-AR")}
					</p>

					<a
						href={`https://wa.me/541150609490?text=Hola! Me interesa la ${product.category} ${product.name} que vi en la web.`}
						target="_blank"
						rel="noopener noreferrer"
						className={styles.modalWppBtn}
						aria-label={`Consultar por WhatsApp sobre ${product.name}`}
					>
						<svg
							width="16"
							height="16"
							viewBox="0 0 24 24"
							fill="currentColor"
							aria-hidden="true"
						>
							<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
							<path d="M11.998 2C6.477 2 2 6.477 2 12c0 1.821.487 3.53 1.338 5.003L2 22l5.114-1.315A9.977 9.977 0 0011.998 22C17.52 22 22 17.523 22 12S17.52 2 11.998 2zm0 18c-1.658 0-3.207-.45-4.54-1.232l-.325-.194-3.035.78.806-2.962-.212-.339A7.956 7.956 0 014 12c0-4.411 3.589-8 7.998-8C16.41 4 20 7.589 20 12s-3.59 8-8.002 8z" />
						</svg>
						Consultar por WhatsApp
					</a>
				</div>
			</div>
		</div>
	);
};

export default Modal;
