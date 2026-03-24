import { useState } from "react";
import styles from "./styles.module.css";
import Card from "./Card";
import Modal from "./Modal";
import useLockBodyScroll from "../../hooks/useLockBodyScroll";

const CategorySection = ({ title, bags, category, onSelect }) => {
	const filtered = bags.filter((item) => item.category === category);
	if (filtered.length === 0) return null;

	return (
		<>
			<h2 className={styles.categoryTitle}>{title}</h2>
			<div className={styles.cardsContainer}>
				{filtered.map((item) => (
					<Card key={item.id} item={item} onSelect={onSelect} />
				))}
			</div>
		</>
	);
};

const CardsContainer = ({ bags }) => {
	const [selectedProduct, setSelectedProduct] = useState(null);

	useLockBodyScroll(!!selectedProduct);

	return (
		<section id="products" className={styles.products}>
			<CategorySection
				title="Carteras"
				bags={bags}
				category="cartera"
				onSelect={setSelectedProduct}
			/>
			<CategorySection
				title="Mochilas"
				bags={bags}
				category="mochila"
				onSelect={setSelectedProduct}
			/>

			<Modal
				key={selectedProduct?.id}
				product={selectedProduct}
				onClose={() => setSelectedProduct(null)}
			/>
		</section>
	);
};

export default CardsContainer;
