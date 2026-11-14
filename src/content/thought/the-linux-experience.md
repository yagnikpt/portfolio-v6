---
title: "The Linux Experience"
pubDate: 2026-06-23
tags: ["linux", "work"]
---

Like most people, I started out on Windows. But the real problem is that Windows sucks now. My laptop is pretty old by modern standards (just 8 GB of RAM and an AMD Ryzen 4500U), and Windows 11 completely choked it.

### The Windows bloat

Windows 10 ran fine on these specs, but Windows 11 was simply too heavy. The machine would boot up and immediately sit at 4 GB of idle RAM usage. What is even left to work with at that point? Microsoft tried to improve the developer experience with things like Windows Terminal and [PowerToys](https://github.com/microsoft/powertoys), but the underlying OS bloat ruined it. Eventually, writing code with a browser and an editor open became unbearable, so I switched to Linux.

### Life in the terminal

The immediate payoff was memory: my idle RAM dropped to around 1.5 GB with my setup (running [Noctalia](https://github.com/noctalia-dev/noctalia) shell). From there, I slowly got comfortable living in the terminal. It might sound tedious to non-Linux users, but it is fast and convenient. Searching for an app, installing a package, checking a system service, or tweaking a tool's config is just a single command away.

I started thinking entirely in commands and plain text configs. It changed how I interact with my system: instead of clicking through layers of nested settings menus, everything has a direct path. Windows might have ways to do some of this, but on Linux it is the default way of working.

### Daily-driving and discovering niri

People are often skeptical about daily-driving Linux because they think the desktop looks rough, but that has not been true for years. I spent way too much time ricing my desktop in the beginning (the classic time sink), though Fedora GNOME out of the box was already enough to keep me from ever looking back.

Traditional tiling window managers never made much sense to me on a small laptop screen because splitting the screen into cramped tiles gets unusable fast. Then I found [niri](https://github.com/niri-wm/niri), a scrollable tiling compositor, which completely changed my workflow. The horizontal column model and keyboard navigation made me fast enough that I could never go back to Windows for real work.

### The rough edges

Of course, I ran into the classic Linux hardware curse: the microphone did not work. Even though the kernel supports most laptops out of the box, mine was an edge case. The audio driver selected the wrong hardware pin and ignored the internal mic. I left it broken for months because I could not find a working solution in forum threads.

Eventually I dumped the hardware specs and audio codec behavior into an LLM, and it pointed me to a kernel regression where a pin-sort patch had misrouted the input pin. Following those manual fix steps actually resolved it. It is a crazy time to be alive.

### Final thoughts

2026 might finally be the year of the Linux desktop (meme btw), but modern environments like GNOME and KDE make it genuinely usable for everyday work. As someone studying systems, it is practically mandatory anyway, but I am glad it became something I actually enjoy using.

