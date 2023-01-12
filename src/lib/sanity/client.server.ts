import client from '@sanity/client';

import {
	PUBLIC_SANITY_PROJECT_ID,
	PUBLIC_SANITY_DATASET,
} from '$env/static/public'

import {
	PREVIEW_TOKEN,
	SANITY_TOKEN
} from '$env/static/private';

const config = {
	apiVersion: '2021-08-31',
	projectId: PUBLIC_SANITY_PROJECT_ID,
	dataset: PUBLIC_SANITY_DATASET,
	useCdn: false // `false` if you want to ensure fresh data
};

export const sanityClient = client(config);
export const previewClient = client({ ...config, token: SANITY_TOKEN });
export const validatePreviewToken = (url: URL) =>
	url.searchParams.get('preview-token') === PREVIEW_TOKEN;
