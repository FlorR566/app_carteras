import styles from "../components/CardsContainer.module.css";

const Card = ({ bags, category }) => {
	return (
		<div className={styles.cardsContainer}>
			{bags.map((item) =>
				category === item.category ? (
					<div className={styles.card} key={item.id}>
						<img src={item.images[0]} alt={item.name} />

						<h3>{item.name}</h3>
						<p>{item.price}</p>

						<button className={styles.cardButton}>VER PRODUCTO</button>
					</div>
				) : (
					" "
				),
			)}
		</div>
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
