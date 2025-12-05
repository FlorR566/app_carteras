import { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
	const [open, setOpen] = useState(false);

	return (
		<nav className="navbar">
			<div className="nav-logo">Lady Valentina</div>

			<div className="nav-toggle" onClick={() => setOpen(!open)}>
				☰
			</div>

			<ul className={`nav-links ${open ? "open" : ""}`}>
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
