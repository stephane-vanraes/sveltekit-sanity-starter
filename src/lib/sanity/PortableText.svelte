<script lang="ts">
	import { PortableText } from '@portabletext/svelte';
	import type { InputValue } from '@portabletext/svelte/ptTypes';
	import Image from './components/Image.svelte';
	export let value: InputValue;
</script>

<PortableText
	{value}
	components={{
		types: {
			image: Image
		}
	}}
/>
