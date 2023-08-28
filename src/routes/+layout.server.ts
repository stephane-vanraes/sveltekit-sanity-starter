import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ locals }) => {
	locals.crumbs[0] = { href: '/', title: 'Home' };
	return {
		crumbs: locals.crumbs,
		isPreviewMode: locals.isPreviewMode
	};
};
