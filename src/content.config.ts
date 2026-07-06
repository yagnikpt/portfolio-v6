import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const devlog = defineCollection({
	loader: glob({ base: "./src/content/devlog", pattern: "**/*.{md,mdx}" }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			pubDate: z.coerce.date(),
			heroImage: image().optional(),
			tags: z.array(z.string()).optional(),
			draft: z.boolean().optional(),
		}),
});

const thought = defineCollection({
	loader: glob({ base: "./src/content/thought", pattern: "**/*.{md,mdx}" }),
	schema: z.object({
		title: z.string(),
		pubDate: z.coerce.date(),
		tags: z.array(z.string()).optional(),
		draft: z.boolean().optional(),
	}),
});

export const collections = { devlog, thought };
