import { IconBrandGithub } from "@tabler/icons-solidjs";
import { createSignal, For, Match, Show, Switch } from "solid-js";
import { featuredProjects } from "@/lib/projects";
import { cn } from "@/lib/utils";

// interface Props {

// }

export default function HomeTabs() {
	const [tab, setTab] = createSignal("info");

	return (
		<>
			<div class="flex gap-6 items-center px-12">
				<button
					type="button"
					class={cn("text-muted", tab() === "info" && "text-foreground")}
					onClick={() => setTab("info")}
				>
					Information
				</button>
				<button
					type="button"
					class={cn("text-muted", tab() === "devlog" && "text-foreground")}
					onClick={() => setTab("devlog")}
				>
					DevLog
				</button>
				<button
					type="button"
					class={cn("text-muted", tab() === "thoughts" && "text-foreground")}
					onClick={() => setTab("thoughts")}
				>
					Thoughts
				</button>
			</div>
			<div class="border-t-2 border-neutral-100 px-12 mt-4 py-8">
				<Switch>
					<Match when={tab() === "info"}>
						<div class="grid grid-cols-[1fr_4fr]">
							<h4 class="text-muted">Projects</h4>
							<div class="flex flex-col gap-8">
								<For each={featuredProjects}>
									{(item) => (
										<div>
											<Switch>
												<Match when={item.links.site}>
													<div class="flex gap-2 items-center">
														<a
															target="_blank"
															rel="noreferrer"
															class="underline decoration-2 decoration-muted"
															href={item.links.site}
														>
															{item.name}
														</a>
														<Show when={item.links.repo}>
															{(repo) => (
																<a
																	target="_blank"
																	rel="noreferrer"
																	href={repo()}
																>
																	<IconBrandGithub class="size-4" />
																</a>
															)}
														</Show>
													</div>
												</Match>
												<Match when={!item.links.site}>
													<a
														target="_blank"
														rel="noreferrer"
														class="underline decoration-2 decoration-muted"
														href={item.links.repo}
													>
														{item.name}
													</a>
												</Match>
											</Switch>
											<p class="text-muted text-sm mt-1">
												{item.tech.join(", ")}
											</p>
											<p class="mt-2 text-sm">{item.description}</p>
											<div class="flex gap-2 mt-4">
												{item.image.map((i) => (
													<img
														class="h-20 w-auto rounded"
														src={i.src}
														alt={item.name}
													/>
												))}
											</div>
										</div>
									)}
								</For>
							</div>
						</div>
					</Match>
				</Switch>
			</div>
		</>
	);
}
