<script>
    import { backgroundStore } from '../mid-background-store';
  	import { scale } from 'svelte/transition';
    import spozz_card from "$lib/images/gallery/3_b.png";

    let hover = false;

  	function handleMouseOver(e) {
		hover = !hover
        backgroundStore.set('c');
	}
</script>

<div class="grid-container">
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div class="grid-item card-item hvr-float" on:click={handleMouseOver}>
        <img src={spozz_card} alt="SvelteKit"/>
    </div>

   {#if hover}
    <div class="grid-item future" transition:scale>
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
   {/if}
</div>

<style>
    .future {
        vertical-align: middle;
        border: 2px solid #FFFFFF47;
        max-width: 46%;
    }
    .grid-container {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        gap: 0.01rem;
        max-width: 100%;
    }
    .grid-item {
        position: relative;
        align-self: center;
    }
    img {
        max-width: 100%;
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
        max-width: 80%;
    }
    .hvr-float:hover, .hvr-float:focus, .hvr-float:active {
        -webkit-transform: translateY(-8px);
        transform: translateY(-8px);
        max-width: 100%;
    }
</style>