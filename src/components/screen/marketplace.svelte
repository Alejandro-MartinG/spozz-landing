<script>
    import screen from '$lib/images/screen.png'
  	import { crossfade, scale } from 'svelte/transition';
    import frame from '$lib/images/BANCO_ASSETS/frame.png'

	// $: bgImage = `background-image: url("${frame}");`;
    // $: bgPos = `background-position: center;`;
    // $: bgR = `background-repeat: no-repeat;`;
    // $: bgSize = `background-size: contain;`;
    const backgrounds = {
		a: screen,
	};

    export let value = 'a';
</script>

{#key value}
<div class="container"  transition:crossfade>
    <img class="top" src={backgrounds[value]} alt="SvelteKit"/>
    <img class="frame" src={frame} alt="SvelteKit"/>
 <!--   <img class="top" src={screen} alt="SvelteKit" style="{bgImage} {bgPos} {bgR} {bgSize}"/> -->
</div>
{/key}

<style>
    .container {
        position: relative;
        margin: auto;
    }
    .top {
        z-index: 1;
        max-height: 600px;
    }
    .frame {
        position: absolute;
        left: 0;
        top: 0;
        width: 104%;
        height: 104%;
        mix-blend-mode: overlay;
    }
    img {
        margin: auto;
    }
</style>
