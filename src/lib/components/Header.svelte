<script lang="ts">
	import { page } from '$app/stores';
</script>

<header>
	<a class="logo" href="/">
		<img src="/sanity.svg" alt="" />
		Demo
	</a>
	<span>SvelteKit Sanity Demo</span>
	<nav>
		<ul>
			<li><a href="/" aria-current={$page.route.id == '/' ? 'page' : 'false'}>Home</a></li>
			<li>
				<a href="/posts" aria-current={$page.route.id?.startsWith('/posts') ? 'page' : 'false'}
					>Posts</a
				>
			</li>
		</ul>
	</nav>
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
		max-inline-size: var(--container-large);
		padding: 0.5rem;
		inline-size: 100%;
	}
	.logo {
		font-size: 0rem;
	}
	.logo > img {
		block-size: 100%;
	}
	span {
		font-size: 2rem;
		font-weight: 600;
		margin-inline: auto;
	}
	nav {
		align-self: center;
	}
	ul {
		align-items: center;
		display: flex;
		font-weight: 600;
		gap: 1rem;
		list-style-type: none;
	}
	li > a {
		border-radius: 4px;
		padding: 0.5rem 1rem;
	}
	li > a:where(:hover, :focus-within) {
		background-color: var(--primary--300);
		color: black;
	}
	li > a[aria-current~='page'] {
		background-color: var(--secondary--300);
		color: black;
	}
</style>
