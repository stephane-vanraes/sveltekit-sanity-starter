import { createClient } from '@sanity/client';

import { PREVIEW_TOKEN, SANITY_TOKEN } from '$env/static/private';
import { PUBLIC_SANITY_DATASET, PUBLIC_SANITY_PROJECT_ID } from '$env/static/public';

const config = {
	apiVersion: '2021-08-31',
	projectId: PUBLIC_SANITY_PROJECT_ID,
	dataset: PUBLIC_SANITY_DATASET,
	useCdn: false // `false` if you want to ensure fresh data
};

export const sanityClient = createClient(config);
export const previewClient = createClient({ ...config, token: SANITY_TOKEN });
export const validatePreviewToken = (url: URL) =>
	url.searchParams.get('preview_token') === PREVIEW_TOKEN;
