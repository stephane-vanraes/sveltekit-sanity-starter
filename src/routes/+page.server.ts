import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals }) => {
	const posts: App.Post[] = await locals.client.fetch(`
    *[_type == "post"] {
        _id,  
        title,
        slug,
        publishedAt,
      } | order(select(defined(publishedAt) => 1,  0) asc, publishedAt desc)
    `);

	return {
		posts
	};
};
