<script lang="ts">
	import SpacePanel from '$lib/components/SpacePanel.svelte';
	import BrutBadge from '$lib/components/BrutBadge.svelte';
	import BrutButton from '$lib/components/BrutButton.svelte';
	import BrutCard from '$lib/components/BrutCard.svelte';
	import NewsCarousel, { type NewsItem } from '$lib/components/NewsCarousel.svelte';
	import Home, { metadata } from '$content/home.md';
	import { metadata as newsMeta } from '$content/news.md';
	import { spaces } from '$lib/utils';
	import logotype from '$lib/assets/logotype.svg';

	type NewsMeta = { title: string; intro: string; items: NewsItem[] };
	const news = newsMeta as NewsMeta;

	const title = (metadata as { title?: string })?.title ?? 'LE LIEU';
	const tagline = (metadata as { tagline?: string })?.tagline ?? '';
</script>

<svelte:head>
	<title>LE LIEU — Lieu Imaginaire Expérimental Utopique</title>
</svelte:head>

<!-- HERO -->
<section class="relative border-b-[3px] border-brut-ink overflow-hidden">
	<div class="absolute inset-0 -z-10 bg-brut-paper"></div>

	<div class="mx-auto max-w-6xl px-4 sm:px-6 pt-14 pb-20 sm:pt-20 sm:pb-28">
		<div class="flex flex-wrap items-center gap-2 mb-8">
			<BrutBadge color="yellow" rotate>Lieu collaboratif</BrutBadge>
			<BrutBadge color="orange" rotate>Plastique &amp; artisanal</BrutBadge>
			<BrutBadge color="red" rotate>Ouvert</BrutBadge>
		</div>

		<h1 class="sr-only">{title}</h1>
		<img
			src={logotype}
			alt="LE LIEU"
			class="block w-full max-w-[640px] h-auto"
			width="544"
			height="414"
		/>

		<p class="mt-8 font-mono uppercase tracking-widest text-xs sm:text-sm text-brut-petrol">
			{tagline}
		</p>

		<div class="mt-10 grid gap-8 md:grid-cols-[1.4fr_1fr] items-start">
			<div class="brut-prose max-w-[55ch] text-lg leading-relaxed">
				<Home />
			</div>

			<BrutCard color="petrol" class="md:translate-y-6">
				<h2 class="font-display text-2xl uppercase mb-3">Six espaces, un même toit</h2>
				<ul class="font-mono text-sm space-y-2">
					<li>01 — Une micro-galerie</li>
					<li>02 — Un atelier d'art</li>
					<li>03 — Un fablab</li>
					<li>04 — Un futur studio son</li>
					<li>05 — Un parloir massage</li>
					<li>06 — Une cuisine partagée</li>
				</ul>
				<div class="mt-6 flex flex-wrap gap-3">
					<BrutButton href="#espaces" variant="accent">Voir les espaces</BrutButton>
					<BrutButton href="#actualites" variant="ghost">Actualités</BrutButton>
				</div>
			</BrutCard>
		</div>
	</div>
</section>

<!-- NEWS & EVENTS -->
<section id="actualites" class="bg-brut-paper border-t-[3px] border-brut-ink">
	<div class="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-20">
		<div class="flex items-end justify-between flex-wrap gap-4 mb-10">
			<div>
				<p class="font-mono text-xs uppercase tracking-widest text-brut-petrol mb-2">
					Actualités & événements
				</p>
				<h2 class="font-display text-4xl sm:text-5xl uppercase">{news.title}</h2>
			</div>
			<p class="font-mono text-xs uppercase tracking-widest text-brut-petrol max-w-[40ch]">
				{news.intro}
			</p>
		</div>
		<NewsCarousel items={news.items} />
	</div>
</section>

<!-- SPACES GRID -->
<section id="espaces" class="bg-brut-paper border-t-[3px] border-brut-ink">
	<div class="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-20">
		<div class="flex items-end justify-between flex-wrap gap-4 mb-10">
			<h2 class="font-display text-4xl sm:text-5xl uppercase">Les espaces</h2>
			<p class="font-mono text-xs uppercase tracking-widest text-brut-petrol max-w-[40ch]">
				Six pratiques côte à côte — chacune avec sa couleur, ses outils, son rythme.
			</p>
		</div>

		<div class="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-6">
			{#each spaces as space, i (space.slug)}
				<SpacePanel
					href={`/${space.slug}`}
					title={space.name}
					tagline={space.tagline}
					description={space.description}
					color={space.color}
					comingSoon={space.comingSoon}
					number={`0${i + 1}`}
					class="lg:col-span-2"
				/>
			{/each}
		</div>
	</div>
</section>

<!-- MANIFESTO -->
<section class="bg-brut-paper">
	<div class="mx-auto max-w-6xl px-4 sm:px-6 pb-20">
		<div class="grid gap-6 md:grid-cols-3">
			<BrutCard color="yellow">
				<p class="font-mono text-[11px] uppercase tracking-widest mb-3">Rêver</p>
				<h3 class="font-display text-2xl uppercase leading-tight mb-3">
					Un lieu se rêve avant d'être habité.
				</h3>
				<p class="text-sm leading-relaxed">
					On commence par dire ce qu'on aimerait voir arriver. Les murs viennent après.
				</p>
			</BrutCard>
			<BrutCard color="orange">
				<p class="font-mono text-[11px] uppercase tracking-widest mb-3">Instituer</p>
				<h3 class="font-display text-2xl uppercase leading-tight mb-3">
					Faire ensemble, c'est créer du sens commun.
				</h3>
				<p class="text-sm leading-relaxed">
					Chaque pratique partagée fabrique un peu de la culture du lieu — et de celle qui en sort.
				</p>
			</BrutCard>
			<BrutCard color="red">
				<p class="font-mono text-[11px] uppercase tracking-widest mb-3">Apparaître</p>
				<h3 class="font-display text-2xl uppercase leading-tight mb-3">
					On se révèle dans ce qu'on fait avec les autres.
				</h3>
				<p class="text-sm leading-relaxed">
					Un atelier, une exposition, un concert : autant d'occasions d'être pleinement là.
				</p>
			</BrutCard>
		</div>
	</div>
</section>
