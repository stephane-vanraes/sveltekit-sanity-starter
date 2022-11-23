import client from '@sanity/client';

import {
	SANITY_PROJECT_ID,
	SANITY_DATASET,
	PREVIEW_TOKEN,
	SANITY_TOKEN
} from '$env/static/private';

const config = {
	apiVersion: '2021-08-31',
	projectId: SANITY_PROJECT_ID,
	dataset: SANITY_DATASET,
	useCdn: false // `false` if you want to ensure fresh data
};

export const sanityClient = client(config);
export const previewClient = client({ ...config, token: SANITY_TOKEN });
export const validatePreviewToken = (url: URL) =>
	url.searchParams.get('preview-token') === PREVIEW_TOKEN;
