import AdmissionScraperAnnImage from "@/assets/projects/admission_scraper_ann.webp";
import AdmissionScraperLandingImage from "@/assets/projects/admission_scraper_landing.webp";
import BoomtyprImage from "@/assets/projects/boomtypr.webp";
import FlashbackImage from "@/assets/projects/flashback.webp";
import GalaryImage from "@/assets/projects/galary.webp";
import HigrowImage from "@/assets/projects/higrow.webp";
import MangaReaderImage from "@/assets/projects/mangareader.webp";
import RPSImage from "@/assets/projects/rps.webp";
import WhRelayImage from "@/assets/projects/whrelay.webp";

export const projects = [
	{
		name: "Flashback",
		description:
			"A command-line knowledge store. It captures text, URLs, and commands, extracts structured metadata, and makes everything searchable.",
		image: [FlashbackImage],
		tech: ["Go", "Bubbletea", "Gemini", "SQLite"],
		links: {
			repo: "https://github.com/yagnikpt/flashback",
		},
		category: "CLI",
	},
	{
		name: "Admission Scraper",
		description:
			"This project is designed to automate the collection, processing, and storage of university admission announcements.",
		image: [AdmissionScraperLandingImage, AdmissionScraperAnnImage],
		tech: ["Python", "FastAPI", "Gemini API", "PostgreSQL"],
		links: {
			site: "https://admission-scraper-webapp.fly.dev",
			repo: "https://github.com/yagnikpt/admission-scraper",
		},
		category: "Real World",
	},
	{
		name: "Mangasss",
		description:
			"A manga reader app where you can find whatever manga you want to read.",
		image: [MangaReaderImage],
		tech: ["Svelte", "TailwindCSS"],
		links: {
			site: "https://mangasss.vercel.app",
			repo: "https://github.com/yagnikpt/mangasss",
		},
		category: "App",
	},
	{
		name: "boomtypr",
		description:
			"A sleek typing test experience in terminal. Multiple modes - time, words, and zen. Real-time WPM and accuracy tracking.",
		image: [BoomtyprImage],
		tech: ["Go", "Bubbletea"],
		links: {
			repo: "https://github.com/yagnikpt/boomtypr",
		},
		category: "CLI",
	},
	{
		name: "whrelay",
		description:
			"A lightweight, self-hosted webhook relay server written in Go.",
		image: [WhRelayImage],
		tech: ["Go"],
		links: {
			repo: "https://github.com/yagnikpt/webhook-relay",
		},
		category: "CLI",
	},
	{
		name: "HiGrow",
		description:
			"HiGrow is a platform that aims to help empower minds worldwide to learn, compete, and grow together through workshops and contests!",
		image: [HigrowImage],
		tech: ["Nextjs", "Supabase"],
		links: {
			site: "https://higrow-test.vercel.app",
		},
		category: "Real World",
	},
	{
		name: "PvP Rock Paper Scissors",
		description: "A multiplayer online game developed using Bun and Redis.",
		image: [RPSImage],
		tech: ["Bun", "Redis", "Svelte"],
		links: {
			site: "https://pvp-rps.vercel.app",
			repo: "https://github.com/yagnikpt/pvp-rps-server",
		},
		category: "Fullstack",
	},
	{
		name: "Animation Gallery",
		description: "A single-page image gallery site with stunning animations.",
		image: [GalaryImage],
		tech: ["React", "Motion"],
		links: {
			site: "https://animated0casestudy.vercel.app",
			repo: "https://github.com/yagnikpt/animated_casestudy",
		},
		category: "Animation",
	},
];

export const featuredProjects = [projects[0], projects[1]];
