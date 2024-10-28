import { type RefObject, useEffect, useState } from "react";

export const useInView = (ref: RefObject<HTMLElement>, rootMargin = "0px") => {
	const [inView, setInView] = useState(false);
	const [hasBeenInView, setHasBeenInView] = useState(false);

	useEffect(() => {
		if (!ref.current) {
			return;
		}

		const observer = new IntersectionObserver(
			(entries) => {
				const isIntersecting = entries.some((entry) => entry.isIntersecting);
				setInView(isIntersecting);
				if (isIntersecting && !hasBeenInView) {
					setHasBeenInView(true);
				}
			},
			{ rootMargin },
		);
		observer.observe(ref.current);

		return () => {
			observer.disconnect();
		};
	}, [ref, rootMargin, hasBeenInView]);

	return { inView, hasBeenInView };
};
