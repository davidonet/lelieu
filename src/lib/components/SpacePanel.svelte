<script lang="ts">
	import { cn, colorBg, colorText, type BrutColor } from '$lib/utils';

	type Props = {
		href: string;
		title: string;
		tagline: string;
		description?: string;
		color: BrutColor;
		number: string;
		comingSoon?: boolean;
		class?: string;
	};

	let {
		href,
		title,
		tagline,
		description,
		color,
		number,
		comingSoon = false,
		class: klass = ''
	}: Props = $props();
</script>

<a
	{href}
	class={cn(
		'group relative block brut-border brut-shadow brut-press p-6 sm:p-8 min-h-[300px] sm:min-h-[360px] overflow-hidden',
		colorBg[color],
		colorText[color],
		klass
	)}
>
	<div class="flex h-full flex-col justify-between gap-6">
		<div class="flex items-start justify-between gap-4">
			<span class="font-mono text-xs uppercase tracking-widest">{number}</span>
			{#if comingSoon}
				<span class="brut-tag bg-brut-ink text-brut-paper -rotate-1">Bientôt</span>
			{/if}
		</div>

		<div class="flex flex-col gap-3">
			<h3 class="font-display text-2xl sm:text-3xl leading-[0.95] uppercase">
				{title}
			</h3>
			<p class="font-mono text-sm max-w-[28ch]">
				{tagline}
			</p>
			{#if description}
				<p class="text-sm sm:text-[15px] leading-relaxed max-w-[42ch]">
					{description}
				</p>
			{/if}
		</div>

		<div class="flex items-center justify-between">
			<span class="font-mono text-xs uppercase tracking-widest">Découvrir →</span>
		</div>
	</div>
</a>
