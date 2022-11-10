<script>
    import marketplace from '$lib/images/mid-menu/marketplace.png'
    import blog from '$lib/images/mid-menu/blog.png'
    import tokenizzer from '$lib/images/mid-menu/tokenizzer.png'
    import discord from '$lib/images/mid-menu/discord.png'
    import no from '$lib/images/mid-menu/update.png'
    import frame from '$lib/images/mid-menu/frame.png';
    import linkLine from "$lib/images/mid-menu/link-line.png"

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

    const links = {
        a: null,
        b: null,
        c: null,
        d: "https://discord.com/invite/6Yp2dcqHQ3",
        e: null,
        f: null,
    }

    export let value = 'a';
</script>

<div class="link-title">
    <p>click on the image for link</p>
    <img class="link" src={linkLine} alt="SvelteKit"/>
</div>

{#key value}
<div class="container" style="{borderImage}">
    <a href={links[value]}>
        <img class="top" src={backgrounds[value]} alt="SvelteKit"  in:blur="{{delay: 150, duration: 500}}"/>
    </a>
</div>
{/key}

<style>
    p {
        color: #BF23FF;
        margin-bottom: 0;
        font-style: italic;
        font-family: 'Montserrat', sans-serif;
        font-size: 13pt;
        mix-blend-mode: color-dodge;
    }
    .link-title {
        display: flex;
        flex-direction: column;
        text-align: right;
        max-width: 563px;
    }
    .link {
        opacity: .35;
        margin-bottom: 1rem;
        margin-left: 4rem;
    }
    .container {
        display: flex;
        flex-direction: column;
        margin: auto;
        border-style:ridge;
    }
    img {
        margin: auto;
    }
</style>
