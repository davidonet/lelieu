<script lang="ts">
	import type { Snippet } from 'svelte';
	import { cn } from '$lib/utils';

	type Props = {
		href?: string;
		variant?: 'primary' | 'ghost' | 'accent';
		class?: string;
		children: Snippet;
		onclick?: (e: MouseEvent) => void;
	};

	let { href, variant = 'primary', class: klass = '', children, onclick }: Props = $props();

	const base =
		'inline-block brut-border brut-shadow brut-press font-mono uppercase tracking-wider text-sm px-5 py-3 select-none text-center';
	const variants = {
		primary: 'bg-brut-ink text-brut-paper',
		ghost: 'bg-brut-paper text-brut-ink',
		accent: 'bg-brut-yellow text-brut-ink'
	};
</script>

{#if href}
	<a {href} class={cn(base, variants[variant], klass)}>
		{@render children()}
	</a>
{:else}
	<button type="button" class={cn(base, variants[variant], klass)} {onclick}>
		{@render children()}
	</button>
{/if}
