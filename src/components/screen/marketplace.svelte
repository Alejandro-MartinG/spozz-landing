<script>
    import marketplace from '$lib/images/mid-menu/marketplace.png'
    import blog from '$lib/images/mid-menu/blog.png'
    import tokenizzer from '$lib/images/mid-menu/tokenizzer.png'
    import discord from '$lib/images/mid-menu/discord.png'
    import no from '$lib/images/mid-menu/no-disponible.png'
    import frame from '$lib/images/mid-menu/frame.png';

  	import { blur } from 'svelte/transition';

	$: borderImage = `border-image: url("${frame}") /* source */ 27 / /* slice */ 1.5rem 28px 28px
    28px / /* width */ 18px 12px 18px 12px /* outset */ round; /* repeat */;`;

    const backgrounds = {
		a: marketplace,
        b: blog,
        c: tokenizzer,
        d: discord,
        e: no,
        f: no,
	};

    export let value = 'a';
</script>

{#key value}
<div class="container"  style="{borderImage}">
    <img class="top" src={backgrounds[value]} alt="SvelteKit"  in:blur="{{delay: 250, duration: 300}}"/>
</div>
{/key}

<style>
    .container {
        display: flex;
        flex-direction: column;
        margin: auto;
        border-style:ridge;
    }
    .top {
        max-height: 600px;
    }
    img {
        margin: auto;
    }
</style>
