<script>
    import { backgroundStore } from './mid-background-store';
    import Gallery from "./gallery.svelte"
    import Screen from "./screen/marketplace.svelte"
    import Background from './background.svelte'
    import frameBig from "$lib/images/gallery/frame_b.png";

    // Screen context
    let screen = 'a';
    let bgScreen = {
        bg1: 'a',
        bg2: 'b',
        bg3: 'c',
        // TODO: add all cases
    };

  	function handleClick(screenId) {
        screen = bgScreen[screenId]
	}
</script>

<div class="mid grid-container">
    <Background value={$backgroundStore}></Background>
    
    <div class="grid-item screen">
        <Screen value={screen}></Screen>
    </div>

    <div class="grid-item">
        <nav class="nav">
            <ul class="menu">
                <li class="menu-item">
                    <a href={null} on:click|preventDefault={()=>handleClick('bg1')}>
                        <span>BETA MARKETPLACE</span>
                    </a> 
                </li>
                <li class="menu-item">
                    <a href={null} on:click|preventDefault={event =>handleClick('bg2')}>
                        <span>BETA MARKETPLACE</span>
                    </a> 
                </li>
                <li class="menu-item">
                    <a href={undefined} on:click|preventDefault={event =>handleClick('bg3')}>
                        <span>BETA MARKETPLACE</span>
                    </a> 
                </li>
                <li class="menu-item">
                    <a href={null} on:click|preventDefault={event =>handleClick(event)}>
                        <span>SPOZZ TOKEN</span>
                    </a> 
                </li>
                <li class="menu-item">
                    <a href={null} on:click|preventDefault={event =>handleClick(event)}>
                        <span>JOIN OUR DISCORD</span>
                    </a> 
                </li>
                <li class="menu-item">
                    <a href={null} on:click|preventDefault={event =>handleClick(event)}>
                        <span>SPOZZ IN THE NEWS</span>
                    </a> 
                </li>
                <li class="menu-item">
                    <a href={null} on:click|preventDefault={event =>handleClick(event)}>
                        <span>SPOZZ INFOPAGE</span>
                    </a> 
                </li>
                <li class="menu-item">
                    <a href={null} on:click|preventDefault={event =>handleClick(event)}>
                        <span>BETA SPOZZ BLOG</span>
                    </a> 
                </li>
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

    .menu {
        text-align: right;
        grid-column-start: 2;
        grid-column-end: 2;
    }

    .screen {
        grid-column-start: 1;
        grid-column-end: 1;
    }

    a {
        text-decoration: none;
        color: var(--color-link);
        outline: none;
    }
    a:hover, a:focus {
        color: var(--color-link-hover);
        outline: none;
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
    }

    span {
        background-color: transparent;
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 600;
        font-size: 22px;
        line-height: 27px;
        letter-spacing: 0.05em;
        mix-blend-mode: overlay;
        text-align: right;
        margin: auto;
        align-self: center;
        justify-content: center;
        color: #FFFFFF;
    }
    span:hover {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 600;
        font-size: 22px;
        line-height: 27px;
        letter-spacing: 0.05em;
        color: #FFFFFF;
        text-align: right;
        margin: auto;
        align-self: center;
        justify-content: center;
    }
    .menu-item {
        cursor: pointer;
    }
</style>