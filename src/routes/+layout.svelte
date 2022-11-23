<script lang="ts">
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import PreviewBar from '$lib/components/PreviewBar.svelte';

	import type { LayoutData } from './$types';
	export let data: LayoutData;
</script>

<Header />

{#if data.isPreviewMode}
	<PreviewBar />
{/if}

<main>
	<slot />
</main>

<Footer />

<style>
	main {
		flex: 1 0;
		margin: auto;
		max-width: var(--container-large);
		padding: 1rem;
		width: 100%;
	}
</style>
