<script lang="ts">
	export let url: string;
	export let bg: string = 'bg-black';
	export let fg: string = 'text-white';
</script>

<a
	href={url}
	class="
        px-9
        py-3
        rounded-full
        {bg}
        {fg}
        font-semibold
        text-lg
        leading-relaxed
        tracking-[0.5px]
        text-center
        shadow-lg
        border-b-2
        border-black/10
    "
>
	<slot />
</a>
