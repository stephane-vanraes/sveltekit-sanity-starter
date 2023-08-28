<script lang="ts">
	type T = $$Generic;

	export let data: T[] = [];
	export let pageCount = 1;
	export let pageIndex = 0;
</script>

<div>
	<ul class="items">
		{#each data as row}
			<li><slot {row} /></li>
		{/each}
	</ul>

	{#if pageCount != 1}
		<ul class="pages">
			<li>
				{#if pageIndex != 0}
					<a href="?pageIndex={pageIndex - 1}">Previous</a>
				{:else}
					<span>Previous</span>
				{/if}
			</li>
			{#each { length: pageCount } as _, index}
				<li>
					<a href="?pageIndex={index}" class:active={pageIndex == index}>{index + 1}</a>
				</li>
			{/each}
			<li>
				{#if pageIndex != pageCount - 1}
					<a href="?pageIndex={pageIndex + 1}">Next</a>
				{:else}
					<span>Next</span>
				{/if}
			</li>
		</ul>
	{/if}
</div>

<style>
	ul {
		list-style: none;
	}
	ul + ul {
		margin-block-start: 1rem;
	}

	.pages {
		display: flex;
		gap: 0.5rem;
		justify-content: center;
	}
	.pages :where(a, span) {
		display: block;
		padding: 0.25rem 0.5rem;
	}
	.pages a {
		border: 2px solid var(--primary--300);
	}
	.pages a:where(:focus-within, :hover) {
		background-color: var(--primary--300);
	}
	.pages span {
		background-color: lightgrey;
		border: 2px solid lightgrey;
	}
	.pages .active {
		background-color: var(--primary--200);
		border-color: var(--primary--200);
	}
</style>
