---
title: "Containers"
description: "Process of learning more about containers."
pubDate: 2026-06-29
tags: ["linux", "container"]
---

I randomly came across a great resource for learning systems and devops on Twitter: [labs.iximiuz.com](https://labs.iximiuz.com). They have some really good articles on container internals like networking and filesystems, so I started reading their networking tutorial.

I loved the idea of building a containerization tool from scratch. As I kept reading, I got introduced to a lot of new Linux tools for managing network behavior, like network interfaces and virtual ethernet (veth) devices. I already had a decent grasp of namespaces and cgroups, but the tutorial introduced me to commands like ip and nsenter. It used veth pairs and linux bridge to communicate with isolated network namespaces. I also learned a bit of iptables later, which I found out is actually succeeded by nftables. But learning iptables shed some light on how the kernel handles packets through different interfaces and how to tweak that behavior. I had to reread some parts because I got confused, but after a few passes, I got my head around it.

Once I finished the tutorial, I wanted to put that knowledge to use and build a utility for my own container tool. The catch is that these tools require root access. I need to figure out how to do this in user land with user-level privileges. I tried reading the Podman repository using DeepWiki to see how they do it, but they use custom tools for networking and it completely overwhelmed me.

Right now, I'm stuck on how to handle the networking side of things. Should I just use unshare with systemd slices and call it a day? I'll have to look for other ways to implement it at some point.

---

Resources
- [How Container Networking Works: Building a Bridge Network From Scratch](https://labs.iximiuz.com/tutorials/container-networking-from-scratch)
- [Illustrated introduction to Linux iptables](https://iximiuz.com/en/posts/laymans-iptables-101)
