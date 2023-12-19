import type { PageServerLoad } from './$types';

export const load = (async ({ locals, params, url }) => {
	const post: App.Post = (
		await locals.client.fetch(`
  *[_type == "post" && slug.current == "${params.slug}"] | order(_updatedAt desc) {    
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
  `)
	)[0];

	locals.crumbs[2] = { href: url.href, title: post.title };
	return {
		post
	};
}) satisfies PageServerLoad;
