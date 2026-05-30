@AGENTS.md

---

# Session Log: Sanity CMS Integration

## What was built

This session wired up Sanity as the headless CMS for the portfolio project grid. The static data array in `lib/data.ts` was replaced with a live Sanity fetch. No images are stored on the Next.js server — all media is served from `cdn.sanity.io`.

### New files created

| File | Purpose |
|------|---------|
| `sanity.config.ts` | Top-level Studio config — registers schema, Structure tool, and Vision (GROQ playground) |
| `sanity/schema/index.ts` | Schema barrel — exports the `schema` object consumed by `sanity.config.ts` |
| `sanity/schema/project.ts` | `project` document type: `title`, `slug` (auto from title), `category`, `coverImage` (image w/ hotspot), `order` (number, controls grid sort) |
| `lib/sanity/client.ts` | Sanity client (`createClient` from `next-sanity`) + `urlFor()` image URL builder (`@sanity/image-url`) |
| `lib/sanity/queries.ts` | GROQ queries — currently one: `projectsQuery` fetches all published projects ordered by `order` asc |
| `app/studio/[[...tool]]/page.tsx` | Embeds Sanity Studio at `/studio` using `NextStudio` from `next-sanity/studio` |
| `.env.local` | Env var template (must be filled in — see below) |

### Files modified

| File | Change |
|------|--------|
| `lib/data.ts` | Removed static `projects` array and `bg` field. `Project` type now has `_id`, `title`, `slug`, `category`, `coverImage` (typed as `SanityImageSource` from `@sanity/image-url`) |
| `app/components/PortfolioGrid.tsx` | Converted to async Server Component. Fetches `client.fetch<Project[]>(projectsQuery)` |
| `app/components/ProjectCard.tsx` | Replaced Tailwind color placeholder `<div>` with `next/image`. Uses `urlFor(project.coverImage).width(900).height(540).auto("format").url()` |
| `app/page.tsx` | Added `export const revalidate = 60` — ISR, page rebuilds in background every 60 seconds |
| `next.config.ts` | Added `remotePatterns: [new URL("https://cdn.sanity.io/**")]` (Next.js 16 URL syntax) |

### Packages installed

```
next-sanity        ^13.0.7   (runtime)
@sanity/image-url  ^2.1.1    (runtime)
@sanity/vision     ^5.28.0   (devDependency — GROQ playground in Studio)
```

---

## Environment variables (`.env.local`)

```
NEXT_PUBLIC_SANITY_PROJECT_ID=   ← from `npx sanity@latest init` or sanity.io/manage
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_READ_TOKEN=           ← Viewer token from sanity.io/manage → API → Tokens
```

`SANITY_API_READ_TOKEN` is not used for public reads today but is needed for draft preview / live content if added later.

---

## What still needs to be done (blockers before the site works end-to-end)

1. **Create the Sanity project** — run `npx sanity@latest init --env .env.local` (requires browser OAuth). Fill `NEXT_PUBLIC_SANITY_PROJECT_ID` into `.env.local`.
2. **Generate a Viewer API token** — sanity.io/manage → project → API → Tokens → Add token → Viewer. Paste into `SANITY_API_READ_TOKEN`.
3. **Populate content** — open `/studio` in dev, create 6 Project documents with real cover images and set `order` 1–6.

---

## Architecture notes

- **Studio is embedded** at `/studio` inside this Next.js app. It's unauthenticated — access is by obscurity for a personal portfolio. Add middleware auth if the site becomes public.
- **ISR at 60 seconds** — `revalidate = 60` lives on `app/page.tsx` (route segment config only works in `page.tsx`/`layout.tsx`, not in component files). Publishing new content in Sanity will appear on the live site within 60 seconds at most.
- **Image URLs** — `urlFor()` in `lib/sanity/client.ts` generates CDN URLs. The `.auto("format")` flag serves WebP/AVIF to browsers that support it. Hotspot data is stored on the image in Sanity so focal point crops work.
- **GROQ query typing** — `defineQuery` from `next-sanity`/`groq` is a pass-through tag (no inference). The fetch call is explicitly typed: `client.fetch<Project[]>(projectsQuery)`. To generate types automatically from the schema, run `npx sanity@latest typegen generate` — this produces `sanity.types.ts` at the root and removes the need for manual typing.

---

## Future work possible without major restructuring

### On-demand ISR webhook (instant cache busting)
Add `app/api/revalidate/route.ts` that calls `revalidatePath('/')` when Sanity publishes content. Register the URL as a webhook in sanity.io/manage. Protect it with a secret token. This replaces the 60s wait with instant updates.

### Individual project pages
Add `app/(site)/work/[slug]/page.tsx`. The `slug` field is already on the schema. Add a `projectBySlugQuery` to `lib/sanity/queries.ts`:
```groq
*[_type == "project" && slug.current == $slug][0] { ... }
```
Add a `description` / rich text `body` field to `sanity/schema/project.ts` and render with `@portabletext/react`.

### About page content
Add an `about` singleton document type to `sanity/schema/` (bio string, skills array, profile photo). Fetch it in `app/(site)/about/page.tsx`.

### Site settings singleton
Add a `siteSettings` document type for the hero headline, footer links, and contact email — making them editable from Studio without a code deploy.

### Sanity typed code generation
Run `npx sanity@latest typegen generate` to generate `sanity.types.ts` from the live schema. Replace the manual `Project` type in `lib/data.ts` with the generated types. Add this as a script in `package.json`.

### Live preview / draft mode
`next-sanity` ships `defineLive` for real-time draft preview. Requires the `SANITY_API_READ_TOKEN` (already in `.env.local`). Would add a preview route handler and a `SanityLive` component in the root layout.
