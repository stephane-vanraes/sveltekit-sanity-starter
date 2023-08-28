<script lang="ts">
	import Pagination from '$lib/components/Pagination.svelte';
	import dateConverter from '$lib/utils/dateConverter';
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<h1>All the posts</h1>

<div>
	<span class="page-count">{data.pageCount} {data.pageCount == 1 ? 'Page' : 'Pages'}</span>
	<Pagination
		data={data.posts}
		pageCount={data.pageCount}
		pageIndex={data.pageIndex}
		let:row={post}
	>
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
	.page-count {
		display: block;
		font-weight: 600;
		margin-block: 0.25rem;
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
