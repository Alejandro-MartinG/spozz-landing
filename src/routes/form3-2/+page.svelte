<script>
    import title from "$lib/images/invest-title.png";
    import title2 from "$lib/images/art-title-2.png";
</script>

<img class="title" src={title}  alt="SvelteKit"/>
<img class="title2" src={title2}  alt="SvelteKit"/>

<div class="cardo">
  <div class="card-header">Be first to invest in valuable artwork of upcoming artists!</div>
  <div class="card-body">
    Assess what's hot and trendy and buy early into new limited releases.<br><br>
    You may trade it later on SPOZZ.club or any other NFT marketplace.
  </div>
</div>

<div class="cardo">
  <div class="card-header">Join SPOZZ.club and receive great member benefits!</div>
  <div class="card-body">
    Get a member avatar and enjoy the benefits!<br><br> 

    Claim SPOZZ tokens in the Airdrop and receive your share of the social clubs' monthly benefits by staking them.<br><br> 

    Receive rewards for trading your NFTs on SPOZZ.club.

  </div>
</div>

<style>
    .cardo {
        display: flex;
        flex-direction: column;
        align-content: center;
        margin: auto;
        margin-bottom: 1.5rem;
        width: 100%;
        height: 100%;
        max-width: 500px;

        border: 1px solid #FFFFFFFF;
        box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.25);
        border-radius: 5px;
        overflow:hidden;
    }
    .card-body {
        display: flex;
        flex-direction: column;
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 550;
        font-size: 14px;
        line-height: 15px;
        letter-spacing: -0.05em;

        background: #FFFFFF;
        color: #5658CF;
    }
    .card-header {
        display: block;
        text-align: center;
        color: #fff;
        background: transparent;
        font-family: 'Montserrat';
        font-weight: 600;
        letter-spacing: -0.03em;
        font-size: 11pt;
    }
    .title {
        mix-blend-mode: overlay;
        align-self: center;
        margin-bottom: .3rem;
    }
    .title2 {
        mix-blend-mode: overlay;
        align-self: center;
        margin-bottom: 3rem;
    }
</style>