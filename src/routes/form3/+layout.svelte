<script>
    import Footer from "../../components/footer.svelte"
    import Logo from "../../components/logo.svelte"
    import formBg from "$lib/images/form_bg_3.png";
    import title2 from "$lib/images/join-spozz-linear.png";
    import title1 from "$lib/images/join-spozz.png";

    $: bgImage = `background-image: url("${formBg}");`;
    // $: width = `width: ${w}px;`;
    // $: height = `height: ${h}px;`;
    // $: bgSize = `background-size: calc(100% * ${rows}) calc(100% * ${cols});`;
    // $: bgPos = `background-position: ${current * -w}px ${-h}px;`;
</script>

<svelte:body style="background:#260352"></svelte:body>
<main style="{bgImage}">
    <Logo></Logo>

    <div class="hb">
        <img class="title2" src={title2}  alt="SvelteKit"/>
        <img class="title1" src={title1}  alt="SvelteKit"/>
    </div>

    <div class="hbo">
        <slot></slot>
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
        margin: 3rem 6rem 3rem 6rem;
        align-self: center;
    }
    .title1 {
        mix-blend-mode: overlay;
    }
    .title2 {
        mix-blend-mode: overlay;
    }
</style>