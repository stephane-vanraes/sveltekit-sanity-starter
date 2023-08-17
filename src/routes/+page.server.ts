export async function load({ locals }) {
	const posts: App.Post[] = await locals.client.fetch(`
    *[_type == "post"] {
        _id,  
        title,
        "slug": slug.current,
        publishedAt,
      } | order(select(defined(publishedAt) => 1,  0) asc, publishedAt desc)
    `);

	return {
		posts
	};
}
