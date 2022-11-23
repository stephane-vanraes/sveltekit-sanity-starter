import type { Handle } from '@sveltejs/kit';
import { previewClient, sanityClient } from '$lib/server/sanity/sanityClient';
import { validatePreviewToken } from '$lib/server/sanity/sanityClient';

export const handle: Handle = async ({ event, resolve }) => {
	const isPreviewMode = validatePreviewToken(event.url);
	const client = isPreviewMode ? previewClient : sanityClient;
	event.locals = {
		client,
		isPreviewMode
	};

	const response = await resolve(event);
	return response;
};
