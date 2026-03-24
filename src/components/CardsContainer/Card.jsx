import styles from "./styles.module.css";

const Card = ({ item, onSelect }) => {
	return (
		<div className={styles.card} onClick={() => onSelect(item)}>
			<div className={styles.cardImgWrap}>
				<img src={item.images[0]} alt={item.name} className={styles.cardImg} />
			</div>
			<div className={styles.cardBody}>
				<h3 className={styles.cardName}>{item.name}</h3>
				<p className={styles.cardPrice}>
					$ {item.price.toLocaleString("es-AR")}
				</p>
				<button className={styles.cardBtn}>Ver producto</button>
			</div>
		</div>
	);
};

export default Card;
