<script>
  import Footer from "../../components/footer.svelte"
  import Logo from "../../components/logo.svelte"
  import formBg from "$lib/images/form_bg.png";

  const title = 'Join to SPOZZ.Club'
</script>

<main>
    <img class="background" src={formBg} alt="SvelteKit" />

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
        flex-direction: column;
        max-width: 1920px;
        max-height: 1080px;
    }
    .background {
        position: absolute;
        z-index: -1;
        max-height: 100%;
        max-width: 100%;
        height: 100%;
        width: 100%;
    }
    .hb {
        display: inline-flex;
        flex-direction: column;
        align-items: flex-end;
    }
    .hbo {
        display: inline-flex;
        flex-direction: column;
        align-items:center;
    }
    span {
        width: 994px;
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
        opacity: 0.8;
    }
    .title3 {
        opacity: 0.6;
    }
    .title4 {
        opacity: 0.3;
    }
</style>