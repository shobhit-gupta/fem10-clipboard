<script lang="ts">
	import Cta from '$lib/UI/CTA.svelte';
	import HeaderParagraph from '$lib/UI/HeaderParagraph.svelte';
	import Footer from '$lib/UI/Footer.svelte';
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
		<svelte:fragment slot="h">A history of everything you copy</svelte:fragment>
		<svelte:fragment slot="p">
			Clipboard allows you to track and organize everything you copy. Instantly access your
			clipboard on all your devices.
		</svelte:fragment>
	</HeaderParagraph>

	<Cta />
</header>

<section>
	<HeaderParagraph tag="h2">
		<svelte:fragment slot="h">Keep track of your snippets</svelte:fragment>
		<svelte:fragment slot="p">
			Clipboard instantly stores any item you copy in the cloud, meaning you can access your
			snippets immediately on all your devices. Our Mac and iOS apps will help you organize
			everything.
		</svelte:fragment>
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
			<HeaderParagraph tag="h3" alignment="text-center md:text-left">
				<svelte:fragment slot="h">Quick Search</svelte:fragment>
				<svelte:fragment slot="p">
					Easily search your snippets by content, category, web address, application, and more.
				</svelte:fragment>
			</HeaderParagraph>
			<HeaderParagraph tag="h3" alignment="text-center md:text-left">
				<svelte:fragment slot="h">iCloud Sync</svelte:fragment>
				<svelte:fragment slot="p">
					Instantly saves and syncs snippets across all your devices.
				</svelte:fragment>
			</HeaderParagraph>
			<HeaderParagraph tag="h3" alignment="text-center md:text-left">
				<svelte:fragment slot="h">Complete History</svelte:fragment>
				<svelte:fragment slot="p">
					Retrieve any snippets from the first moment you started using the app.
				</svelte:fragment>
			</HeaderParagraph>
		</div>
	</div>
</section>

<section>
	<HeaderParagraph tag="h2">
		<svelte:fragment slot="h">Access Clipboard Anywhere</svelte:fragment>
		<svelte:fragment slot="p">
			Whether you’re on the go, or at your computer, you can access all your Clipboard snippets in a
			few simple clicks.
		</svelte:fragment>
	</HeaderParagraph>
	<img src="images/image-devices.png" alt="" class="mx-auto mb-0 mt-16 md:mt-28" />
</section>

<section class="mt-20 md:mt-24 md:max-w-fit">
	<HeaderParagraph tag="h2">
		<svelte:fragment slot="h">Supercharge your workflow</svelte:fragment>
		<svelte:fragment slot="p">We’ve got the tools to boost your productivity.</svelte:fragment>
	</HeaderParagraph>
	<div class="md:mt-18 mt-24 grid grid-cols-1 gap-14 md:grid-cols-3 md:gap-8">
		<div class="flex flex-col items-center space-y-11">
			<img src="images/icon-blacklist.svg" alt="" class="h-10 w-11" />
			<HeaderParagraph tag="h3">
				<svelte:fragment slot="h">Create blacklists</svelte:fragment>
				<svelte:fragment slot="p">
					Ensure sensitive information never makes its way to your clipboard by excluding certain
					sources.
				</svelte:fragment>
			</HeaderParagraph>
		</div>
		<div class="flex flex-col items-center space-y-11">
			<img src="images/icon-text.svg" alt="" class="h-8 w-9" />
			<HeaderParagraph tag="h3">
				<svelte:fragment slot="h">Plain text snippets</svelte:fragment>
				<svelte:fragment slot="p">
					Remove unwanted formatting from copied text for a consistent look.
				</svelte:fragment>
			</HeaderParagraph>
		</div>
		<div class="flex flex-col items-center space-y-11">
			<img src="images/icon-preview.svg" alt="" class="h-8 w-12" />
			<HeaderParagraph tag="h3">
				<svelte:fragment slot="h">Sneak preview</svelte:fragment>
				<svelte:fragment slot="p">
					Quick preview of all snippets on your Clipboard for easy access.
				</svelte:fragment>
			</HeaderParagraph>
		</div>
	</div>
</section>

<section>
	<div
		class="mx-auto flex flex-col flex-wrap items-center justify-center gap-14 md:max-w-fit md:flex-row"
	>
		<img
			src="images/logo-google.png"
			alt="Logo of Google"
			class="shrink grow-0 object-scale-down"
		/>
		<img src="images/logo-ibm.png" alt="Logo of IBM" class="shrink grow-0 object-scale-down" />
		<img
			src="images/logo-microsoft.png"
			alt="Logo of Microsoft"
			class="shrink grow-0 object-scale-down"
		/>
		<img src="images/logo-hp.png" alt="Logo of HP" class="shrink grow-0 object-scale-down" />
		<img
			src="images/logo-vector-graphics.png"
			alt="Logo of Vector Graphics"
			class="shrink grow-0 object-scale-down"
		/>
	</div>
</section>

<section>
	<HeaderParagraph tag="h2">
		<svelte:fragment slot="h">Clipboard for iOS and Mac OS</svelte:fragment>
		<svelte:fragment slot="p">
			Available for free on the App Store. Download for Mac or iOS, sync with iCloud and you’re
			ready to start adding to your clipboard.
		</svelte:fragment>
	</HeaderParagraph>
	<Cta />
</section>

<Footer />
