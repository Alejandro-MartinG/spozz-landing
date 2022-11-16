<script>
    import Footer from "../../components/footer.svelte"
    import Logo from "../../components/logo.svelte"
    import formBg from "$lib/images/form_bg_2.png";
    import title2 from "$lib/images/join-spozz-linear.png";
    import title1 from "$lib/images/join-spozz.png";

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
</style>