---
title: "The Linux Experience"
pubDate: 2026-06-23
tags: ["linux", "work"]
---

Like most people, I started out on Windows. But the real problem is that Windows sucks now. My laptop is pretty old by modern standards (just 8 GB of RAM and an AMD Ryzen 4500U), and Windows 11 completely killed it.

### Windows experience

Windows 10 ran fine on these specs, but Windows 11 was just too heavy. The laptop would boot up and immediately sit at 4 GB of idle RAM usage. What is even left for me to use at that point? Windows was trying to improve the developer experience with things like Windows Terminal and [PowerToys](https://github.com/microsoft/powertoys), but the bloated core OS ruined it. Eventually, writing code on Windows became impossible, and I had to switch to Linux.

### Linux effect

The best part of switching is that my idle memory usage is now around 1.5 GB with my setup (running [Noctalia](https://github.com/noctalia-dev/noctalia) shell), which is awesome. From there, I slowly got used to living in the terminal. It might sound weird to non-Linux users, but it is actually fast and convenient. For example, I can use a simple command to search and install an app, check the status of a system service, or change how a tool behaves.

I now think entirely in commands and config files. That mental model shift is great for any power user who needs to touch different parts of the system. Instead of clicking through nested menus, I just use the direct path. Maybe Windows has ways to do this too, but Linux makes it the standard approach.

### Experience so far
People are often skeptical about daily-driving Linux because they think the UI is ugly, but that is not the case anymore. I spent way too much time ricing my desktop in the early days (a classic way to waste time), and I still tweak it sometimes. After installing Fedora GNOME, I never wanted to go back to Windows. I tried tiling window managers for a bit, but they do not make much sense on a small laptop screen. Then I found [niri](https://github.com/niri-wm/niri), which completely changed my workflow. The keybindings made me incredibly fast, and I could never go back to Windows for actual work.

### Some annoying parts
Of course, I got hit by the classic Linux microphone driver issue. Even though the Linux kernel covers almost all laptops now, mine was somehow missed. The drivers selected the wrong hardware pin, blocking the real mic. I left it broken for months because I could not find a fix. Luckily, we have AI now. I gave it the hardware specs and behavior, and it found a kernel regression where a pin sort fix selected the wrong input pin instead of the internal mic. It gave me the steps to fix it manually, and it worked. It is a crazy time to be alive.

### Final thoughts

I think 2026 is gonna be year of the Linux desktop (meme btw), but Linux is genuinely usable for anyone now because of environments like GNOME and KDE. As a systems student, it is basically mandatory anyway, but I am glad it is something I actually enjoy using.
