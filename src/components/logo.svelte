<script>
    import logo from '$lib/images/brand.png'
    import { NavbarBrand } from 'sveltestrap';
</script>

<div class="brand_box">
    <NavbarBrand  href="/" class="logo_box">
        <img class="logo" src={logo} alt="SvelteKit" />
        <span class="logo_text">| SPOZZ</span>
    </NavbarBrand>
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
        width: 89px;
        color: rgba(255, 255, 255, 1);
        position: absolute;
        top: 7.5px;
        left: 21.5px;
        font-weight: Medium;
        font-size: 12px;
        opacity: 1;
        text-align: left;
    }
</style>