<script>
    import { backgroundStore } from '../mid-background-store';
  	import { scale } from 'svelte/transition';
    import egirl from '$lib/images/gallery/1_b.png'
    import line from '$lib/images/gallery/title-line.png'


    export let hover = false;

  	function handleMouseOver(e) {
		hover = !hover;
        backgroundStore.set('a');
	}
</script>

<div class="grid-container">
    {#if hover}
    <div class="description">
        <div class="future" transition:scale>
            <p>
                Become part of the community that operates
                and owns the SPOZZ NFT market and music
                club and chage the way how art, music,
                movies or photos are distributed, consumed
                and monetized. SPOZZ tokens are a new
                medium of exchange that rewards creators and
                users for their contributions to the community.
                100% of the net benefits of SPOZZ.club are paid
                out to the token holders.
            </p>
        </div>
        <div class="title" transition:scale>
            <span class="selected-text text">MEMBERS: SHARE THE PIE AND GROW<br>YOUR BENEFITS.</span>
            <img src={line} class="line" alt="SvelteKit"/>
        </div>
    </div>
    {/if}

    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div class="grid-item card-item hvr-float" on:click={handleMouseOver}>
        <img src={egirl} class="image-card" alt="SvelteKit"/>
    </div>
</div>

<style>
    .future {
        vertical-align: middle;
        border: 2px solid #FFFFFF47;
        max-width: 76%;
        margin-bottom: 2rem;
    }
    .description {
        margin: auto;
        display: flex;
        flex-direction: column;
        width: 77%;
        align-items: end;
    }
    .title {
        display: flex;
        flex-direction: column;
        align-items: end;
    }
    .line {
        opacity: .2;
        mix-blend-mode: overlay;
        max-width: 77%;
    }
    .grid-container {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        gap: 0rem;
        max-width: 100%;
    }
    .grid-item {
        position: relative;
        align-self: center;
    }
    .image-card {
        max-width: 95%;
        border-radius: 7px;
        box-shadow: var(--shadow-elevation-high);
    }
    div > .card-item {
        border-radius: 7px;
        display: inline-block;
    }
    p {
        color: #FFFFFF;
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 15px;
        text-align: justify;
        letter-spacing: -0.05em;
        padding: .6rem;
    }
    .hvr-float {
        display: inline-block;
        vertical-align: middle;
        -webkit-transform: perspective(1px) translateZ(0);
        transform: perspective(1px) translateZ(0);
        box-shadow: 0 0 1px rgba(0, 0, 0, 0);
        -webkit-transition-duration: 0.3s;
        transition-duration: 0.3s;
        -webkit-transition-property: transform;
        transition-property: transform;
        -webkit-transition-timing-function: ease-out;
        transition-timing-function: ease-out;
        max-width: 85%;
    }
    .hvr-float:hover, .hvr-float:active {
        -webkit-transform: translateY(-2px);
        transform: translateY(-2px);
        max-width: 90%;
    }
    .text {
        text-align: right;
        letter-spacing: 0.04rem;
        line-height: 29px;
        font-size: 21px;
        font-style: normal;
        font-weight: 600;
    }
    .selected-text {
        width: 841px;
        color: #BF23FF;
    }
</style>