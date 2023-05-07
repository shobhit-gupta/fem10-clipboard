<script lang="ts">
	export let url: string;
	export let bg: string = 'bg-black';
	export let fg: string = 'text-white';
	export let hoverColor: string = 'bg-white/25';
</script>

<a
	href={url}
	class="
        group
        relative
        overflow-hidden
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
	<div class="absolute top-0 left-0 bottom-0 right-0 {hoverColor} opacity-0 hover:opacity-100" />
	<slot />
</a>
