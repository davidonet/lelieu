<script lang="ts">
	import Body, { metadata } from '$content/kitchen.md';
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
				Demander une clé d'accès
			</BrutButton>
			<BrutButton href="/atelier" variant="ghost">Voir l'atelier d'art</BrutButton>
		</div>
	</article>

	<aside class="space-y-6">
		<PlaceholderImage label="Plan de travail" color="green" ratio="wide" />

		<BrutCard color="paper">
			<h3 class="font-display text-xl uppercase mb-4">Sur place</h3>
			<ul class="space-y-2">
				{#each meta.features as feature (feature)}
					<li class="flex gap-2 items-start">
						<span class="font-mono text-brut-green">▣</span>
						<span class="text-sm leading-snug">{feature}</span>
					</li>
				{/each}
			</ul>
		</BrutCard>

		<div class="flex flex-wrap gap-2">
			<BrutBadge color="green" rotate>Usager·ère·s du LIEU</BrutBadge>
			<BrutBadge color="paper">Repas partagés</BrutBadge>
			<BrutBadge color="petrol">Compost</BrutBadge>
		</div>
	</aside>
</section>
