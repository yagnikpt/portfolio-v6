import type { JSX } from "solid-js";
import { createSignal, Match, onMount, Switch } from "solid-js";
import { cn } from "@/lib/utils";

interface Props {
	info: JSX.Element;
	devlog: JSX.Element;
	thoughts: JSX.Element;
}

const TAB_ORDER = ["info", "devlog", "thought"] as const;
type TabKey = (typeof TAB_ORDER)[number];

export default function HomeTabs(props: Props) {
	const [tab, setTab] = createSignal<string>("info");
	let currentTransitionId = 0;

	function setActiveTab(nextTab: string) {
		const currentTab = tab();
		if (currentTab === nextTab) return;

		if (!document.startViewTransition) {
			setTab(nextTab);
			return;
		}

		const currentIndex = TAB_ORDER.indexOf(currentTab as TabKey);
		const nextIndex = TAB_ORDER.indexOf(nextTab as TabKey);
		const direction = nextIndex > currentIndex ? "forward" : "backward";

		document.documentElement.dataset.tabDirection = direction;
		document.documentElement.classList.add("tab-transition");

		const transitionId = ++currentTransitionId;
		let transition: ViewTransition;

		// If scrolled past the tabs section, scroll back to the top of tabs
		// so the sticky tab bar never overlaps the new tab content.
		const tabsSection = document.getElementById("tabs");
		const restingTop = tabsSection
			? tabsSection.getBoundingClientRect().top + window.scrollY
			: 0;
		const shouldScrollToTabs = window.scrollY > restingTop;

		const updateDOM = () => {
			setTab(nextTab);
			if (shouldScrollToTabs) {
				window.scrollTo({ top: restingTop, behavior: "instant" as ScrollBehavior });
			}
		};

		try {
			transition = (document as any).startViewTransition({
				update: updateDOM,
				types: [direction],
			});
		} catch {
			transition = document.startViewTransition(updateDOM);
		}

		transition.ready.catch(() => {});
		transition.finished
			.catch(() => {})
			.finally(() => {
				if (currentTransitionId === transitionId) {
					document.documentElement.classList.remove("tab-transition");
					delete document.documentElement.dataset.tabDirection;
				}
			});
	}

	onMount(() => {
		const params = new URLSearchParams(window.location.search);
		const tabFromParams = params.get("tab") ?? "info";
		if (["info", "devlog", "thought"].includes(tabFromParams))
			setTab(tabFromParams ?? "info");
	});

	return (
		<>
			<div
				id="tabs-trigger"
				class="flex gap-6 items-center px-8 md:px-12 top-0 sticky py-4 bg-background border-b-2 z-2"
			>
				<button
					type="button"
					class={cn(
						"text-muted relative",
						tab() === "info" && "text-foreground",
					)}
					onClick={() => setActiveTab("info")}
				>
					Information
					{tab() === "info" && (
						<span
							data-tab-indicator
							class="absolute bottom-0 inset-x-0 h-0.5 bg-muted"
						/>
					)}
				</button>
				<button
					type="button"
					class={cn(
						"text-muted relative",
						tab() === "devlog" && "text-foreground",
					)}
					onClick={() => setActiveTab("devlog")}
				>
					DevLog
					{tab() === "devlog" && (
						<span
							data-tab-indicator
							class="absolute bottom-0 inset-x-0 h-0.5 bg-muted"
						/>
					)}
				</button>
				<button
					type="button"
					class={cn(
						"text-muted relative",
						tab() === "thought" && "text-foreground",
					)}
					onClick={() => setActiveTab("thought")}
				>
					Thoughts
					{tab() === "thought" && (
						<span
							data-tab-indicator
							class="absolute bottom-0 inset-x-0 h-0.5 bg-muted"
						/>
					)}
				</button>
			</div>
			<div
				id="tabs-content"
				class="mt-4 py-7 min-h-[calc(100svh-4rem)]"
			>
				<Switch>
					<Match when={tab() === "info"}>{props.info}</Match>
					<Match when={tab() === "devlog"}>{props.devlog}</Match>
					<Match when={tab() === "thought"}>{props.thoughts}</Match>
				</Switch>
			</div>
		</>
	);
}
