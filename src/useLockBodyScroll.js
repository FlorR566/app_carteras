import { useEffect } from "react";

export const useLockBodyScroll = (isLocked) => {
	useEffect(() => {
		const originalStyle = window.getComputedStyle(document.body).overflow;
		if (isLocked) document.body.style.overflow = "hidden";

		// Al cerrar o desmontar, vuelve al estilo original
		return () => (document.body.style.overflow = originalStyle);
	}, [isLocked]);
};
export default useLockBodyScroll;
