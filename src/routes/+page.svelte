<script lang="ts">
	import DownloadButton from '$lib/UI/DownloadButton.svelte';
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
        bg-contain
        bg-top
        mx-auto
        pt-32
        px-8
        text-center
        space-y-16
        md:space-y-14
        bg-blend-normal
    "
>
	<img src="images/logo.svg" alt="Logo" class="w-32 h-32 mx-auto" />

	<div
		class="
            max-w-3xl
            text-center
            mx-auto
            space-y-4
        "
	>
		<h1
			class="
                text-darkGrayishBlue
                text-3xl
                tracking-[-0.52px]
                md:text-5xl
                md:tracking-[-0.75px]
                leading-tight
                font-semibold
            "
		>
			A history of everything you copy
		</h1>

		<p
			class="
                md:text-xl
                tracking-[0.12px]
                text-grayishBlue
                leading-relaxed
                md:leading-normal
            "
		>
			Clipboard allows you to track and organize everything you copy. Instantly access your
			clipboard on all your devices.
		</p>
	</div>

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
            md:max-w-fit"
	>
		<DownloadButton url="#" bg="bg-strongCyan">Download for iOS</DownloadButton>
		<DownloadButton url="#" bg="bg-lightBlue">Download for Mac</DownloadButton>
	</div>
</header>

<!-- Download for iOS -->
<!-- Download for Mac -->

<!-- Keep track of your snippets -->

<!-- Clipboard instantly stores any item you copy in the cloud,  -->
<!-- meaning you can access your snippets immediately on all your  -->
<!-- devices. Our Mac and iOS apps will help you organize everything. -->

<!-- Quick Search -->

<!-- Easily search your snippets by content, category, web address, application, and more. -->

<!-- iCloud Sync -->

<!-- Instantly saves and syncs snippets across all your devices. -->

<!-- Complete History -->

<!-- Retrieve any snippets from the first moment you started using the app. -->

<!-- Access Clipboard anywhere -->

<!-- Whether you’re on the go, or at your computer, you can access all your Clipboard  -->
<!-- snippets in a few simple clicks. -->

<!-- Supercharge your workflow -->

<!-- We’ve got the tools to boost your productivity. -->

<!-- Create blacklists -->

<!-- Ensure sensitive information never makes its way to your clipboard by excluding certain sources. -->

<!-- Plain text snippets -->

<!-- Remove unwanted formatting from copied text for a consistent look. -->

<!-- Sneak preview -->

<!-- Quick preview of all snippets on your Clipboard for easy access. -->

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
