<script context="module" lang="ts">
	import { onDestroy } from 'svelte';
	import { writable } from 'svelte/store';
	const crumbs = writable<App.Crumb[]>([]);

	export function setCrumb(crumb: App.Crumb, level: number) {
		crumbs.update((c) => ((c[level] = crumb), c));
		onDestroy(() => crumbs.update((c) => c.filter((c2) => c2.href !== crumb.href)));
	}
</script>

<script lang="ts">
	export let initial: Record<number, App.Crumb>;
	Object.entries(initial).forEach(([level, crumb]) => {
		setCrumb(crumb, parseInt(level));
	});
</script>

<ul>
	{#if $crumbs.length > 1}
		{#each $crumbs as { href, title }, i}
			<li>
				{#if i !== $crumbs.length - 1}
					<a {href}>{title}</a>
				{:else}
					<span>{title}</span>
				{/if}
			</li>
		{/each}
	{/if}
</ul>

<style>
	ul {
		--gap: 0.5rem;
		block-size: 2.75rem;
		display: flex;
		gap: var(--gap);
		inline-size: 100%;
		list-style-type: none;
		margin-inline: auto;
		max-inline-size: var(--container-large);
		padding: 1rem 1rem 0;
	}

	li > :is(a, span) {
		--es: 0rem;
		--me: 0rem;
		background-color: var(--primary--300);
		border-block-end: 2px solid var(--primary--200);
		clip-path: polygon(
			var(--es) 0,
			calc(100% - 1rem) 0,
			calc(100% - var(--me)) 50%,
			calc(100% - 1rem) 100%,
			var(--es) 100%,
			1rem 50%
		);
		font-weight: 400;
		margin-inline-start: -1rem;
		padding: 0.25rem 1.75rem;
	}
	li:first-child > a {
		--es: 1rem;
	}
	li:last-child > span {
		--me: 1rem;
		background-color: var(--secondary--300);
		border-color: var(--secondary--300);
	}
	li > a:where(:focus-within, :hover) {
		background-color: var(--primary--200);
	}
</style>
