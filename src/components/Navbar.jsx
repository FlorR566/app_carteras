import { useState } from "react";
import styles from "./Navbar.module.css";
import { NAV_LINKS } from "../constants/navigation";
import logo from "../assets/Logo.png";
import { X, Menu } from "lucide-react";

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
					<span className={styles.ralewayTextLogo}>LADY VALENTINA</span>
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
