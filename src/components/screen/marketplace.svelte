<script>
    import screen from '$lib/images/screen.png'

    // import frame from '$lib/images/BANCO_ASSETS/frame.png'

	// $: bgImage = `background-image: url("${frame}");`;
    // $: bgPos = `background-position: center;`;
    // $: bgR = `background-repeat: no-repeat;`;
    // $: bgSize = `background-size: contain;`;
</script>

<div class="container">
    <img class="top" src={screen} alt="SvelteKit"/>
 <!--   <img class="top" src={screen} alt="SvelteKit" style="{bgImage} {bgPos} {bgR} {bgSize}"/> -->
 
</div>

<style>
    .container {
        position: relative;
        margin: auto;
    }
    .top {
        z-index: 1;
        max-height: 489px;
    }
    img {
        margin: auto;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        top: 50%;
        transform: translateX(-50%);
    }
</style>
