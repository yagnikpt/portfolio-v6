import sitemap from "@astrojs/sitemap";
import solidJs from "@astrojs/solid-js";
import tailwindcss from "@tailwindcss/vite";
import umami from "@yeskunall/astro-umami";
import { defineConfig, fontProviders } from "astro/config";
import { loadEnv } from "vite";

const env = loadEnv(process.env.NODE_ENV as string, process.cwd(), "");

export default defineConfig({
	site: env.SITE_URL ?? "http://localhost:4321",
	trailingSlash: "never",
	vite: {
		plugins: [tailwindcss()],
	},
	fonts: [
		{
			provider: fontProviders.google(),
			name: "Google Sans",
			cssVariable: "--font-google-sans",
			weights: [400, 500, 600, 800],
		},
		{
			provider: fontProviders.google(),
			name: "Playfair Display",
			cssVariable: "--font-playfair-display",
			weights: [400, 500, 600, 800],
		},
	],
	integrations: [
		solidJs(),
		umami({
			endpointUrl: env.UMAMI_ANALYTICS_HOST,
			id: env.UMAMI_WEBSITE_ID,
			performance: true,
		}),
		sitemap(),
	],
});
