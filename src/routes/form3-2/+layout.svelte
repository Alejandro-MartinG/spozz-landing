<script>
    import Footer from "../../components/footer.svelte"
    import Logo from "../../components/logo.svelte"
    import formBg from "$lib/images/form_bg_3.png";
    import title2 from "$lib/images/join-spozz-linear.png";
    import title1 from "$lib/images/join-spozz.png";
    import { goto } from '$app/navigation';

    $: bgImage = `background-image: url("${formBg}");`;

    let submitted = false;
    function sendEmail(e) {
        goto('./thank-you-2')
    }
</script>

<svelte:body style="background:#260352"></svelte:body>
<main style="{bgImage}">
    <Logo></Logo>

    <div class="hb">
        <img class="title" src={title2}  alt="SvelteKit"/>
        <img class="title" src={title1}  alt="SvelteKit"/>
    </div>

    <div class="hbo">
        <slot/>

        <div class="bot-form">
            <span style="font-weight: 500; font-size: 13px">Subscribe to our newsletter and receive regular updates about the SPOZZ.club project by e-mail.<br></span>
            <form  class:submitted on:submit|preventDefault={sendEmail}>
                <label>E-Mail:<input type="email" placeholder="    /enter your email" required></label>
                <button type="submitted" class="btn-p btn btn-primary" on:click={() => submitted = true}>SUBMIT</button>
            </form>
        </div>
    </div>

    <Footer></Footer>
</main>

<style>
    :global(body) {
        background: linear-gradient(90deg, #713ACA 0%, #4786D6 100%) !important;
    }
    main {
        display: flex;
        flex-direction:column;
        /*
        background-repeat: round;
        */
    }
    .hb {
        display: inline-flex;
        flex-direction: column;
        align-items:center;
    }
    .hbo {
        display: inline-flex;
        flex-direction: column;
        align-items:center;
        margin: 3rem 6rem 12rem 6rem;
        align-self: center;
    }
    .title {
        mix-blend-mode: overlay;
        max-width: 36%;
    }
    .btn-p {
        margin: auto;
        width: 107px;
        font-size: 10px;
        line-height: 132.1%;
        letter-spacing: 0.105em;
        background: linear-gradient(90deg, #713ACA 0%, #4786D6 100%);
        border-radius: 5px;
        box-shadow: var(--shadow-elevation-low);
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
        font-size: 9pt;
        max-width: 370px;
        width: 370px;
        border: none;
        outline: none;
    }
    .bot-form {
        display: flex;
        flex-direction:column;
        align-items: center;
    }
</style>