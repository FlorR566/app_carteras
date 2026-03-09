import { useState } from "react";
import styles from "./Navbar.module.css";
import logo from "../assets/Logo.png";
import { X, Menu } from "lucide-react";

const NAV_LINKS = [
	{ label: "Inicio", href: "#home" },
	{ label: "Productos", href: "#products" },
	{ label: "Nosotros", href: "#aboutUs" },
	{ label: "Contacto", href: "#contact" },
];

const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const handleMenuToggle = () => setIsMenuOpen((prev) => !prev);
	const handleLinkClick = () => setIsMenuOpen(false);

	return (
		<nav className={styles.navbar}>
			<a href="#home" className={styles.aLogo}>
				<div className={styles.containerLogo}>
					<img
						src={logo}
						width={45}
						height={50}
						className={styles.imgLogo}
						alt="Logo Lady Valentina"
					/>
					<h1 className={styles.ralewayTextLogo}>LADY VALENTINA</h1>
				</div>
			</a>

			<button
				className={styles.navToggle}
				onClick={handleMenuToggle}
				aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
				aria-expanded={isMenuOpen}
			>
				{isMenuOpen ? <X size={25} /> : <Menu size={25} />}
			</button>

			<ul className={`${styles.navLinks} ${isMenuOpen ? styles.open : ""}`}>
				{NAV_LINKS.map(({ label, href }) => (
					<li key={href}>
						<a href={href} onClick={handleLinkClick}>
							{label}
						</a>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default Navbar;
