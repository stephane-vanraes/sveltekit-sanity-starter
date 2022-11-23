<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<ul>
	{#each data.posts as post}
		<li>
			<a href="/posts/{post.slug}">{post.title}</a>
		</li>
	{/each}
</ul>
