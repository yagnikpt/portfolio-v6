import type { JSX } from "solid-js";
import { createSignal, Match, Switch } from "solid-js";
import { cn } from "@/lib/utils";

interface Props {
	info: JSX.Element;
	devlog: JSX.Element;
	thoughts: JSX.Element;
}

export default function HomeTabs(props: Props) {
	const [tab, setTab] = createSignal("info");

	function setActiveTab(tab: string) {
		if (!document.startViewTransition) {
			setTab(tab);
			return;
		}

		document.startViewTransition(() => {
			setTab(tab);
		});
	}

	return (
		<>
			<div class="flex gap-6 items-center px-8 md:px-12">
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
						tab() === "thoughts" &&
							"text-foreground after:absolute after:bottom-0 after:inset-x-0 after:h-0.5 after:bg-muted after:[view-transition-name:tab-underline]",
					)}
					onClick={() => setActiveTab("thoughts")}
				>
					Thoughts
				</button>
			</div>
			<div class="border-t-2 mt-4 py-8">
				<Switch>
					<Match when={tab() === "info"}>{props.info}</Match>
					<Match when={tab() === "devlog"}>{props.devlog}</Match>
					<Match when={tab() === "thoughts"}>{props.thoughts}</Match>
				</Switch>
			</div>
		</>
	);
}
