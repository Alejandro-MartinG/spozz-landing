<script>
    import Footer from "../../components/footer.svelte"
    import Logo from "../../components/logo.svelte"
    import formBg from "$lib/images/form_bg_3.png";
    import title2 from "$lib/images/join-spozz-linear.png";
    import title1 from "$lib/images/join-spozz.png";
    import line from "$lib/images/small_line.png";

    $: bgImage = `background-image: url("${formBg}");`;
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
        margin: 10.6rem 6rem 18rem 6rem;
        align-self: center;
    }
    .title {
        mix-blend-mode: overlay;
    }
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
    .btn1:hover {
        margin: auto;
        margin-top: 1rem;
        font-size: 10px;
        line-height: 132%;
        letter-spacing: 0.105em;
        border-radius: 5px;
        border: none;
        background: linear-gradient(90deg, #713ACA 0%, #4786D6 100%);
    }
    .center-text {
        display: flex;
        text-align: center;
        line-height: 17px;
        font-size: 10pt;
        font-weight: 500;
    }
    .btn-p {
        margin: auto;
        width: 107px;
        font-size: 10px;
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
        font-size: 9pt;
        max-width: 370px;
        width: 370px;
        border: none;
        outline: none;
    }
    .line {
        width: 100%;
        max-width: 250px;
        margin: 2rem 2rem .5rem 2rem;
    }
</style>