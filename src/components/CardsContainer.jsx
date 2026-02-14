import { useState } from "react";
import styles from "../components/CardsContainer.module.css";
import useIsMobile from "../useIsMobile";
import useLockBodyScroll from "../useLockBodyScroll";

const Card = ({ bags, category }) => {
	const isMobile = useIsMobile();
	const [selectedProduct, setSelectedProduct] = useState(null);

	useLockBodyScroll(!!selectedProduct);

	return (
		<>
			<div className={styles.cardsContainer}>
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
						{selectedProduct.images.map((img) => (
							<img src={img} />
						))}
						<h2>{selectedProduct.name}</h2>
						<h3>Precio: $ {selectedProduct.price}</h3>
						<p>{selectedProduct.characteristics}</p>
						<h4 className={styles.measures}>{selectedProduct.measures}</h4>
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
