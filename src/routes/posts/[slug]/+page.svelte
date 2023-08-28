<script lang="ts">
	import { page } from '$app/stores';
	import { setCrumb } from '$lib/components/BreadCrumbs.svelte';
	import imageUrl from '$lib/sanity/imageUrl';
	import PortableText from '$lib/sanity/PortableText.svelte';
	import dateConverter from '$lib/utils/dateConverter';
	import type { PageData } from './$types';

	export let data: PageData;
	$: post = data.post;
	$: author = post.author;

	$: setCrumb({ href: $page.url.href, title: post.title }, 2);
</script>

<svelte:head>
	<title>{post.title}</title>
</svelte:head>

<article>
	<h1>{post.title}</h1>
	{#if post.mainImage}
		<img class="hero" src={imageUrl(post.mainImage).url()} alt="" />
	{/if}
	<a href="/authors/{author.slug.current}" class="author">
		<img src={imageUrl(author.image).height(48).width(48).url()} alt="" />
		<span>{author.name}</span>
	</a>
	<p class="published">Published {dateConverter(post.publishedAt)}</p>
	<div class="content">
		<PortableText value={post.body} />
	</div>
</article>

<style>
	article {
		align-items: flex-start;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		grid-template-columns: 1fr max-content;
	}
	h1 {
		border-block-end: 2px solid var(--primary--300);
		font-size: 2rem;
		font-weight: 600;
		text-align: center;
		inline-size: 100%;
	}
	h1:has(+ .hero) {
		border-block-end: 0;
	}
	.hero {
		inline-size: 100%;
	}
	.author {
		align-items: center;
		align-self: flex-end;
		border: 2px solid transparent;
		border-radius: 1rem;
		display: flex;
		font-weight: 600;
		gap: 1rem;
		inline-size: max-content;
		padding: 0.5rem;
	}
	.author > img {
		border-radius: 100%;
	}
	.author:where(:active, :focus, :hover) {
		background-color: var(--primary--300);
		border-color: var(--primary--100);
	}
	.published {
		font-size: 0.875rem;
	}
	.content {
		display: contents;
	}
	.content > :global(img) {
		align-self: center;
		margin-block: 1rem;
		max-block-size: 50vb;
	}
</style>
