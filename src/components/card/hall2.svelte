<script>
  	import { crossfade, scale } from 'svelte/transition';
    import hall2 from "$lib/images/gallery/4_b.png";
    import hall2_mobile from "$lib/images/gallery/4_s.png";

    let hover = false;

  	function handleMouseOver(e) {
		hover = true;
	}
	function handleMouseOut(e) {
		hover = false;
	}
</script>

<div class="grid-container">
    <div class="grid-item hvr-float" on:mouseover={handleMouseOver} on:mouseout={handleMouseOut}>
        <img src={hall2} alt="SvelteKit"/>
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
        margin: auto;
        vertical-align: middle;
        border: 2px solid #FFFFFF;
    }
    .grid-container {
        display: grid;
        gap: 0.01rem;
        grid-template-columns: 80% 90%;
    }
    .grid-item {
        position: relative;
        align-self: center;
    }
    img {
        max-width: 100%;
        border-radius: 7px;
    }
    div {
        max-width: 80%;
        border-radius: 7px;
        opacity: 0.85;
        display: inline-block;
    }
    div:hover {
        opacity: 1;
        max-width: 100%;
        border-radius: 7px;
        z-index:1;
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
    }
    .hvr-float:hover, .hvr-float:focus, .hvr-float:active {
        -webkit-transform: translateY(-8px);
        transform: translateY(-8px);
    }
</style>