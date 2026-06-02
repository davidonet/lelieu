<script lang="ts">
	import { cn, colorBg, colorText, type BrutColor } from '$lib/utils';

	type Props = {
		href: string;
		title: string;
		tagline: string;
		color: BrutColor;
		number: string;
		comingSoon?: boolean;
		class?: string;
	};

	let {
		href,
		title,
		tagline,
		color,
		number,
		comingSoon = false,
		class: klass = ''
	}: Props = $props();
</script>

<a
	{href}
	class={cn(
		'group relative block brut-border brut-shadow brut-press p-6 sm:p-8 min-h-[260px] sm:min-h-[320px] overflow-hidden',
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

		<div>
			<h3 class="font-display text-3xl sm:text-4xl leading-[0.95] mb-3">
				{title}
			</h3>
			<p class="font-mono text-sm sm:text-base max-w-[28ch]">
				{tagline}
			</p>
		</div>

		<div class="flex items-center justify-between">
			<span class="font-mono text-xs uppercase tracking-widest">Découvrir →</span>
		</div>
	</div>
</a>
