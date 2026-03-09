import { useState, useEffect } from "react";

function useIsMobile(breakpoint = 768) {
	const [isMobile, setIsMobile] = useState(
		() => typeof window !== "undefined" && window.innerWidth < breakpoint,
	);

	useEffect(() => {
		const mediaQuery = window.matchMedia(`(max-width: ${breakpoint - 1}px)`);

		const handleChange = (e) => setIsMobile(e.matches);
		mediaQuery.addEventListener("change", handleChange);

		return () => mediaQuery.removeEventListener("change", handleChange);
	}, [breakpoint]);

	return isMobile;
}

export default useIsMobile;
