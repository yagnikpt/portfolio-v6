import type { JSX } from "solid-js";
import { createSignal, Match, onMount, Switch } from "solid-js";
import { cn } from "@/lib/utils";

interface Props {
	info: JSX.Element;
	devlog: JSX.Element;
	thoughts: JSX.Element;
}

export default function HomeTabs(props: Props) {
	const [tab, setTab] = createSignal("info");

	function setActiveTab(tab: string) {
		const tabsTriggerElement = document.querySelector(
			"#tabs-trigger",
		) as HTMLElement;
		const tabsContentElement = document.querySelector(
			"#tabs-content",
		) as HTMLElement;

		// @ts-expect-error: types are just not there yet
		if (!tabsTriggerElement.startViewTransition) {
			setTab(tab);
			return;
		}

		// @ts-expect-error: types are just not there yet
		tabsTriggerElement.startViewTransition(() => {
			setTab(tab);
		});
		// @ts-expect-error: types are just not there yet
		tabsContentElement.startViewTransition();
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
						tab() === "info" &&
							"text-foreground after:absolute after:bottom-0 after:inset-x-0 after:h-0.5 after:bg-muted after:[view-transition-name:tab-underline]",
					)}
					onClick={() => setActiveTab("info")}
				>
					Information
				</button>
				<button
					type="button"
					class={cn(
						"text-muted relative",
						tab() === "devlog" &&
							"text-foreground after:absolute after:bottom-0 after:inset-x-0 after:h-0.5 after:bg-muted after:[view-transition-name:tab-underline]",
					)}
					onClick={() => setActiveTab("devlog")}
				>
					DevLog
				</button>
				<button
					type="button"
					class={cn(
						"text-muted relative",
						tab() === "thought" &&
							"text-foreground after:absolute after:bottom-0 after:inset-x-0 after:h-0.5 after:bg-muted after:[view-transition-name:tab-underline]",
					)}
					onClick={() => setActiveTab("thought")}
				>
					Thoughts
				</button>
			</div>
			<div id="tabs-content" class="mt-4 py-7">
				<Switch>
					<Match when={tab() === "info"}>{props.info}</Match>
					<Match when={tab() === "devlog"}>{props.devlog}</Match>
					<Match when={tab() === "thought"}>{props.thoughts}</Match>
				</Switch>
			</div>
		</>
	);
}
