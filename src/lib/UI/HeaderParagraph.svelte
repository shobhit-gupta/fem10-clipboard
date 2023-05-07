<script lang="ts">
	export let tag: 'h1' | 'h2' | 'h3';
</script>

<div class:h-p1={tag === 'h1'} class:h-p2={tag === 'h2'} class:h-p3={tag === 'h3'}>
	<svelte:element
		this={tag}
		class="
            text-darkGrayishBlue
            leading-tight
            font-semibold
        "
		class:h-p1__h={tag === 'h1'}
		class:h-p2__h={tag === 'h2'}
		class:h-p3__h={tag === 'h3'}
	>
		<slot name="h" />
	</svelte:element>

	<p
		class="
            text-grayishBlue
            leading-7
            md:leading-8
        "
		class:h-p1__p={tag === 'h1'}
		class:h-p2__p={tag === 'h2'}
		class:h-p3__p={tag === 'h3'}
	>
		<slot name="p" />
	</p>
</div>
