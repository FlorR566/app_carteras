import { useState } from "react";
import styles from "./Navbar.module.css";
import logo from "../assets/Logo.png";

const Navbar = () => {
	const [open, setOpen] = useState(false);

	let statusMenu = open ? "X" : "☰";

	return (
		<nav className={styles.navbar}>
			<div className={styles.containerLogo}>
				<img src={logo} className={styles.imgLogo} alt="Logo Lady Valentina" />
				<h1 className={styles.ralewayTextLogo}>LADY VALENTINA</h1>
			</div>

			{/* <div className={styles.navToggle} onClick={() => setOpen(!open)}>
				{statusMenu}
			</div> */}

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
