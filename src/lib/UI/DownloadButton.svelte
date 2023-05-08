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
        rounded-full
        px-9
        py-3
        {bg}
        {fg}
        border-b-2
        border-black/10
        text-center
        text-lg
        font-semibold
        leading-relaxed
        tracking-[0.5px]
        shadow-lg
    "
>
	<div class="absolute bottom-0 left-0 right-0 top-0 {hoverColor} opacity-0 hover:opacity-100" />
	<slot />
</a>
