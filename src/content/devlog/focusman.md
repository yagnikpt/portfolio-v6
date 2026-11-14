---
title: "Building focusman"
description: "A personal background daemon that closes off-task browser tabs and windows based on intent."
pubDate: 2026-11-14
tags: ["personal", "tool"]
---

Every time I sit down to work, my desktop prompts me with a question: _"What is your intent?"_

Whatever I type becomes the rule for that session. From that moment on, a background daemon I wrote called [focusman](https://github.com/yagnikpt/sys_tools) monitors my active windows and browser tabs against that declaration, closing anything that pulls me off track.

Most site blockers rely on hardcoded domain blacklists, but that never worked for me. YouTube might be a conference talk on distributed systems or a gaming rabbit hole; Reddit could have an obscure compiler fix or a 30-minute doomscroll. Static URL blockers lack the context to tell the difference. I needed something that understands _why_ I opened a page or an app, evaluates it against what I said I was doing, and kills the distraction before my impulses win.

## The Observation Layer: No Extensions, No Screen Scraping

To catch distractions in real time, `focusman` needs visibility into what is on screen without adding latency or running heavy screen capture tools. Instead of maintaining browser extensions or recording the display, the daemon plugs directly into two native IPC interfaces:

- **Browser tabs via Chrome DevTools Protocol (CDP):** Rather than dealing with a Manifest V3 extension that I could easily toggle off across profiles, I start Chromium with remote debugging enabled (`--remote-debugging-port=9222`). `focusman` connects over a local WebSocket, listens for tab navigation events, extracts the active URL and page title, and sends a `Target.closeTarget` command whenever an off-task page loads.
- **Desktop windows via Wayland IPC:** Polling window titles with X11 tools or accessibility APIs is sluggish on modern Wayland setups. Under my compositor (`umbriel`), `focusman` connects directly to the compositor's Unix domain socket. When focus shifts, the compositor pushes the window's app ID and title. If I open Steam or a media player during a focused sprint, the daemon catches it the moment the window gains focus.

## The 3-Tier Evaluation Pipeline

Sending every tab switch and window transition to an LLM would be slow and expensive. To keep enforcement feeling instant, `focusman` runs events through three stages:

### Tier 0: Static Fast Paths & Homepage Allowlisting

The fastest check is the one that avoids the network entirely:

- **Instant allow:** Tools I always need (`Zed`, `ghostty`, `kitty`, work email) pass immediately.
- **Instant deny:** Obvious time sinks (`Steam`, `Discord`, feed sites like `x.com`) close on the spot.
- **Homepage allowlist:** I cannot blanket-allow YouTube, but I also cannot blanket-block it when I need to search for a tutorial. The `homepage_allow_list` lets root domains like `youtube.com` or `google.com` open so I can search. The moment I click a specific video (`/watch?v=...`) or article, it falls through to semantic inspection.

### Tier 1: In-Memory TTL Cache

Switching between docs, local dev servers, and reference tabs should not trigger repeated network calls. Evaluation results are cached in memory for 15 minutes by intent, URL, and window metadata. If a page was already verified as relevant 30 seconds ago, it is re-approved immediately.

### Tier 2: Low-Latency Semantic Decisions

When an activity is not cached and falls outside the static lists, `focusman` queries a lightweight [System One](https://docs.typesafe.ai/concepts/system-one) model (configured in my `config.toml`). Instead of asking a general conversational model, it uses an optimized classification schema:

- **Alignment:** Labels the activity as _direct_ (advancing the primary goal), _supporting_ (docs, search queries, tools), _tangent_ (productive tech work, but unrelated to current intent), or _distraction_ (leisure, social feeds).
- **Off-Task Judgement:** A binary decision based on the stated intent.

If the model classifies the activity as an off-task distraction, `focusman` closes the tab in Chromium or the window in Wayland.

## Living with an Enforcer

Work is rarely static, and a focus tool that cannot adapt to shifting priorities ends up getting uninstalled. `focusman` runs a small internal HTTP server so I can update my intent without restarting anything. I bound a shortcut in my window manager to hit `localhost:49312/change-intent`, which pops up a `rofi` prompt. If I need to switch from coding to triaging a production issue, changing intent takes three seconds, clears the cache, and updates my target for the next block of time.

Living with the daemon has changed how I interact with my machine. Most of my distractions are not deliberate choices; they are pure muscle memory: hitting `Ctrl+T`, typing `x.com`, or clicking a video thumbnail while waiting for a test suite to run. With `focusman`, the tab snaps shut before the page even finishes rendering. That immediate cut breaks the autopilot habit on the spot.

For my daily setup, it has been far more effective than traditional blockers. It stays out of the way until I wander off, holds me to what I said I was going to do, and doesn't require me to fight my own willpower.
