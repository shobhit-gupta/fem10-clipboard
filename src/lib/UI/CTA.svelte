<script lang="ts">
	import DownloadButton from '$lib/UI/DownloadButton.svelte';
</script>

<div
	class="
            mx-auto
            mt-12
            flex
            flex-col
            items-stretch
            justify-center
            space-y-6
            md:max-w-fit
            md:flex-row
            md:items-center
            md:space-x-4
            md:space-y-0
        "
>
	<DownloadButton url="#" bg="bg-strongCyan">Download for iOS</DownloadButton>
	<DownloadButton url="#" bg="bg-lightBlue">Download for Mac</DownloadButton>
</div>
