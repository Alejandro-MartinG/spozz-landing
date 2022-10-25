<script>
    import logo from '$lib/images/brand.png'
</script>

<div class="brand_box">
    <img class="logo" src={logo} alt="SvelteKit" />
    <span class="logo_text">  </span>
    <span class="logo_text">| SPOZZ</span>
</div>

<style>
    .brand_box {
        width: 101px;
        height: 25px;
        position: absolute;
        top: 24px;
        left: 55px;
        color: rgba(255, 255, 255, 1);
    }
    .logo {
        width: 19.85px;
    }
    .logo_text {
        width: 74px;
        color: rgba(255, 255, 255, 1);
        position: absolute;
        top: 5px;
        left: 27px;
        font-weight: Medium;
        font-size: 12px;
        opacity: 1;
        text-align: left;
    }
</style>