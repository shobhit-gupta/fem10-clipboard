<script lang="ts">
	export let tag: 'h1' | 'h2' | 'h3';
	export let alignment = 'text-center';
</script>

<div
	class:h-p1={tag === 'h1'}
	class:h-p2={tag === 'h2'}
	class:h-p3={tag === 'h3'}
	class={alignment}
>
	<svelte:element
		this={tag}
		class="
            font-semibold
            leading-tight
            text-darkGrayishBlue
        "
		class:h-p1__h={tag === 'h1'}
		class:h-p2__h={tag === 'h2'}
		class:h-p3__h={tag === 'h3'}
	>
		<slot name="h" />
	</svelte:element>

	<p
		class="
            leading-7
            text-grayishBlue
            md:leading-8
        "
		class:h-p1__p={tag === 'h1'}
		class:h-p2__p={tag === 'h2'}
		class:h-p3__p={tag === 'h3'}
	>
		<slot name="p" />
	</p>
</div>
