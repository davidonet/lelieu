<script lang="ts">
	import Body, { metadata } from '$content/galerie.md';
	import SpaceHero from '$lib/components/SpaceHero.svelte';
	import BrutCard from '$lib/components/BrutCard.svelte';
	import BrutBadge from '$lib/components/BrutBadge.svelte';
	import BrutButton from '$lib/components/BrutButton.svelte';
	import PlaceholderImage from '$lib/components/PlaceholderImage.svelte';
	import type { BrutColor } from '$lib/utils';

	type Meta = {
		title: string;
		color: BrutColor;
		eyebrow: string;
		intro: string;
		features: string[];
	};
	const meta = metadata as Meta;
</script>

<svelte:head>
	<title>{meta.title} — LE LIEU</title>
</svelte:head>

<SpaceHero
	eyebrow={meta.eyebrow}
	title={meta.title}
	intro={meta.intro}
	color={meta.color}
/>

<section class="mx-auto max-w-6xl px-4 sm:px-6 py-16 grid gap-10 md:grid-cols-[1.4fr_1fr]">
	<article class="brut-prose">
		<Body />
		<div class="mt-8 flex flex-wrap gap-3">
			<BrutButton href="mailto:bonjour@le-lieu.example" variant="accent">
				Proposer une exposition
			</BrutButton>
			<BrutButton href="/fablab" variant="ghost">Voir le fablab</BrutButton>
		</div>
	</article>

	<aside class="space-y-6">
		<PlaceholderImage label="Vue de la micro-galerie" color="yellow" ratio="wide" />

		<BrutCard color="paper">
			<h3 class="font-display text-xl uppercase mb-4">Ce qui est sur place</h3>
			<ul class="space-y-2">
				{#each meta.features as feature (feature)}
					<li class="flex gap-2 items-start">
						<span class="font-mono text-brut-red">▣</span>
						<span class="text-sm leading-snug">{feature}</span>
					</li>
				{/each}
			</ul>
		</BrutCard>

		<div class="flex flex-wrap gap-2">
			<BrutBadge color="yellow" rotate>Vernissages</BrutBadge>
			<BrutBadge color="paper">Cartels imprimés</BrutBadge>
			<BrutBadge color="petrol">Vitrine sur rue</BrutBadge>
		</div>
	</aside>
</section>
