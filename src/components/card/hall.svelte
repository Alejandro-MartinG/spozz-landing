<script>
    import { backgroundStore } from '../mid-background-store';
  	import { scale } from 'svelte/transition';
    import hall from "$lib/images/gallery/2_b.png";

    let hover = false;

  	function handleMouseOver(e) {
		hover = true;
        backgroundStore.set('b');
	}
	function handleMouseOut(e) {
		hover = false;
	}
</script>

<div class="grid-container hvr-float" on:click={handleMouseOver} on:mouseout={handleMouseOut}>
   {#if hover}
    <div class="grid-item card-item future" transition:scale>
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

    <div class="grid-item card-item">
        <img src={hall} alt="SvelteKit"/>
    </div>
</div>

<style>
    .future {
        vertical-align: middle;
        border: 2px solid #FFFFFF;
        max-width: 30%;
    }
    .grid-container {
        display: inline-flex;
    }
    .grid-item {
        position: relative;
        align-self: center;
    }
    img {
        max-width: 100%;
        border-radius: 7px;
    }
    div > .card-item {
        border-radius: 7px;
        opacity: 0.85;
        display: inline-block;
    }
    div:hover > .card-item {
        opacity: 1;
        border-radius: 7px;
        z-index:1;
    }
    div:hover > .future{
        opacity: 1;
    }

    p {
        color: #FFFFFF;
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 500;
        font-size: 12px;
        line-height: 15px;
        text-align: justify;
        letter-spacing: -0.05em;
        padding: .6rem;
        opacity: 1;
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