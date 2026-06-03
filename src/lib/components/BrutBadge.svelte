<script lang="ts">
  import { cn, colorBg, colorText, type BrutColor } from "$lib/utils"
  import type { Snippet } from "svelte"

  type Props = {
    color?: BrutColor | "paper"
    rotate?: boolean
    class?: string
    children: Snippet
  }

  let {
    color = "paper",
    rotate = false,
    class: klass = "",
    children,
  }: Props = $props()

  const bg =
    color === "paper"
      ? "bg-brut-paper text-brut-ink"
      : `${colorBg[color]} ${colorText[color]}`
</script>

<span
  class={cn(
    "brut-tag inline-block whitespace-nowrap",
    bg,
    rotate ? "-rotate-6" : "",
    klass,
  )}
>
  {@render children()}
</span>
