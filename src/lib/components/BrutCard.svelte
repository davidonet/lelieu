<script lang="ts">
	import type { Snippet } from 'svelte';
	import { cn, colorBg, colorText, type BrutColor } from '$lib/utils';

	type Props = {
		color?: BrutColor | 'paper';
		class?: string;
		children: Snippet;
	};

	let { color = 'paper', class: klass = '', children }: Props = $props();

	const bg = color === 'paper' ? 'bg-brut-paper text-brut-ink' : `${colorBg[color]} ${colorText[color]}`;
</script>

<div class={cn('brut-border brut-shadow p-6', bg, klass)}>
	{@render children()}
</div>
