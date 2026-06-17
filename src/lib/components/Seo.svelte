<script lang="ts">
	import { SITE_NAME, SITE_URL, canonical } from '$lib/seo';

	type Props = {
		title: string;
		description: string;
		path: string;
		keywords?: string[];
		image?: string;
		type?: 'website' | 'article';
		jsonLd?: Record<string, unknown> | Record<string, unknown>[];
	};

	let {
		title,
		description,
		path,
		keywords,
		image,
		type = 'website',
		jsonLd
	}: Props = $props();

	const url = $derived(canonical(path));
	const ogImage = $derived(image ? (image.startsWith('http') ? image : SITE_URL + image) : undefined);
	const ldJson = $derived(jsonLd ? JSON.stringify(jsonLd) : undefined);
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	{#if keywords && keywords.length}
		<meta name="keywords" content={keywords.join(', ')} />
	{/if}
	<link rel="canonical" href={url} />

	<meta property="og:site_name" content={SITE_NAME} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:url" content={url} />
	<meta property="og:type" content={type} />
	<meta property="og:locale" content="fr_FR" />
	{#if ogImage}
		<meta property="og:image" content={ogImage} />
	{/if}

	<meta name="twitter:card" content={ogImage ? 'summary_large_image' : 'summary'} />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	{#if ogImage}
		<meta name="twitter:image" content={ogImage} />
	{/if}

	{#if ldJson}
		{@html `<script type="application/ld+json">${ldJson}<` + `/script>`}
	{/if}
</svelte:head>
