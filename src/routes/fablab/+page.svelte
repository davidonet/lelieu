<script lang="ts">
	import Body, { metadata } from '$content/fablab.md';
	import SpaceHero from '$lib/components/SpaceHero.svelte';
	import BrutCard from '$lib/components/BrutCard.svelte';
	import BrutBadge from '$lib/components/BrutBadge.svelte';
	import BrutButton from '$lib/components/BrutButton.svelte';
	import type { BrutColor } from '$lib/utils';

	type Equipment = { name: string; type: string; specs: string[] };
	type Meta = {
		title: string;
		color: BrutColor;
		eyebrow: string;
		intro: string;
		equipment: Equipment[];
	};
	const meta = metadata as Meta;
	const equipmentColors: BrutColor[] = ['red', 'teal', 'petrol'];
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
				Demander une initiation
			</BrutButton>
		</div>
	</article>

	<aside class="space-y-4">
		<BrutCard color="paper">
			<h3 class="font-display text-xl uppercase mb-3">Bon à savoir</h3>
			<ul class="space-y-2 text-sm leading-snug">
				<li>· Initiation rapide avant la première utilisation autonome.</li>
				<li>· Documentation partagée des projets sortis du fablab.</li>
				<li>· Présence d'un·e référent·e formé·e pendant les créneaux.</li>
				<li>· Consommables à apporter (ou achat groupé du lieu).</li>
			</ul>
		</BrutCard>
		<div class="flex flex-wrap gap-2">
			<BrutBadge color="red" rotate>Laser 10 W</BrutBadge>
			<BrutBadge color="paper" rotate>A1</BrutBadge>
			<BrutBadge color="petrol" rotate>Soudure</BrutBadge>
		</div>
	</aside>
</section>

<!-- EQUIPMENT -->
<section class="bg-brut-paper border-t-[3px] border-brut-ink">
	<div class="mx-auto max-w-6xl px-4 sm:px-6 py-16">
		<div class="flex items-end justify-between flex-wrap gap-4 mb-10">
			<h2 class="font-display text-4xl uppercase">Équipements</h2>
			<p class="font-mono text-xs uppercase tracking-widest text-brut-petrol max-w-[40ch]">
				Trois postes, trois logiques — du précis, du grand format, du bricolé.
			</p>
		</div>
		<div class="grid gap-6 md:grid-cols-3">
			{#each meta.equipment as item, i (item.name)}
				<BrutCard color={equipmentColors[i] ?? 'paper'}>
					<p class="font-mono text-[11px] uppercase tracking-widest mb-2 opacity-90">
						{item.type}
					</p>
					<h3 class="font-display text-2xl uppercase leading-tight mb-4">
						{item.name}
					</h3>
					<ul class="space-y-1">
						{#each item.specs as spec (spec)}
							<li class="font-mono text-[12px] leading-relaxed">
								— {spec}
							</li>
						{/each}
					</ul>
				</BrutCard>
			{/each}
		</div>
	</div>
</section>
