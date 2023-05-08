<script lang="ts">
	import type { PageData } from './$types';
	import Cta from '$lib/UI/CTA.svelte';
	import HeaderParagraph from '$lib/UI/HeaderParagraph.svelte';
	import Footer from '$lib/UI/Footer.svelte';

	export let data;
	const text = data.text;
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="true" />
	<link
		href="https://fonts.googleapis.com/css2?family=Bai+Jamjuree:wght@400;600&display=swap"
		rel="stylesheet"
	/>
	<title>Clipboard Landing Page</title>
</svelte:head>

<header
	class="
        mx-auto
        select-none
        space-y-16
        bg-[url('images/bg-header-mobile.png')]
        bg-cover
        bg-top
        bg-no-repeat
        px-8
        pt-32
        text-center
        md:space-y-14
        md:bg-[url('images/bg-header-desktop.png')]
        md:bg-contain
    "
>
	<img src="images/logo.svg" alt="Logo" class="mx-auto h-32 w-32" />
	<HeaderParagraph tag="h1">
		<svelte:fragment slot="h">{text.sections.hero.title}</svelte:fragment>
		<svelte:fragment slot="p">{text.sections.hero.subtitle}</svelte:fragment>
	</HeaderParagraph>
	<Cta />
</header>

<section id="snippets">
	<HeaderParagraph tag="h2">
		<svelte:fragment slot="h">{text.sections.snippets.title}</svelte:fragment>
		<svelte:fragment slot="p">{text.sections.snippets.subtitle}</svelte:fragment>
	</HeaderParagraph>

	<div class="mx-auto mt-16 grid grid-cols-1 gap-14 md:mt-20 md:grid-cols-2 md:gap-28">
		<img src="images/image-computer.png" alt="" class="md:max-w-none md:place-self-end" />

		<div
			class="
                mx-auto
                flex
                flex-col
                space-y-12
                text-center
                md:mx-0
                md:space-y-14
                md:py-16
                md:text-left
            "
		>
			{#each text.snippets as { title, subtitle }}
				<HeaderParagraph tag="h3" alignment="text-center md:text-left">
					<svelte:fragment slot="h">{title}</svelte:fragment>
					<svelte:fragment slot="p">{subtitle}</svelte:fragment>
				</HeaderParagraph>
			{/each}
		</div>
	</div>
</section>

<section>
	<HeaderParagraph tag="h2">
		<svelte:fragment slot="h">{text.sections.access.title}</svelte:fragment>
		<svelte:fragment slot="p">{text.sections.access.subtitle}</svelte:fragment>
	</HeaderParagraph>
	<img src="images/image-devices.png" alt="" class="mx-auto mb-0 mt-16 md:mt-28" />
</section>

<section id="features" class="mt-20 md:mt-24 md:max-w-fit">
	<HeaderParagraph tag="h2">
		<svelte:fragment slot="h">{text.sections.features.title}</svelte:fragment>
		<svelte:fragment slot="p">{text.sections.features.subtitle}</svelte:fragment>
	</HeaderParagraph>
	<div class="md:mt-18 mt-24 grid grid-cols-1 gap-14 md:grid-cols-3 md:gap-8">
		{#each text.features as { icon: src, title: h, subtitle: p }}
			<div class="flex flex-col items-center space-y-11">
				<img {src} alt="" />
				<HeaderParagraph tag="h3">
					<svelte:fragment slot="h">{h}</svelte:fragment>
					<svelte:fragment slot="p">{p}</svelte:fragment>
				</HeaderParagraph>
			</div>
		{/each}
	</div>
</section>

<section id="customers">
	<div
		class="
			mx-auto
			flex
			flex-col
			flex-wrap
			items-center
			justify-center
			gap-14
			md:max-w-fit
			md:flex-row
		"
	>
		{#each text.customers as { name, icon: src }}
			<img {src} alt={`Logo of ${name}`} class="shrink grow-0" />
		{/each}
	</div>
</section>

<section>
	<HeaderParagraph tag="h2">
		<svelte:fragment slot="h">{text.sections.cta.title}</svelte:fragment>
		<svelte:fragment slot="p">{text.sections.cta.subtitle}</svelte:fragment>
	</HeaderParagraph>
	<Cta />
</section>

<Footer />
