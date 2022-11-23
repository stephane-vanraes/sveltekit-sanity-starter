# Starter Kit for SvelteKit && Sanity (with Typescript)

## Environment Variables

Create a .env file (or equivalent for production) with

```
SANITY_PROJECT_ID=<your projectid>
SANITY_DATASET=<your dataset>
SANITY_TOKEN=<your token>
PREVIEW_TOKEN=<a random preview token>
```

## Previewing your content

You can get a preview of unpublished content using the preview token (just add `?preview_token=<PREVIEW TOKEN>`) provided in the environment variables, while previewing a boolean `isPreviewMode` is set on the top layout data, this is used to show a small bar indicating preview mode.

## Using the Sanity Client

`lib/server/sanity/sanityClient.ts` creates two clients: one with the `SANITY TOKEN` and one without, the first gives you an authorized connection that can be used for previewing, the other one is a general public one. In `hooks.server.ts` the app will check if a valid preview token is provided and populate `event.locals` accordingly with either the authorized or the normal connection.

In _any_ server side script related to pages/endpoints (`+server.ts`, `+layout.server.ts` and `+page.server.ts`) you can grab this client from the locals and use it to request the desired data from Sanity.

## Styling

It's SVELTE! There is no strict way of doing the styling do whatever you want, included is the most heavy handed reset in existence, use at your own risk.
