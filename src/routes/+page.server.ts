import type { PageServerLoad } from './$types';

export const load = (async ({ locals }) => {
	const posts: App.Post[] = await locals.client.fetch(`
    *[_type == "post" ] {
        _id,  
        title,
        slug,
        publishedAt,
      } | order(publishedAt desc) [0...10]
    `);

	return {
		posts
	};
}) satisfies PageServerLoad;
