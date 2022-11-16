<script>
    import title from "$lib/images/invest-title.png";
</script>

<img class="title" src={title}  alt="SvelteKit"/>

<div class="cardo">
  <div class="card-header">Invest</div>
  <div class="card-body">
    Invest in valuable artwork of upcoming artists.<br><br>
    Assess what's hot and trendy and buy early into new limited releases.<br><br> 
    You may sell it later to the secondary market on SPOZZ.club or any other NFT marketplace.
  </div>
</div>

<div class="cardo">
  <div class="card-header">Spozz Token</div>
  <div class="card-body">
    Claim SPOZZ tokens in the airdrop and stake them for participation in the benefits of the marketplace.<br><br> 
    Receive rewards for selling your NFTs on SPOZZ.club
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

        background: #FFFFFF;
        box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.25);
        border-radius: 10px;
        overflow:hidden;
    }
    .card-body {
        display: flex;
        flex-direction: column;
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 17px;
        letter-spacing: -0.05em;

        color: #5658CF;
    }
    .card-header {
        display: block;
        text-align: center;
        color: #fff;
        background: linear-gradient(90deg, #713ACA 0%, #4786D6 100%);
        font-family: 'Montserrat';
        font-weight: bold;
        letter-spacing: -0.03em;
        font-size: 10pt;
    }
    .title {
        mix-blend-mode: overlay;
        align-self: center;
        margin-bottom: 3rem;
    }
</style>