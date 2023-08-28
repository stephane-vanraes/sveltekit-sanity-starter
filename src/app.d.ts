// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types

declare namespace App {
	interface Slug {
		current: string;
	}

	interface Crumb {
		href: string;
		title: string;
	}

	interface Author {
		bio: import('@portabletext/svelte').InputValue;
		image: import('@sanity/client').SanityAssetDocument;
		name: string;
		slug: Slug;
	}

	interface Post {
		author: Author;
		body: import('@portabletext/svelte').InputValue;
		mainImage: import('@sanity/client').SanityAssetDocument;
		publishedAt: string;
		slug: slug;
		title: string;
	}

	interface Locals {
		client: import('@sanity/client').SanityClient;
		crumbs: Record<number, Crumb>;
		isPreviewMode: boolean;
	}

	// interface PageData {}
	// interface Error {}
	// interface Platform {}
}
