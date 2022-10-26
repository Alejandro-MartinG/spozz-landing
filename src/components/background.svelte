<script>
    import a from '$lib/images/gallery/1_bg.png'
    import b from '$lib/images/gallery/2_bg.png'
    import c from '$lib/images/gallery/3_bg.png'
    import d from '$lib/images/gallery/4_bg.png'

    const imports = { a, b, c, d };

    export let value = 'b';
</script>

{#key value}
<img class="mid_background" src={imports[value]} alt="SvelteKit" />
{/key}

<style>
    .mid_background {
        height: 30%;
        position: absolute;
        mix-blend-mode: overlay;
        opacity: .32;
        z-index: -1;
        max-width: 100%;
        padding-top: 4rem;
        bottom: 24%;
    }
</style>