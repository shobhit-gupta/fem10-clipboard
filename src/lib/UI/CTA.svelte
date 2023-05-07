<script lang="ts">
	import DownloadButton from '$lib/UI/DownloadButton.svelte';
</script>

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
