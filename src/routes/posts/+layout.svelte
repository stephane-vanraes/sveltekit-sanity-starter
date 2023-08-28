<script lang="ts">
	import { setCrumb } from '$lib/components/BreadCrumbs.svelte';

	setCrumb({ href: '/posts', title: 'Posts' }, 1);
</script>

<slot />
