<script>
    import Footer from "../../components/footer.svelte"
    import Logo from "../../components/logo.svelte"
    import formBg from "$lib/images/form_bg.png";

    const title = 'Join to SPOZZ.Club'

    $: bgImage = `background-image: url("${formBg}");`;
    // $: width = `width: ${w}px;`;
    // $: height = `height: ${h}px;`;
    // $: bgSize = `background-size: calc(100% * ${rows}) calc(100% * ${cols});`;
    // $: bgPos = `background-position: ${current * -w}px ${-h}px;`;
</script>

<main style="{bgImage}">
    <Logo></Logo>

    <div class="hb">
        <span class="title3">{title}</span>
        <span class="title2">{title}</span>
        <span class="title1">{title}</span>
    </div>

    <div class="hbo">
        <slot></slot>
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
        align-items: flex-end;
        margin-right: 3rem;
    }
    .hbo {
        margin: 6rem 12rem 6rem 6rem;
        align-self: end;
    }
    span {
        height: 98px;
        font-family: "Montserrat";
        font-weight: "bold";
        font-style: 880;
        font-size: 96px;
        line-height: 117px;
        mix-blend-mode: overlay;
    }
    .title1 {
        opacity: 0.3;
    }
    .title2 {
        opacity: 0.6;
    }
    .title3 {
        opacity: 0.8;
    }
</style>