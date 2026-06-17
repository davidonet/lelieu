<script lang="ts">
	import Body, { metadata } from '$content/massage.md';
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
		partner: { name: string; url: string };
	};
	const meta = metadata as Meta;
	const seo = spaceSeo.massage;

	const jsonLd = {
		'@context': 'https://schema.org',
		'@type': 'HealthAndBeautyBusiness',
		name: meta.title,
		description: seo.description,
		url: canonical(seo.path),
		provider: { '@type': 'Organization', name: meta.partner.name, url: meta.partner.url }
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
			<BrutButton href={meta.partner.url} variant="accent">
				Prendre rendez-vous · {meta.partner.name}
			</BrutButton>
			<BrutButton href="/atelier" variant="ghost">Voir l'atelier d'art</BrutButton>
		</div>
	</article>

	<aside class="space-y-6">
		<PlaceholderImage label="Vue du parloir" color="teal" ratio="wide" />

		<BrutCard color="paper">
			<p class="font-mono text-[11px] uppercase tracking-widest mb-2 text-brut-petrol">
				Praticien·ne invité·e
			</p>
			<h3 class="font-display text-2xl uppercase mb-2">{meta.partner.name}</h3>
			<p class="text-sm leading-relaxed mb-4">
				Le parloir est tenu par Espace Agapé — une pratique du massage sensible, lente, accessible.
			</p>
			<a
				href={meta.partner.url}
				target="_blank"
				rel="noopener noreferrer"
				class="inline-block brut-border brut-shadow-sm brut-press bg-brut-teal text-brut-paper px-4 py-2 font-mono text-xs uppercase tracking-widest"
			>
				espace-agape.com ↗
			</a>
		</BrutCard>

		<BrutCard color="paper">
			<h3 class="font-display text-xl uppercase mb-4">Sur place</h3>
			<ul class="space-y-2">
				{#each meta.features as feature (feature)}
					<li class="flex gap-2 items-start">
						<span class="font-mono text-brut-teal">▣</span>
						<span class="text-sm leading-snug">{feature}</span>
					</li>
				{/each}
			</ul>
		</BrutCard>

		<div class="flex flex-wrap gap-2">
			<BrutBadge color="teal" rotate>Sur rendez-vous</BrutBadge>
			<BrutBadge color="paper">Accessibilité</BrutBadge>
			<BrutBadge color="petrol">Tarif libre possible</BrutBadge>
		</div>
	</aside>
</section>
