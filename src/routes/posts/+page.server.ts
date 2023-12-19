import { building } from '$app/environment';
import type { PageServerLoad } from './$types';

export const load = (async ({ locals, url }) => {
	const pageIndex = building ? 0 : ((url.searchParams.get('pageIndex') ?? 0) as number);
	const pageSize = 10;
	const [all_posts, itemCount] = (await Promise.all([
		locals.client.fetch(`
      *[_type == "post"] {
        _id,  
        title,
        slug,
        publishedAt,
      } | order(publishedAt desc)[${pageIndex}...${pageIndex + pageSize}]
      `),
		locals.client.fetch(`count(*[_type == "post"])`)
	])) as [App.Post[], number];

	const posts = locals.isPreviewMode
		? all_posts.filter((p) => !all_posts.some((p2) => p2._id == `drafts.${p._id}`))
		: all_posts;

	return {
		pageCount: Math.ceil(itemCount / pageSize),
		pageIndex,
		posts
	};
}) satisfies PageServerLoad;
