<script>
  	import { crossfade, scale } from 'svelte/transition';
    import egirl from '$lib/images/gallery/egirl.png'

    let hover = false;

  	function handleMouseOver(e) {
		hover = true;
	}
	function handleMouseOut(e) {
		hover = false;
	}
</script>

<div class="grid-container">
    <div class="grid-item" on:mouseover={handleMouseOver} on:mouseout={handleMouseOut}>
        <img src={egirl} alt="SvelteKit"/>
    </div>

    <div class="grid-item">
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
</div>

<style>
    .grid-container {
        display: grid;
        gap: 0.01rem;
        grid-template-columns: 80% 90%;
    }
    .grid-item {
        position: relative;
    }
    img {
        max-width: 100%;
        border-radius: 7px;
        box-shadow: 7px 7px 16px rgba(0, 0, 0, 0.37);
    }
    div {
        max-width: 100%;
        border-radius: 7px;
        opacity: 0.85;
        display: inline-block;
    }
    div:hover {
        opacity: 1;
    }
    p {
        color: #FFFFFF;
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 17px;
        text-align: justify;
        letter-spacing: -0.05em;
    }
</style>