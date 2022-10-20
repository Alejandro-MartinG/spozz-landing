<script>
    import mid from '$lib/images/mid.png'
    import Gallery from "./gallery.svelte"
    import Screen from "./screen/marketplace.svelte"
    import borderLeft from '$lib/images/gallery/vector_boder_leftup.png'
    import borderRight from '$lib/images/gallery/vector_boder_right.png'
    import borderBottom from '$lib/images/gallery/vector_boder_right_down.png'

    import Carousel from "./screen/carousel.svelte"
    import frameBig from "$lib/images/gallery/frame_b.png";
</script>

<div class="mid grid-container">
    <img class="mid_background" src={mid} alt="SvelteKit" />

    <div class="grid-item">
        <Screen></Screen>
    </div>

    <div class="grid-item">
        <nav class="nav">
            <ul/>
            <ul class="menu">
                <li class="menu-item"><span>BETA MARKETPLACE</span></li>
                <li class="menu-item"><span>BETA MARKETPLACE</span></li>
                <li class="menu-item"><span>SPOZZ TOKEN</span></li>
                <li class="menu-item"><span>JOIN OUR DISCORD</span></li>
                <li class="menu-item"><span>SPOZZ IN THE NEWS</span></li>
                <li class="menu-item"><span>SPOZZ INFOPAGE</span></li>
                <li class="menu-item"><span>BETA SPOZZ BLOG</span></li>
            </ul>
        </nav>
    </div>

    <div class="grid-item extend">
        <img class="wrap" src={frameBig}  alt="SvelteKit"/>
        <div class="row center">
            <Gallery></Gallery>
        </div>
    </div>
</div>

<style>
    .mid {
        height: 1500px;
        max-width: 100%;
        padding-top: 4rem;
    }
    .grid-container {
        display: grid;
        gap: 0.5rem;
        grid-template-rows: 50% 50%;
        grid-template-columns: 50% 50%;
        padding: 1rem;
        overflow:hidden;
        align-self: center;
        max-width: 100%;
    }

    .mid_background {
        height: 30%;
        position: absolute;
        mix-blend-mode: overlay;
        opacity: 0.95;
        z-index: -1;
        size: auto;
    }

    .extend {
        grid-column-start: 1;
        grid-column-end: 6;
        display: grid;
        gap: 0.5rem;
        z-index: 5;
        padding-top: 8rem;
        padding-bottom: 8rem;
        align-self: center;
        justify-content: center;
        max-width: 100%;
    }
    .wrap {
        opacity: .15;
        position: absolute;
        size: auto;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        mix-blend-mode: overlay;
    }

    .row{
        position:relative;
        margin: auto;
    }
    .center {
        display: flex;
        position: relative;
        margin: auto;
        align-self: center;
        justify-content: center;
        max-width: 80%;

        /*
        display: inline-flex;
        justify-content: center;
        align-items: center;
        */
    }

    .grid-item {
        position: relative;
        margin: auto;
        align-self: center;
        justify-content: center;
    }
    .nav {
        width: 100%;
        display: grid;
        grid-template-columns: 0.5fr 1fr;
        grid-gap: 1rem;
    }
    li {
        text-align: right;

    }
    span:hover {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 600;
        font-size: 22px;
        line-height: 27px;
        /* identical to box height */
        letter-spacing: 0.05em;
        color: #FFFFFF;
    }
    span {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 600;
        font-size: 22px;
        line-height: 27px;
        /* identical to box height */
        letter-spacing: 0.05em;
        mix-blend-mode: overlay;
    }
</style>