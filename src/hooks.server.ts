import { previewClient, sanityClient, validatePreviewToken } from '$lib/sanity/client.server';
import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	const isPreviewMode = validatePreviewToken(event.url);
	const client = isPreviewMode ? previewClient : sanityClient;
	event.locals = {
		client,
		crumbs: {},
		isPreviewMode
	};

	const response = await resolve(event);
	return response;
};
