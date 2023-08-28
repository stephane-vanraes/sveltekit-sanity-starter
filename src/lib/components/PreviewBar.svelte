<script lang="ts">
	import { beforeNavigate } from '$app/navigation';
	import { page } from '$app/stores';

	const preview_token = $page.url.searchParams.get('preview_token') as string;
	beforeNavigate(({ to, cancel }) => {
		if (to) {
			if (to.url.searchParams.has('preview_reload')) {
				cancel();
				$page.url.searchParams.delete('preview_token');
				document.location.search = $page.url.search;
			} else {
				to.url.searchParams.append('preview_token', preview_token);
			}
		}
	});
</script>

<div>
	<span>#Previewmode-active</span>
	<a href="?preview_reload=true">Reload</a>
</div>

<style>
	div {
		background-color: var(--warning);
		color: white;
		padding: 0.5rem;
		text-align: center;
	}
	span {
		font-weight: 600;
	}
	a {
		padding: 0.25rem 1rem;
		text-decoration: underline;
	}
	a:is(:active, :focus, :hover) {
		background-color: white;
		color: var(--warning);
	}
</style>
