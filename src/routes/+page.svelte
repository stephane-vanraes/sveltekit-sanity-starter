<script lang="ts">
	import Pagination from '$lib/components/Pagination.svelte';
	import dateConverter from '$lib/utils/dateConverter';
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<h1>Recent Posts</h1>
<div>
	<Pagination data={data.posts} let:row={post}>
		<a href="/posts/{post.slug.current}">
			<span>{post.title}</span>
			<time>{dateConverter(post.publishedAt)}</time>
		</a>
	</Pagination>
</div>

<style>
	div {
		margin: 1rem auto;
	}
	a {
		align-items: flex-end;
		background-color: var(--secondary--300);
		display: flex;
		margin-block-end: 0.5rem;
		padding: 0.5rem 1rem;
	}
	time {
		font-size: 0.75em;
		margin-inline-start: auto;
	}

	a:where(:focus, :hover) {
		background-color: var(--secondary--200);
		box-shadow: 4px 4px 4px #0007;
	}
</style>
