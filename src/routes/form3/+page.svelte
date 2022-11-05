<script>
    import title from "$lib/images/art-title.png";
    import invest from "$lib/images/invest-title.png";
</script>

<img class="title" src={title}  alt="SvelteKit"/>

<div class="cardo">
  <div class="card-header">Music fans : Own a song of your preferred artist:</div>
  <div class="card-body">
    You can now buy a song, listen to it, collect it and earn royalties from its reproduction in streaming and  oadcast media. You can sell it  ytime or surprise a person you like with a gift!
  </div>
</div>

<div class="cardo">
  <div class="card-header">Investors, collectors and traders:</div>
  <div class="card-body">
    Buy your favorite artist's newest creations of art on SPOZZ.club: Sense what's hot and trendy, buy early into new limited releases and build a valuable collection of digital artworks.
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
        text-transform: capitalize;

        color: #5658CF;
    }
    .card-header {
        display: block;
        text-align: center;
        color: #fff;
        background: linear-gradient(90deg, #713ACA 0%, #4786D6 100%);
        font-family: 'Montserrat';
        font-weight: 800;
        letter-spacing: -0.03em;
        text-transform: uppercase;
    }
    .title {
        mix-blend-mode: overlay;
        align-self: center;
        margin-bottom: 3rem;
    }
</style>