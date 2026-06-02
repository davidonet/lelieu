<script lang="ts">
	import BrutBadge from './BrutBadge.svelte';
	import { colorBg, colorText, type BrutColor } from '$lib/utils';

	type Props = {
		eyebrow: string;
		title: string;
		intro?: string;
		color: BrutColor;
		comingSoon?: boolean;
	};

	let { eyebrow, title, intro, color, comingSoon = false }: Props = $props();
</script>

<section class="border-b-[3px] border-brut-ink {colorBg[color]} {colorText[color]}">
	<div class="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-24">
		<div class="flex flex-wrap items-center gap-2 mb-6">
			<BrutBadge color="paper" rotate>{eyebrow}</BrutBadge>
			{#if comingSoon}
				<BrutBadge color="petrol" rotate>Bientôt</BrutBadge>
			{/if}
		</div>
		<h1 class="font-display text-5xl sm:text-7xl leading-[0.9] uppercase mb-6">
			{title}
		</h1>
		{#if intro}
			<p class="max-w-[60ch] text-lg sm:text-xl leading-relaxed">
				{intro}
			</p>
		{/if}
	</div>
</section>
