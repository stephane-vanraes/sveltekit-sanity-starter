<div>
	<span>#Previewmode-active</span>
	<a href="/" on:click|preventDefault={() => window.location.reload()}>Reload</a>
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
