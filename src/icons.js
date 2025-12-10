import {
	FaFacebookF,
	FaInstagram,
	FaLinkedinIn,
	FaWhatsapp,
} from "react-icons/fa";

const socialIcons = [
	{
		id: 1,
		target: "_blank",
		rel: "noopener noreferrer",
		href: "https://facebook.com",
		Icon: FaFacebookF,
	},
	{
		id: 2,
		target: "_blank",
		rel: "noopener noreferrer",
		href: "https://wa.me/123456789",
		Icon: FaWhatsapp,
	},
	{
		id: 3,
		target: "_blank",
		rel: "noopener noreferrer",
		href: "https://instagram.com",
		Icon: FaInstagram,
	},
	// {
	// 	id: 4,
	// 	target: "_blank",
	// 	rel: "noopener noreferrer",
	// 	href: "https://linkedin.com",
	// 	Icon: FaLinkedinIn,
	// },
];

export default socialIcons;
