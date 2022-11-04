<script>
    import Footer from "../../components/footer.svelte"
    import Logo from "../../components/logo.svelte"
    import formBg from "$lib/images/form_bg.png";
    import title2 from "$lib/images/join-spozz-linear.png";
    import title1 from "$lib/images/join-spozz.png";

    $: bgImage = `background-image: url("${formBg}");`;
    // $: width = `width: ${w}px;`;
    // $: height = `height: ${h}px;`;
    // $: bgSize = `background-size: calc(100% * ${rows}) calc(100% * ${cols});`;
    // $: bgPos = `background-position: ${current * -w}px ${-h}px;`;
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
    .title {
        mix-blend-mode: overlay;
    }
</style>