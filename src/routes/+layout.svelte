<script lang="ts">
	import '../app.css';
	import type { Snippet } from 'svelte';
	import favicon from '$lib/assets/favicon.svg';
	import BrutHeader from '$lib/components/BrutHeader.svelte';
	import BrutFooter from '$lib/components/BrutFooter.svelte';

	type Props = { children: Snippet };
	let { children }: Props = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="min-h-screen flex flex-col">
	<BrutHeader />
	<main class="flex-1">
		{@render children()}
	</main>
	<BrutFooter />
</div>
