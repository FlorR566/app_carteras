import styles from "../components/CardsContainer.module.css";

const Card = ({ images }) => {
	return (
		<div className={styles.cardsContainer}>
			{images.map((item) => (
				<div className={styles.card} key={item.id}>
					<img src={item.src} alt={item.alt} />

					<h3>{item.title}</h3>
					<p>{item.price}</p>
					{/* <a
						className={styles.cardButton}
						href=""
						target="_blank"
						rel="noopener noreferrer"
					> */}
					<button className={styles.cardButton}>VER PRODUCTO</button>
					{/* </a> */}
				</div>
			))}
		</div>
	);
};

const CardsContainer = ({ images }) => {
	return (
		<>
			<section id="products" className={styles.products}>
				<h2>Carteras</h2>
				<Card images={images} />

				<h2>Mochilas</h2>
				<Card images={images} />

				<h2>Billeteras</h2>
				<Card images={images} />

				<h2>Guardapolvos</h2>
				<Card images={images} />
			</section>
		</>
	);
};

export default CardsContainer;
