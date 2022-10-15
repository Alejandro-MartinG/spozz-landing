<script>
  	import { crossfade, scale } from 'svelte/transition';
    import egirl from '$lib/images/gallery/egirl.png'

    let images = [
      {
        name: "egirl",
        url: "$lib/images/gallery/egirl.png",
      },
      {
        name: "",
        url: "$lib/images/gallery/hall.png",
      },
      {
        name: "",
        url: "$lib/images/gallery/spozz_card.png",
      },
      {
        name: "",
        url: "$lib/images/gallery/hall2.png",
      },
    ];

    let hover = false;

  	function handleMouseOver(e) {
		hover = true;
	}
	function handleMouseOut(e) {
		hover = false;
	}
</script>

<div class="mb-12">
    <div class="row g-0" >
        <div class="col-md-6"  on:mouseover={handleMouseOver} on:mouseout={handleMouseOut}>
            <img src={egirl} alt="SvelteKit"/>
        </div>

        {#if hover}
        <div class="col-md-6" >
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
        {:else}
        <div class="col-md-6" ></div>
        {/if}
    </div>
</div>

<style>
    img {
        max-width: 100%;
        border-radius: 7px;
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