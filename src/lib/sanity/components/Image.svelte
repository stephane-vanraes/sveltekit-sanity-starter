<script lang="ts">
	import type { CustomBlockComponentProps } from '@portabletext/svelte';
	import imageUrl from '../imageUrl';
	export let portableText: CustomBlockComponentProps;
</script>

<img src={imageUrl(portableText.value).url()} alt="" />
