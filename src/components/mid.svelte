<script>
    import mid from '$lib/images/mid.png'
</script>

<div class="mid">
    <img class="mid_background" src={mid} alt="SvelteKit" />
 
    <nav class="nav">
        <ul/>
        <ul class="menu">
            <li class="menu-item"><span class="v2_76 selected_text">BETA MARKETPLACE</span></li>
            <li class="menu-item"><span class="v2_76 text">BETA MARKETPLACE</span></li>
            <li class="menu-item"><span class="v2_77 text">SPOZZ TOKEN</span></li>
            <li class="menu-item"><span class="v2_79 text">JOIN OUR DISCORD</span></li>
            <li class="menu-item"><span class="v2_80 text">SPOZZ IN THE NEWS</span></li>
            <li class="menu-item"><span class="v2_81 text">SPOZZ INFOPAGE</span></li>
            <li class="menu-item"><span class="v2_78 text">BETA SPOZZ BLOG</span></li>
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
    .selected_text {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 600;
        font-size: 22px;
        line-height: 27px;
        /* identical to box height */
        letter-spacing: 0.05em;
        color: #FFFFFF;
    }
    .text {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 600;
        font-size: 22px;
        line-height: 27px;
        /* identical to box height */
        letter-spacing: 0.05em;
        color: #FFFFFF;
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