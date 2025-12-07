import { useState } from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
	const [open, setOpen] = useState(false);

	return (
		<nav className={styles.navbar}>
			<div className={`${styles.navLogo} ${styles.ralewayTextLogo}`}>
				Lady Valentina
			</div>

			<div className={[styles.navToggle]} onClick={() => setOpen(!open)}>
				☰
			</div>

			<ul className={`${styles.navLinks} ${open ? styles.open : ""}`}>
				<li>
					<a href="#home">Inicio</a>
				</li>
				<li>
					<a href="#productos">Productos</a>
				</li>
				<li>
					<a href="#nosotros">Nosotros</a>
				</li>
				<li>
					<a href="#contacto">Contacto</a>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
