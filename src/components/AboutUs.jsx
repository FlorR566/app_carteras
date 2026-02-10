import styles from "../components/AboutUs.module.css";
import useIsMobile from "../useIsMobile";

const AboutUs = () => {
	const isMobile = useIsMobile();

	return (
		<section id="aboutUs" className={styles.aboutUs}>
			<h2 className={styles.title}>Sobre nosotros</h2>

			{isMobile ? (
				<div className={styles.AboutUsContainer}>
					<p className={styles.aboutText}>
						Creemos que una cartera es más que un accesorio, es la compañera
						diaria de tus desafíos, viajes y logros. En Lady Valentina, hacemos
						diseños pensando en la funcionalidad que necesitas utilizando
						materiales de primera calidad y <strong>100% cuero</strong>.
						<br />
						<br />
						Seleccionamos materiales de alta resistencia y diseñamos siluetas
						que se adaptan a tu ritmo de vida, para ir al trabajo, una reunión o
						simplemente una salida de fin de semana.
						<br />
						<br />
						<span className={styles.titleCta}>
							{" "}
							Diseños personalizados, creá tu pieza única!
						</span>
					</p>
				</div>
			) : (
				<div className={styles.AboutUsContainer}>
					<img
						src="https://res.cloudinary.com/dvcxjks92/image/upload/c_fill,q_auto,f_auto/v1770669131/aboutWomen_vv2pdo.webp"
						className={styles.imgAbout}
					/>
					<p className={styles.aboutText}>
						Creemos que una cartera es más que un accesorio, es la compañera
						diaria de tus desafíos, viajes y logros. En Lady Valentina, hacemos
						diseños pensando en la funcionalidad que necesitas utilizando
						materiales de primera calidad y <strong>100% cuero</strong>.
						<br />
						<br />
						Seleccionamos materiales de alta resistencia y diseñamos siluetas
						que se adaptan a tu ritmo de vida, para ir al trabajo, una reunión o
						la salida del fin de semana.
						<br />
						<br />
						Encontrá esa cartera que te acompaña todos los días. Y para las
						profes, también hacemos guardapolvos persalizables.
						<br />
						<br />
						<span className={styles.titleCta}>
							{" "}
							Diseños personalizados, creá tu pieza única!
						</span>
					</p>
				</div>
			)}
		</section>
	);
};

export default AboutUs;
