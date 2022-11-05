<script>
    import headTitle from "$lib/images/music-title.png";

    let radioSelector = 'yes';
    let selected = 'Plain';
    let disabled = false;
</script>

<img class="title" src={headTitle}  alt="SvelteKit"/>

<div class="top">
</div>

<div class="">
    <span style="font-weight: bold;">Musicians: Earn more and get paid directly and instantly<br> for your songs!<br></span>

    <span>
        On SPOZZ.club you can sell your songs as an NFT to an unlimited<br>
        number of fans, traders and investors. You receive funds immediately<br>
        and collect royalties from secondary sales of the NFT (trading).<br><br>

        You can opt in to collect royalties from the distribution of your music<br>
        to all major digital streaming and broadcast platforms through<br>
        SPOZZ.club and cash-in on those future revenues immediately: fully<br>
        or partially, you choose!<br><br>
    </span>
</div>

<div class="cardo">
  <div class="card-header">Pre-register now to be among the first on the SPOZZ.club platform on launch day.</div>

  <div class="card-body">
    <form class="content">
        <label>Artist / Band Name<br>
            <input type="text" placeholder="/ enter information"/>
        </label>
        <label>Contact Person First Name<br>
            <input type="text" placeholder="/ enter information"/>
        </label>
        <label>Contact Person Last Name<br>
            <input type="text" placeholder="/ enter information"/>
        </label>
        <label>Role<br>
            <input type="text" placeholder="/ enter your role"/>
        </label>
        <label>E-Mail<br>
            <input name="email" type="email" autocomplete placeholder="/ enter your email" value=''/>
        </label>
        <label>Phone<br>
            <input type="tel" placeholder="/ enter information"/>
        </label>
        <label>Country<br>
            <input type="text" placeholder="/ enter information"/>
        </label>
        <label>Spotify<br>
            <input type="text" placeholder="/ enter information"/>
        </label>
        <label>Youtube<br>
            <input type="text" placeholder="/ enter information"/>
        </label>
        <label>Instagram<br>
            <input type="text" placeholder="/ enter information"/>
        </label>
        <label>Twitter<br>
            <input type="url" placeholder="/ enter information"/>
        </label>
        <label>Website<br>
            <input type="url" placeholder="/ enter information"/>
        </label>
        <label>Comments<br>
            <input class="comment" type="text" placeholder="/ enter information"/>
        </label>

        <div class="bottom-text">
            <span>Thank you for your interest in SPOZZ.club.<br></span>
            <span style="font-weight: bold;">We will contact you shortly!<br></span>
        </div>

        <div class="card-radio">
            <span class="blue-text">Do you want to receive news by e-mail and subscribe to our newsletter?<br></span>

            <label>
                <input type="radio" bind:group={radioSelector} value="yes">Yes 
            </label>

            <label>
                <input type="radio" bind:group={radioSelector} value="no">No 
            </label>
        </div>

        <a href={null} class="btn btn-primary">SUBMIT</a>
    </form>
  </div>
</div>

<style>
    .blue-text {
        font-weight: bold;
        text-transform: capitalize;
        background: linear-gradient(90deg, #713ACA 0%, #4786D6 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
    }
    .top {
        margin-top: 2rem;
        margin-bottom: 2rem;
    }
    .cardo {
        display: flex;
        flex-direction: column;
        align-content: center;
        margin: auto;
        width: 100%;
        height: 100%;
        max-width: 750px;

        background: #FFFFFF;
        box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.25);
        border-radius: 21px;
        overflow:hidden;
    }
    .card-body {
        display: flex;
        flex-direction: column;
        align-items:center;
    }

    .card-header {
        font-weight: bold;
        display: block;
        text-align: center;
        color: #fff;
        background: linear-gradient(90deg, #713ACA 0%, #4786D6 100%);
    }

    .card-radio {
        margin: auto;
        display: flex;
        flex-direction: column;
    }
    .btn {
        margin: auto;
        width: 107px;
        font-size: 11px;
        line-height: 132.1%;
        letter-spacing: 0.105em;
        background: linear-gradient(90deg, #713ACA 0%, #4786D6 100%);
        border-radius: 5px;
    }
    form {
        text-align: center;
    }
    .content > label {
        font-family: 'Montserrat';
        font-weight: bold;
        font-size: 15px;
        line-height: 210%;
        letter-spacing: 0.000em;
        max-width: 580px;
        width: 100%;
        margin: auto;
        margin-top: .8rem;
        text-align: left;
        color: #686868;
    }
    .content > label > input {
        accent-color: rgb(93, 53, 252);
        max-width: 580px;
        width: 100%;
        margin: auto;
        border-radius: 9px;
        opacity: .5;
        border: 1px solid;
    }
    .bottom-text > span {
        color: #7B7B7B;
    }
    .title {
        mix-blend-mode: overlay;
    }
    .comment {
        height: 100px;
    }
    .bottom-text {
        margin: 2rem;
    }
</style>