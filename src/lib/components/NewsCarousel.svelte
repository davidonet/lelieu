<script lang="ts">
	import { cn, colorBg, colorText, type BrutColor } from '$lib/utils';

	export type NewsItem = {
		title: string;
		kind: string;
		color: BrutColor;
		start: string;
		end?: string;
		blurb: string;
		href: string;
		cta?: string;
	};

	type Props = {
		items: NewsItem[];
		class?: string;
	};

	let { items, class: klass = '' }: Props = $props();

	let index = $state(0);
	const count = $derived(items.length);

	const current = $derived(items[index]);

	function go(delta: number) {
		index = (index + delta + count) % count;
	}

	function jump(i: number) {
		index = i;
	}

	function onKey(e: KeyboardEvent) {
		if (e.key === 'ArrowRight') {
			go(1);
		} else if (e.key === 'ArrowLeft') {
			go(-1);
		}
	}

	const fmt = new Intl.DateTimeFormat('fr-FR', {
		day: 'numeric',
		month: 'long',
		year: 'numeric'
	});

	function formatDate(iso: string): string {
		const d = new Date(iso + 'T00:00:00');
		return fmt.format(d);
	}

	function formatRange(start: string, end?: string): string {
		if (!end || end === start) return formatDate(start);
		const s = new Date(start + 'T00:00:00');
		const e = new Date(end + 'T00:00:00');
		if (s.getFullYear() === e.getFullYear() && s.getMonth() === e.getMonth()) {
			const dayMonth = new Intl.DateTimeFormat('fr-FR', { day: 'numeric' }).format(s);
			return `${dayMonth}–${fmt.format(e)}`;
		}
		return `${formatDate(start)} → ${formatDate(end)}`;
	}
</script>

<section
	class={cn('relative', klass)}
	role="region"
	aria-roledescription="carousel"
	aria-label="Actualités et événements"
	onkeydown={onKey}
	tabindex="-1"
>
	<div class="grid gap-6 md:grid-cols-[1fr_auto] md:items-stretch">
		<!-- Card -->
		<article
			class={cn(
				'brut-border brut-shadow p-6 sm:p-10 min-h-[260px] flex flex-col justify-between gap-6',
				colorBg[current.color],
				colorText[current.color]
			)}
			aria-roledescription="slide"
			aria-label={`Événement ${index + 1} sur ${count}`}
		>
			<div class="flex flex-wrap items-center gap-2">
				<span class="brut-tag bg-brut-paper text-brut-ink">{current.kind}</span>
				<span class="brut-tag bg-brut-ink text-brut-paper">
					{formatRange(current.start, current.end)}
				</span>
			</div>

			<div>
				<h3 class="font-display text-3xl sm:text-4xl leading-[0.95] uppercase mb-3">
					{current.title}
				</h3>
				<p class="max-w-[60ch] text-base sm:text-lg leading-relaxed">
					{current.blurb}
				</p>
			</div>

			<div class="flex flex-wrap items-center gap-3">
				<a
					href={current.href}
					class="inline-block brut-border bg-brut-paper text-brut-ink brut-shadow-sm brut-press px-5 py-2.5 font-mono uppercase tracking-widest text-xs"
				>
					{current.cta ?? 'En savoir plus'} →
				</a>
				<span class="font-mono uppercase text-[11px] tracking-widest opacity-90">
					{String(index + 1).padStart(2, '0')} / {String(count).padStart(2, '0')}
				</span>
			</div>
		</article>

		<!-- Controls -->
		<div class="flex md:flex-col gap-3 md:justify-between">
			<button
				type="button"
				class="brut-border bg-brut-paper brut-shadow-sm brut-press px-4 py-3 font-mono text-xs uppercase tracking-widest"
				onclick={() => go(-1)}
				aria-label="Événement précédent"
			>
				← Préc.
			</button>
			<button
				type="button"
				class="brut-border bg-brut-ink text-brut-paper brut-shadow-sm brut-press px-4 py-3 font-mono text-xs uppercase tracking-widest"
				onclick={() => go(1)}
				aria-label="Événement suivant"
			>
				Suiv. →
			</button>
		</div>
	</div>

	<!-- Dots -->
	<div
		class="mt-6 flex flex-wrap gap-2"
		role="tablist"
		aria-label="Aller à un événement"
	>
		{#each items as item, i (item.title)}
			<button
				type="button"
				role="tab"
				aria-selected={i === index}
				aria-label={`Aller à : ${item.title}`}
				onclick={() => jump(i)}
				class={cn(
					'brut-border w-8 h-8 font-mono text-[11px] uppercase tracking-widest',
					i === index ? 'bg-brut-ink text-brut-paper' : 'bg-brut-paper text-brut-ink brut-press'
				)}
			>
				{String(i + 1).padStart(2, '0')}
			</button>
		{/each}
	</div>
</section>
