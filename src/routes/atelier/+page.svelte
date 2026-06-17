<script lang="ts">
	import Body, { metadata } from '$content/atelier.md';
	import SpaceHero from '$lib/components/SpaceHero.svelte';
	import BrutCard from '$lib/components/BrutCard.svelte';
	import BrutBadge from '$lib/components/BrutBadge.svelte';
	import BrutButton from '$lib/components/BrutButton.svelte';
	import PlaceholderImage from '$lib/components/PlaceholderImage.svelte';
	import Seo from '$lib/components/Seo.svelte';
	import { spaceSeo, canonical } from '$lib/seo';
	import type { BrutColor } from '$lib/utils';

	type Meta = {
		title: string;
		color: BrutColor;
		eyebrow: string;
		intro: string;
		features: string[];
	};
	const meta = metadata as Meta;
	const seo = spaceSeo.atelier;

	const jsonLd = {
		'@context': 'https://schema.org',
		'@type': 'ArtGallery',
		name: meta.title,
		description: seo.description,
		url: canonical(seo.path),
		makesOffer: [
			'Dessin', 'Peinture', 'Gravure', 'Céramique', 'Textile', 'Reliure'
		].map((n) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name: n } }))
	};
</script>

<Seo
	title={seo.title}
	description={seo.description}
	path={seo.path}
	keywords={seo.keywords}
	{jsonLd}
/>

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
				Réserver un créneau
			</BrutButton>
			<BrutButton href="/galerie" variant="ghost">Voir la galerie</BrutButton>
		</div>
	</article>

	<aside class="space-y-6">
		<div class="grid gap-4">
			<PlaceholderImage label="Table de travail" color="orange" ratio="wide" />
			<PlaceholderImage label="Coin céramique" color="teal" ratio="square" />
		</div>

		<BrutCard color="paper">
			<h3 class="font-display text-xl uppercase mb-4">Sur place</h3>
			<ul class="space-y-2">
				{#each meta.features as feature (feature)}
					<li class="flex gap-2 items-start">
						<span class="font-mono text-brut-orange">▣</span>
						<span class="text-sm leading-snug">{feature}</span>
					</li>
				{/each}
			</ul>
		</BrutCard>
	</aside>
</section>
