import styles from "./styles.module.css";
import socialIcons from "../../constants/icons";

const SocialLinks = () => {
	return (
		<div className={styles.followUsDiv}>
			Seguinos en:
			{/* eslint-disable-next-line no-unused-vars */}
			{socialIcons.map(({ id, href, target, title, rel, Icon }) => (
				<a
					key={id}
					href={href}
					target={target}
					rel={rel}
					title={title}
					className={styles.hover}
				>
					<Icon className={styles.socialIcono} />
				</a>
			))}
		</div>
	);
};

const Copyright = () => {
	return (
		<div className={styles.copyright}>
			<p>
				Copyright © 2025{" "}
				<a
					href="https://florenciarodriguez.vercel.app/"
					target="_blank"
					rel="noopener noreferrer"
				>
					Florencia Rodriguez
				</a>{" "}
				🌸
			</p>
		</div>
	);
};

const Footer = () => {
	return (
		<section
			id="contact"
			className={`${styles.footer} ${styles.ralewayTextFooter}`}
		>
			<div className={`${styles.navLogo} ${styles.ralewayTextLogo}`}>
				LADY VALENTINA
			</div>
			<SocialLinks />
			<Copyright />
		</section>
	);
};

export default Footer;
