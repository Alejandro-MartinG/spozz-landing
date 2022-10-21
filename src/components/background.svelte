<script>
    import a from '$lib/images/gallery/1_bg.png'
    import b from '$lib/images/gallery/2_bg.png'
    import c from '$lib/images/gallery/3_bg.png'
    import d from '$lib/images/gallery/4_bg.png'
    const imports = {
		a: a,
		b: b,
		c: c,
		d: d
	};
    export let value = "b"
</script>

{#key value}
<img class="mid_background" src={imports[value]} alt="SvelteKit" />
{/key}
<style>
    .mid_background {
        height: 30%;
        position: absolute;
        mix-blend-mode: overlay;
        opacity: .50;
        z-index: -1;
        size: auto;
        max-width: 100%;
        padding-top: 4rem;
    }
</style>