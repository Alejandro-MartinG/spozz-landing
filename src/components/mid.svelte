<script>
    import mid from '$lib/images/mid.png'
    import { CardText, Col, NavbarBrand } from 'sveltestrap';

    import { fade } from 'svelte/transition';
	let visible = true;
</script>

<div class="mid" transition:fade>
    <img class="mid_background" src={mid} alt="SvelteKit" />

   {#if visible}
   {/if}
    <nav class="nav">
        <ul/>
        <ul class="menu">
            <li class="menu-item"><span class="v2_76">BETA MARKETPLACE</span></li>
            <li class="menu-item"><span class="v2_76">BETA MARKETPLACE</span></li>
            <li class="menu-item"><span class="v2_77">SPOZZ TOKEN</span></li>
            <li class="menu-item"><span class="v2_79">JOIN OUR DISCORD</span></li>
            <li class="menu-item"><span class="v2_80">SPOZZ IN THE NEWS</span></li>
            <li class="menu-item"><span class="v2_81">SPOZZ INFOPAGE</span></li>
            <li class="menu-item"><span class="v2_78">BETA SPOZZ BLOG</span></li>
        </ul>
    </nav>
</div>

<style>
    .mid {
        margin: auto;
        display: flex;
        width: 100%;
        height: 1132px;
        padding-top: 2rem;
    }
    .nav {
        width: 100%;
        display: grid;
        grid-template-columns: 2fr 1fr;
        grid-gap: 1rem;
    }
    .menu_image {
        ox-sizing: border-box;

        position: absolute;
        width: 517px;
        height: 353px;
        left: 306px;
        top: 1053px;

        mix-blend-mode: overlay;
        border: 1px solid #FFFFFF;
        border-radius: 11px;
    }
    li:hover {
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
    .mid_background {
        height: 795px;
        position: absolute;
        mix-blend-mode: overlay;
        opacity: 0.95;
    }
    .v2_76 {
    }
    .v2_77 {
    }
    .v2_78 {
    }
    .v2_79 {
    }
    .v2_80 {
    }
    .v2_81 {
    }
</style>