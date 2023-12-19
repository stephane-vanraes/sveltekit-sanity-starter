import type { PageServerLoad } from './$types';

export const load = (async ({ locals, params, url }) => {
	const posts: App.Post[] = await locals.client.fetch(`
  *[_type == "post" && slug.current == "${params.slug}"] {
      _id,
      author->{
        bio,
        image,
        name,
        slug
      },
      title,
      publishedAt,
      body,
      mainImage,
      
    }
  `);

	const post = locals.isPreviewMode ? posts[posts.length - 1] : posts[0];
	locals.crumbs[2] = { href: url.href, title: post.title };
	return {
		post
	};
}) satisfies PageServerLoad;
