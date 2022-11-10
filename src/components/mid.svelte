<script>
    import Screen from "./screen/marketplace.svelte"

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
    <div class="grid-item screen">
        <Screen value={screen}></Screen>
    </div>

    <div class="grid-item menu">
        <nav class="nav">
            <ul class="menu">
                <li class="menu-item">
                    <a href={null} on:click|preventDefault={event =>handleClick('bg1')}>
                        SPOZZ MARKETPLACE (BETA)
                    </a> 
                </li>
                <li class="menu-item">
                    <a href={null} on:click|preventDefault={event =>handleClick('bg2')}>
                        SPOZZ BLOG (BETA)
                    </a> 
                </li>
                <li class="menu-item">
                    <a href={null} on:click|preventDefault={event =>handleClick('bg3')}>
                        SPOZZ TOKENIZZER (BETA)
                    </a> 
                </li>
                <li class="menu-item">
                    <a href={null} on:click|preventDefault={event =>handleClick('bg4')}>
                        JOIN OUR DISCORD
                    </a> 
                </li>
                <li class="menu-item">
                    <a href={null} on:click|preventDefault={event =>handleClick('bg5')}>
                        SPOZZ TOKEN
                    </a> 
                </li>
                <li class="menu-item">
                    <a href={null} on:click|preventDefault={event =>handleClick('bg6')}>
                        PROJECT INFORMATION
                    </a> 
                </li>
            </ul>
        </nav>
    </div>

</div>

<style>
    .mid {
        max-width: 100%;
        padding-top: 4rem;
        margin-bottom: 4rem;
    }
    .grid-container {
        display: grid;
        gap: 0.5rem;
        grid-template-columns: 13% 52% 23% 12%;
        padding: 1rem;
        overflow:hidden;
        align-self: center;
        max-width: 100%;
        height: 750px;
    }
    .menu {
        margin-top: 10rem;
        grid-column: 3;
        text-align: right;
    }
    .screen {
        grid-column: 2;
        grid-row: 1;
    }
    a {
        text-decoration: none;
        outline: none;
        font-family: 'Montserrat';
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
    a:hover, a:focus, a:active, a:link {
        outline: none;
        font-family: 'Montserrat';
        font-weight: 600;
        font-size: 22px;
        line-height: 27px;
        letter-spacing: 0.05em;
        color: #FFFFFF;
        text-align: right;
        margin: auto;
        align-self: center;
        justify-content: center;
        mix-blend-mode: normal;
        border-bottom: 1px solid white;
    }
    .grid-item {
        position: relative;
        margin: auto;
    }
    .menu-item {
        cursor: pointer;
        padding: 0.5rem;
    }
    li {
        list-style-type: none;  
    }
</style>