// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces

// and what to do when importing types
declare namespace App {
	interface Locals {
		client: import('@sanity/client').SanityClient;
		isPreviewMode: boolean;
	}

	// interface PageData {}
	// interface Error {}
	// interface Platform {}

	interface Post {
		title: string;
		slug: string;
	}
}
