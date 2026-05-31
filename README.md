# Yagnik Patel

A small personal portfolio built with Astro. It keeps the focus on current work, a few projects, short devlogs, and stray thoughts.

## Stack

- [Astro](https://astro.build/) for the static site
- [Solid](https://www.solidjs.com/) for interactive islands
- [Tailwind CSS](https://tailwindcss.com/) for styling
- Astro Content Collections for `devlog` and `thought` entries
- Bun for package management and local scripts

## Local setup

```sh
bun install
bun dev
```

The dev server runs on `localhost:4321` by default.

## Content

```text
src/content/devlog/   longer build notes and project logs
src/content/thought/  shorter notes and thoughts
src/lib/projects.ts   project data shown on the site
src/lib/skills.ts     current and previous skills
```

Each content entry uses frontmatter defined in `src/content.config.ts`.

## Environment

Optional values used by the site config:

```sh
SITE_URL=
UMAMI_ANALYTICS_HOST=
UMAMI_WEBSITE_ID=
```

If `SITE_URL` is not set, Astro falls back to `http://localhost:4321`.
