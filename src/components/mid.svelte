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
        bg4: 'd',
        bg5: 'e',
        bg6: 'f'
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

    <div class="grid-item menu">
        <nav class="nav">
            <ul class="menu">
                <li class="menu-item">
                    <a href={undefined} on:click|preventDefault={event =>handleClick('bg1')}>
                        <span>SPOZZ MARKETPLACE (BETA)</span>
                    </a> 
                </li>
                <li class="menu-item">
                    <a href={null} on:click|preventDefault={event =>handleClick('bg2')}>
                        <span>SPOZZ BLOG (BETA)</span>
                    </a> 
                </li>
                <li class="menu-item">
                    <a href={null} on:click|preventDefault={event =>handleClick('bg3')}>
                        <span>SPOZZ TOKENIZZER (BETA)</span>
                    </a> 
                </li>
                <li class="menu-item">
                    <a href={null} on:click|preventDefault={event =>handleClick('bg4')}>
                        <span>JOIN OUR DISCORD</span>
                    </a> 
                </li>
                <li class="menu-item">
                    <a href={null} on:click|preventDefault={event =>handleClick('bg5')}>
                        <span>SPOZZ TOKEN</span>
                    </a> 
                </li>
                <li class="menu-item">
                    <a href={null} on:click|preventDefault={event =>handleClick('bg6')}>
                        <span>PROJECT INFORMATION</span>
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
        grid-column: 2;
        grid-row: 1;
        text-align: right;
    }

    .screen {
        grid-column: 1;
        grid-row: 1;
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
        grid-row: 2;
        grid-column-start: 1;
        grid-column-end: 3;
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
        text-align: right;
        margin: auto;
        align-self: center;
        justify-content: center;
        color: #BF23FF;
        mix-blend-mode: color-dodge;
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
        padding: 0.5rem;
    }
</style>