<script>
    import title from "$lib/images/art-title.png";
</script>

<img class="title" src={title}  alt="SvelteKit"/>

<div class="cardo">
  <div class="card-header">Music fans: Own a song of your favourite</div>
  <div class="card-body">
    On SPOZZ.club you can buy a song, listen to it, collect it and earn royalties from its reproduction on streaming. <br><br>
    Sell it anytime or surprise a loved one with a gift !
  </div>
</div>

<div class="cardo">
  <div class="card-header">Art lovers and collectors: Buy your favourite artists' newest creations on SPOZZ.club!</div>
  <div class="card-body">
    Assess what’s hot and trendy, buy early into new limited releases and build a valuable collection of digital artwork.
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
        border-radius: 5px;
        box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.25);
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

        background: #FFFFFF;
        color: #5658CF;
    }
    .card-header {
        display: block;
        text-align: center;
        color: #fff;
        background: transparent;
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