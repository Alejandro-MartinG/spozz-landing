<script>
    import title from "$lib/images/art-title.png";
    import line from "$lib/images/small_line.png";
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

<div>
    <span style="font-weight: bold;">Subscribe to our newsletter and receive regular updates about<br> the SPOZZ.club project by e-mail.<br></span>
    <form>
        <label>E-Mail:<input type="email" placeholder="  /enter your email"></label>
        <a href={null} class="btn-p btn btn-primary">SUBMIT</a>
    </form>
</div>

<img class="line" src={line}  alt="SvelteKit"/>

<div>
    <span class="center-text" style="font-weight: bold;">
        Thank you!<br>
        We appreciate your interest in SPOZZ.club very much!<br>
        Check out our awesome community and become a member today!<br>
    </span>
    <div class="btns">
        <a href={null} class="btn1 btn btn-primary">JOIN OUR DISCORD</a>
        <a href={null} class="btn1 btn btn-primary">GET A SPOZZ MEMBERSHIP AVATAR</a>
    </div>
</div>

<style>
    .btns {
        display: flex;
        align-content: center;
    }
    .btn1 {
        margin: auto;
        margin-top: 1rem;
        font-size: 12px;
        line-height: 132%;
        letter-spacing: 0.105em;
        border-radius: 5px;
        border: 1px solid #FFFFFF;
        background-color: transparent;
    }
    .center-text {
        display: flex;
        text-align: center;
        line-height: 30px;
        text-transform: uppercase;
    }
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

    .btn-p {
        margin: auto;
        width: 107px;
        font-size: 11px;
        line-height: 132.1%;
        letter-spacing: 0.105em;
        background: linear-gradient(90deg, #713ACA 0%, #4786D6 100%);
        border-radius: 5px;
        box-shadow: var(--shadow-elevation-medium);
        border: none;
    }
    label {
        font-family: 'Montserrat';
        font-weight: 400;
        font-size: 15px;
        line-height: 210%;
        letter-spacing: 0.000em;
        color: #fff;
    }
    input {
        margin: .5rem;
        display: inline-flex;
        accent-color: rgb(93, 53, 252);
        border-radius: 10px;
        max-width: 370px;
        width: 370px;
        border: none;
    }
    .title {
        mix-blend-mode: overlay;
        align-self: center;
        margin-bottom: 3rem;
    }
    .line {
        width: 100%;
        max-width: 250px;
        margin: 2rem 2rem .5rem 2rem;
    }
</style>