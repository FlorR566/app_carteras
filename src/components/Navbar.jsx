import { useState } from "react";
import styles from "./Navbar.module.css";
import logo from "../assets/Logo.png";

const Navbar = () => {
	const [open, setOpen] = useState(false);

	let statusMenu = open ? "X" : "☰";

	return (
		<nav className={styles.navbar}>
			<a href="#home" className={styles.aLogo}>
				<div className={styles.containerLogo}>
					<img
						src={logo}
						width="45"
						height="50"
						className={styles.imgLogo}
						alt="Logo Lady Valentina"
					/>
					<h1 className={styles.ralewayTextLogo}>LADY VALENTINA</h1>
				</div>
			</a>

			<button
				className={styles.navToggle}
				onClick={() => setOpen(!open)}
				aria-label="Abrir o cerrar el menú"
			>
				{statusMenu}
			</button>

			<ul className={`${styles.navLinks} ${open && styles.open}`}>
				<li>
					<a href="#home">Inicio</a>
				</li>
				<li>
					<a href="#products">Productos</a>
				</li>
				<li>
					<a href="#aboutUs">Nosotros</a>
				</li>
				<li>
					<a href="#contact">Contacto</a>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
