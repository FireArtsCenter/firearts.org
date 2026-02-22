# Fire Arts Center website (firearts.org)

This is the main website for the Fire Arts Center

## Tech Stack

- Astro - SSG - for static site generation
- Contentful - CMS - content saved there
  - currently migrating content now, so it is a mix of content in code vs content on Contentful
- Vercel - host

## Type Safety

This repo uses TypeScript to help ensure type safe code. Because the content lives in Contentful, any time a model changes there, I don't want to remember to add it here too. So there is a shell script that accesses the content models and generates type files under `src/types/contentful/*`.

This does not need to be run often, just when content models change.

## Deployment

This relies on Vercel's GitHub CI pipeline. So once you create a PR it will fire of CI to build a preview. From there you can confirm it looks good, then merge your PR to `main` to trigger a production build.

## Local Development

1. Clone this repo
2. `npm install`
3. `npm run dev` - to work on the site locally
4. Open browser to https://localhost:4321

### Production build

If you need to test a production build locally you can run:

1. `npm run build && npm run preview`
2. Open browser to https://localhost:4321
