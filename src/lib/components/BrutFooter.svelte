<script lang="ts">
	const year = new Date().getFullYear();
</script>

<footer class="mt-24 bg-brut-petrol text-brut-paper border-t-[3px] border-brut-ink">
	<div class="mx-auto max-w-6xl px-4 sm:px-6 py-12 grid gap-10 md:grid-cols-3">
		<div>
			<h3 class="font-display text-2xl uppercase mb-3">LE LIEU</h3>
			<p class="font-mono text-xs uppercase tracking-widest text-brut-paper/80">
				Lieu Imaginaire<br />Expérimental Utopique
			</p>
			<p class="mt-4 text-sm leading-relaxed max-w-[36ch]">
				Un espace partagé pour fabriquer, exposer, répéter et imaginer — ensemble.
			</p>
		</div>

		<div>
			<h4 class="font-mono text-xs uppercase tracking-widest mb-3">Adresse & accès</h4>
			<address class="not-italic text-sm leading-relaxed">
				LE LIEU<br />
				Adresse à venir<br />
				Accessible à pied & à vélo
			</address>
		</div>

		<div>
			<h4 class="font-mono text-xs uppercase tracking-widest mb-3">Nous écrire</h4>
			<p class="text-sm leading-relaxed mb-3">
				Pour visiter, proposer une exposition, réserver un créneau ou simplement dire bonjour.
			</p>
			<a
				href="mailto:bonjour@le-lieu.example"
				class="inline-block brut-border bg-brut-yellow text-brut-ink px-4 py-2 font-mono text-xs uppercase tracking-widest brut-press"
			>
				bonjour@le-lieu.example
			</a>
		</div>
	</div>
	<div class="border-t-[3px] border-brut-ink">
		<div
			class="mx-auto max-w-6xl px-4 sm:px-6 py-4 flex flex-col sm:flex-row gap-2 sm:items-center sm:justify-between font-mono text-[11px] uppercase tracking-widest text-brut-paper/80"
		>
			<span>© {year} LE LIEU</span>
			<span>Site statique — fait main</span>
		</div>
	</div>
</footer>
