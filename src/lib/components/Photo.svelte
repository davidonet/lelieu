<script lang="ts">
	import { cn } from '$lib/utils';

	type Props = {
		src: string;
		alt: string;
		ratio?: 'square' | 'wide' | 'tall';
		class?: string;
	};

	let { src, alt, ratio = 'wide', class: klass = '' }: Props = $props();

	const ratios = {
		square: 'aspect-square',
		wide: 'aspect-[16/10]',
		tall: 'aspect-[3/4]'
	};
</script>

<div class={cn('brut-border brut-shadow relative overflow-hidden', ratios[ratio], klass)}>
	<img {src} {alt} loading="lazy" class="absolute inset-0 h-full w-full object-cover" />
</div>
