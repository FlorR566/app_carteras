import { useState } from "react";
import styles from "../components/CardsContainer.module.css";
import useIsMobile from "../useIsMobile";
import useLockBodyScroll from "../useLockBodyScroll";
import socialIcons from "../icons";

const Card = ({ bags, category }) => {
	const isMobile = useIsMobile();
	const [selectedProduct, setSelectedProduct] = useState(null);

	useLockBodyScroll(!!selectedProduct);

	return (
		<>
			<div id="products" className={styles.cardsContainer}>
				{bags.map((item) =>
					category === item.category ? (
						<div className={styles.card} key={item.id}>
							<img
								onClick={() => setSelectedProduct(item)}
								src={item.images[0]}
								alt={item.name}
							/>

							<h3>{item.name}</h3>
							<p>$ {item.price}</p>

							{isMobile ? (
								<button
									className={styles.cardButton}
									onClick={() => setSelectedProduct(item)}
								>
									COMPRAR
								</button>
							) : (
								<button
									className={styles.cardButton}
									onClick={() => setSelectedProduct(item)}
								>
									VER PRODUCTO
								</button>
							)}
						</div>
					) : (
						" "
					),
				)}
			</div>

			{selectedProduct && (
				<div className={styles.modal} onClick={() => setSelectedProduct(null)}>
					<div
						className={styles.modalContent}
						onClick={(e) => e.stopPropagation()}
					>
						<span
							className={styles.closeButton}
							onClick={() => setSelectedProduct(null)}
						>
							&times;
						</span>

						<div className={styles.imgContainer}>
							{selectedProduct.images.map((img) => (
								<img src={img} />
							))}
						</div>
						<h2>{selectedProduct.name}</h2>

						<div className={styles.characteristics}>
							<p>{selectedProduct.characteristics}</p>
						</div>

						<div className={styles.modalPriceMeasure}>
							<p>Precio: $ {selectedProduct.price}</p>
							<p className={styles.measures}>{selectedProduct.measures}</p>
						</div>

						<div className={styles.modalPurchase}>
							<p>Para comprar: </p>
							<a
								href="https://wa.me/541150609490"
								target="_blank"
								rel="noopener noreferrer"
								className={styles.cardButton}
							>
								CONSULTAR POR WHATSAPP
							</a>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

const CardsContainer = ({ bags }) => {
	return (
		<>
			<section id="products" className={styles.products}>
				<h2>Carteras</h2>
				<Card bags={bags} category="cartera" />

				<h2>Mochilas</h2>
				<Card bags={bags} category="mochila" />
			</section>
		</>
	);
};

export default CardsContainer;
