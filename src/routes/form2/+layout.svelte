<script>
    import Footer from "../../components/footer.svelte"
    import Logo from "../../components/logo.svelte"
    import formBg from "$lib/images/form_bg_2.png";
    import title2 from "$lib/images/join-spozz-linear.png";
    import title1 from "$lib/images/join-spozz.png";
    import line from "$lib/images/small_line.png";

    $: bgImage = `background-image: url("${formBg}");`;
</script>

<main style="{bgImage}">
    <Logo></Logo>

    <div class="hb">
        <img class="title" src={title2}  alt="SvelteKit"/>
        <img class="title" src={title2}  alt="SvelteKit"/>
        <img class="title" src={title2}  alt="SvelteKit"/>
        <img class="title" src={title1}  alt="SvelteKit"/>
    </div>

    <div class="hbo">
        <slot/>

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

    </div>

    <Footer></Footer>
</main>

<style>
    main {
        display: flex;
        flex-direction:column;
        background-repeat: round;
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
        margin: 3rem 6rem 3rem 6rem;
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
    .center-text {
        display: flex;
        text-align: center;
        line-height: 30px;
        text-transform: uppercase;
    }
    .line {
        width: 100%;
        max-width: 250px;
        margin: 2rem 2rem .5rem 2rem;
    }
</style>