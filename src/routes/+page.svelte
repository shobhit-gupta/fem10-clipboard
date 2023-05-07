<script lang="ts">
	import DownloadButton from '$lib/UI/DownloadButton.svelte';
	import HeaderParagraph from '$lib/UI/HeaderParagraph.svelte';
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
        bg-[url('images/bg-header-mobile.png')]
        md:bg-[url('images/bg-header-desktop.png')]
        bg-no-repeat
        bg-cover
        md:bg-contain
        bg-top
        mx-auto
        pt-32
        px-8
        text-center
        space-y-16
        md:space-y-14
        select-none
    "
>
	<img src="images/logo.svg" alt="Logo" class="w-32 h-32 mx-auto" />

	<HeaderParagraph tag="h1">
		<svelte:fragment slot="h">A history of everything you copy</svelte:fragment>
		<svelte:fragment slot="p">
			Clipboard allows you to track and organize everything you copy. Instantly access your
			clipboard on all your devices.
		</svelte:fragment>
	</HeaderParagraph>

	<div
		class="
            mt-12
            flex
            flex-col
            md:flex-row
            mx-auto
            space-y-6
            md:space-y-0
            md:space-x-4
            items-stretch
            md:items-center
            justify-center
            md:max-w-fit
        "
	>
		<DownloadButton url="#" bg="bg-strongCyan">Download for iOS</DownloadButton>
		<DownloadButton url="#" bg="bg-lightBlue">Download for Mac</DownloadButton>
	</div>
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

	<div class="mt-16 md:mt-20 grid grid-cols-1 md:grid-cols-2 mx-auto gap-14 md:gap-28">
		<img src="images/image-computer.png" alt="" class="md:max-w-none md:place-self-end" />

		<div
			class="
                flex
                flex-col
                space-y-12
                md:space-y-14
                md:py-16
                md:text-left
                mx-auto
                md:mx-0
                text-center
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
	<img src="images/image-devices.png" alt="" class="mx-auto mt-16 md:mt-28 mb-0" />
</section>

<section class="mt-20 md:mt-24 md:max-w-fit">
	<HeaderParagraph tag="h2">
		<svelte:fragment slot="h">Supercharge your workflow</svelte:fragment>
		<svelte:fragment slot="p">We’ve got the tools to boost your productivity.</svelte:fragment>
	</HeaderParagraph>
	<div class="mt-24 md:mt-18 grid grid-cols-1 md:grid-cols-3 gap-14 md:gap-8">
		<div class="flex flex-col items-center space-y-11">
			<img src="images/icon-blacklist.svg" alt="" class="w-11 h-10" />
			<HeaderParagraph tag="h3">
				<svelte:fragment slot="h">Create blacklists</svelte:fragment>
				<svelte:fragment slot="p">
					Ensure sensitive information never makes its way to your clipboard by excluding certain
					sources.
				</svelte:fragment>
			</HeaderParagraph>
		</div>
		<div class="flex flex-col items-center space-y-11">
			<img src="images/icon-text.svg" alt="" class="w-9 h-8" />
			<HeaderParagraph tag="h3">
				<svelte:fragment slot="h">Plain text snippets</svelte:fragment>
				<svelte:fragment slot="p">
					Remove unwanted formatting from copied text for a consistent look.
				</svelte:fragment>
			</HeaderParagraph>
		</div>
		<div class="flex flex-col items-center space-y-11">
			<img src="images/icon-preview.svg" alt="" class="w-12 h-8" />
			<HeaderParagraph tag="h3">
				<svelte:fragment slot="h">Sneak preview</svelte:fragment>
				<svelte:fragment slot="p">
					Quick preview of all snippets on your Clipboard for easy access.
				</svelte:fragment>
			</HeaderParagraph>
		</div>
	</div>
</section>

<!--  -->

<!--  -->

<!--  -->

<!--  -->

<!--  -->

<!--  -->

<!-- Clipboard for iOS and Mac OS -->

<!-- Available for free on the App Store. Download for Mac or iOS, sync with iCloud  -->
<!-- and you’re ready to start adding to your clipboard. -->

<!-- Download for iOS -->
<!-- Download for Mac -->

<!-- FAQs -->
<!-- Contact Us -->
<!-- Privacy Policy -->
<!-- Press Kit -->
<!-- Install Guide -->
