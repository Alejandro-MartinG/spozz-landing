<script>
    import line from '$lib/images/line.png'
    import discord from '$lib/images/social-icons/footer/discord.png'
    import twitter from '$lib/images/social-icons/footer/twitter.png'
    import medium from '$lib/images/social-icons/footer/medium.png'
    import instagram from '$lib/images/social-icons/footer/instagram.png'
    import fooIcon from '$lib/images/fooIcon.png'
    import { Row, Col, NavbarBrand } from 'sveltestrap';
</script>


<footer>
    <Row cols={3}>
        <Col xs="auto">
            <NavbarBrand  href="/">
                <img class="logo" src={fooIcon} alt="SvelteKit" />
                <span class="brand_text"> | SPOZZ</span>
            </NavbarBrand>
        </Col>

        <Col xs="auto">
            <img class="line" src={line} alt="SvelteKit" />
        </Col>

        <Col  xs="auto">
            <span class="rights">© SPOZZ.club. All rights reserved. By NFT people, for NFT people.</span>
        </Col>
        <Col></Col>
        <Col>
            <div class="social">
                <a href="https://discord.com/invite/6Yp2dcqHQ3">
                    <img class="social_icons" src={discord} alt="SvelteKit" />
                </a>

                <a href="https://twitter.com/spozzclubnft">
                    <img class="social_icons" src={twitter} alt="SvelteKit" />
                </a>

                <a href="https://info.spozz.club/">
                    <img class="social_icons" src={medium} alt="SvelteKit" />
                </a>

                <a href="https://www.instagram.com/spozz.club.nft/">
                    <img class="social_icons" src={instagram} alt="SvelteKit" />
                </a>
            </div>
        </Col>
    </Row>



</footer>

<style>
    footer {
        height: 164px;
        padding: 2rem;
        padding-top: 3rem;
        background: linear-gradient(180deg, #270E66 0%, #201C6F 100%);
        box-shadow: 0px -10px 57px rgba(0, 0, 0, 0.08);
    }
    .line {
        margin: auto;
        vertical-align: middle;
        height: 5px;
        max-width: 100%;
        padding-right: 2rem;
        border: 1px solid #4D30CC;
        transform: rotate(0.02deg);
    }
    .social {
        float: right;
    }
    .social_icons {
        max-width: 23px;
        max-height: 17px;
    }
    .brand_box_footer {
        width: 101px;
        color: rgba(255, 255, 255, 1);
        padding-left: 1rem;
    }
    .logo {
        width: 19.85px;
        align-items: center;
        padding-top: 1px;
        top: 50%;
        margin-top: -25px;
    }
    .brand_text {
        width: 89px;
        color: rgba(109, 131, 251, 1);
        font-weight: Medium;
        font-size: 14px;
        top: 50%;
        margin-top: -20px;
    }
    .rights {
        font-style: normal;
        font-weight: 600;
        font-size: 10px;
        line-height: 132.1%;
        /* or 13px */
        letter-spacing: 0.15em;
        color: #FFFFFF;
    }
</style>