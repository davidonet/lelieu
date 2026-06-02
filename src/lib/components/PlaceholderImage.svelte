<script lang="ts">
	import { cn, colorBg, colorText, type BrutColor } from '$lib/utils';

	type Props = {
		label: string;
		color?: BrutColor;
		ratio?: 'square' | 'wide' | 'tall';
		class?: string;
	};

	let { label, color = 'teal', ratio = 'wide', class: klass = '' }: Props = $props();

	const ratios = {
		square: 'aspect-square',
		wide: 'aspect-[16/10]',
		tall: 'aspect-[3/4]'
	};
</script>

<div
	class={cn(
		'brut-border brut-shadow relative overflow-hidden',
		ratios[ratio],
		colorBg[color],
		colorText[color],
		klass
	)}
	role="img"
	aria-label={label}
>
	<div
		class="absolute inset-0 opacity-30"
		style="background-image: repeating-linear-gradient(45deg, var(--color-brut-ink) 0 3px, transparent 3px 22px);"
	></div>
	<div class="absolute inset-0 flex items-center justify-center p-6">
		<span
			class="font-mono text-[11px] uppercase tracking-widest brut-border bg-brut-paper text-brut-ink px-3 py-1"
		>
			Photo · {label}
		</span>
	</div>
</div>
