import type { LayoutServerLoad } from './$types';

export const load = (async ({ locals }) => {
	locals.crumbs[1] = { href: '/posts', title: 'Posts' };
	return {};
}) satisfies LayoutServerLoad;
