import type { Handle } from '@sveltejs/kit';
import { previewClient, sanityClient, validatePreviewToken } from '$lib/sanity/client.server';

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
