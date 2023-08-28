<script lang="ts">
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
	import PreviewBar from '$lib/components/PreviewBar.svelte';
	import '../app.css';

	import BreadCrumbs from '$lib/components/BreadCrumbs.svelte';
	import type { LayoutData } from './$types';

	export let data: LayoutData;
</script>

<Header />

{#if data.isPreviewMode}
	<PreviewBar />
{/if}

<BreadCrumbs initial={data.crumbs} />

<main>
	<slot />
</main>

<Footer />

<style>
	main {
		flex: 1 0;
		margin: auto;
		max-inline-size: var(--container-large);
		padding: 1rem;
		inline-size: 100%;
	}
</style>
