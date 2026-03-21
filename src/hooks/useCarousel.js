import { useState, useRef, useEffect, useCallback } from "react";

export function useCarousel(total) {
	const [index, setIndex] = useState(0);
	const blockSwipe = useRef(false);
	const startX = useRef(0);
	const currentX = useRef(0);
	const THRESHOLD = 50;
	const [isPaused, setIsPaused] = useState(false);

	const next = useCallback(
		() => setIndex((i) => (i === total - 1 ? 0 : i + 1)),
		[total], // solo se recrea si cambia la cantidad de bags
	);

	const prev = useCallback(
		() => setIndex((i) => (i === 0 ? total - 1 : i - 1)),
		[total],
	);

	useEffect(() => {
		if (isPaused) return;
		const interval = setInterval(next, 3000);
		return () => clearInterval(interval);
	}, [isPaused, next]);

	const handlePrev = () => {
		blockSwipe.current = true;
		setIsPaused(true); // pausa al interactuar
		setTimeout(() => setIsPaused(false), 3000); // retoma después de 3s
		prev();
	};
	const handleNext = () => {
		blockSwipe.current = true;
		setIsPaused(true);
		setTimeout(() => setIsPaused(false), 3000);
		next();
	};

	const handlePointerDown = (e) => {
		if (blockSwipe.current) return;
		try {
			e.currentTarget.setPointerCapture(e.pointerId);
		} catch {
			// intencional: falla silenciosa esperada
		}
		startX.current = e.clientX;
		currentX.current = e.clientX;
	};

	const handlePointerMove = (e) => {
		if (blockSwipe.current) return;
		currentX.current = e.clientX;
	};

	const handlePointerUpOrCancel = (e) => {
		if (blockSwipe.current) {
			blockSwipe.current = false;
			startX.current = 0;
			currentX.current = 0;
			try {
				e.currentTarget.releasePointerCapture(e.pointerId);
			} catch {
				// intencional: falla silenciosa esperada
			}
			return;
		}

		const diff = currentX.current - startX.current;
		if (diff > THRESHOLD) prev();
		else if (diff < -THRESHOLD) next();

		startX.current = 0;
		currentX.current = 0;
		try {
			e.currentTarget.releasePointerCapture(e.pointerId);
		} catch {
			// intencional: falla silenciosa esperada
		}
	};

	return {
		index,
		setIndex,
		handlePrev,
		handleNext,
		handlePointerDown,
		handlePointerMove,
		handlePointerUpOrCancel,
	};
}
