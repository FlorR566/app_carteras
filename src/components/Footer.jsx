import styles from "./Footer.module.css";
import socialIcons from "../icons";

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

const SocialLinks = () => {
	return (
		<div className={styles.followUsDiv}>
			Seguinos en:
			{/* eslint-disable-next-line no-unused-vars */}
			{socialIcons.map(({ id, href, target, rel, Icon }) => (
				<a
					key={id}
					href={href}
					target={target}
					rel={rel}
					className={styles.hover}
				>
					<Icon className={styles.socialIcono} />
				</a>
			))}
		</div>
	);
};

const Footer = () => {
	return (
		<section className={`${styles.footer} ${styles.ralewayTextFooter}`}>
			<div className={`${styles.navLogo} ${styles.ralewayTextLogo}`}>
				Lady Valentina
			</div>
			<SocialLinks />
			<Copyright />
		</section>
	);
};

export default Footer;
