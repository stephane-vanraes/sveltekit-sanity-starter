<header>
	<a href="/">
		<img src="/sanity.svg" alt="" />
		#Title
	</a>
	<span>#Page title</span>
</header>

<style>
	header {
		background-color: var(--primary--100);
		box-shadow: 0 0 100vw 100vw var(--primary--100);
		clip-path: inset(0 -100vw);
		color: white;
		display: flex;
		justify-content: space-between;
		margin: auto;
		max-width: var(--container-large);
		padding: 0.5rem;
		width: 100%;
	}
	a {
		font-size: 0rem;
	}
	a > img {
		height: 100%;
	}
	span {
		font-size: 2rem;
		font-weight: 600;
		margin-inline: auto;
	}
</style>
