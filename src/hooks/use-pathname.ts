import { createSignal, onCleanup, onMount } from "solid-js";

export function usePathname() {
	const [pathname, setPathname] = createSignal(window.location.pathname);

	const handleLocationChange = () => {
		setPathname(window.location.pathname);
	};

	onMount(() => window.addEventListener("popstate", handleLocationChange));

	onCleanup(() => {
		window.removeEventListener("popstate", handleLocationChange);
	});

	return pathname;
}
