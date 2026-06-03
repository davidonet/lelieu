<script lang="ts">
  import { page } from "$app/state"
  import logotype from "$lib/assets/logotype.svg"
  import { cn } from "$lib/utils"

  const nav = [
    { href: "/", label: "Accueil" },
    { href: "/galerie", label: "Galerie" },
    { href: "/atelier", label: "Atelier" },
    { href: "/fablab", label: "Fablab" },
    { href: "/massage", label: "Massage" },
    { href: "/kitchen", label: "Cuisine" },
    { href: "/studio", label: "Studio" },
  ]

  let open = $state(false)

  function isActive(href: string): boolean {
    if (href === "/") return page.url.pathname === "/"
    return page.url.pathname.startsWith(href)
  }
</script>

<header class="sticky top-0 z-40 bg-brut-paper border-b-[3px] border-brut-ink">
  <div
    class="mx-auto max-w-6xl px-4 sm:px-6 py-3 flex items-center justify-between gap-4"
  >
    <a
      href="/"
      class="flex items-center gap-3 group"
      aria-label="LE LIEU — accueil"
    >
      <img
        src={logotype}
        alt="LE LIEU"
        class="h-8 sm:h-10 w-auto select-none"
        width="544"
        height="414"
      />
      <span
        class="hidden sm:inline font-mono text-[10px] uppercase tracking-widest"
      >
        Lieu Imaginaire<br />Expérimental Utopique
      </span>
    </a>

    <nav class="hidden md:flex items-center gap-1">
      {#each nav as item (item.href)}
        <a
          href={item.href}
          class={cn(
            "font-mono uppercase text-xs tracking-widest px-3 py-2 brut-border brut-press",
            isActive(item.href)
              ? "bg-brut-ink text-brut-paper brut-shadow-sm"
              : "bg-brut-paper text-brut-ink",
          )}
          aria-current={isActive(item.href) ? "page" : undefined}
        >
          {item.label}
        </a>
      {/each}
    </nav>

    <button
      type="button"
      class="md:hidden brut-border brut-shadow-sm bg-brut-paper px-3 py-2 font-mono text-xs uppercase tracking-widest"
      aria-expanded={open}
      aria-controls="brut-mobile-nav"
      onclick={() => (open = !open)}
    >
      {open ? "Fermer" : "Menu"}
    </button>
  </div>

  {#if open}
    <nav
      id="brut-mobile-nav"
      class="md:hidden border-t-[3px] border-brut-ink bg-brut-paper"
    >
      <ul class="flex flex-col">
        {#each nav as item (item.href)}
          <li class="border-b-[3px] border-brut-ink last:border-b-0">
            <a
              href={item.href}
              onclick={() => (open = false)}
              class={cn(
                "block w-full px-5 py-4 font-mono uppercase text-sm tracking-widest",
                isActive(item.href)
                  ? "bg-brut-ink text-brut-paper"
                  : "bg-brut-paper text-brut-ink",
              )}
            >
              {item.label}
            </a>
          </li>
        {/each}
      </ul>
    </nav>
  {/if}
</header>
