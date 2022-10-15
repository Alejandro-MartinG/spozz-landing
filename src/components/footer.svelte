<script>
    import line from '$lib/images/line.png'
    import discord from '$lib/images/social-icons/discord.png'
    import twitter from '$lib/images/social-icons/twitter.png'
    import other from '$lib/images/social-icons/other.png'
    import instagram from '$lib/images/social-icons/instagram.png'
    import fooIcon from '$lib/images/fooIcon.png'
    import Grid from 'svelte-grid-responsive'
    import { Button, Col, Row } from 'sveltestrap';
</script>


<footer>
    <Grid container gutter={20}>
        <Grid>
            <div class="brand_box_footer">
                <img class="logo" src={fooIcon} alt="SvelteKit" />
                <span class="brand_text"> | SPOZZ</span>
            </div>
        </Grid>
    </Grid>

    <Grid container gutter={20}>
        <Grid>
            <img class="line" src={line} alt="SvelteKit" />
        </Grid>
    </Grid>

    <Grid container gutter={20} columns={2}>
        <Grid>
            <span class="rights">© SPOZZ.club. All rights reserved. By NFT people, for NFT people.</span>
        </Grid>

        <Grid>
            <div class="social">
                <img class="social_icons" src={discord} alt="SvelteKit" />
                <img class="social_icons" src={twitter} alt="SvelteKit" />
                <img class="social_icons" src={other} alt="SvelteKit" />
                <img class="social_icons" src={instagram} alt="SvelteKit" />
            </div>
        </Grid>
    </Grid>
</footer>

<style>
    .column {
        padding: 2rem;
    }
    .row_grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 1rem;
        padding: 2rem;
    }
    .grid {
        display: grid;
        grid-template-rows:  1fr 1fr 1fr;
        grid-gap: 1rem;
    }

    footer {
        height: 164px;
        padding: 2rem;
        padding-top: 4rem;
        background: linear-gradient(180deg, #270E66 0%, #201C6F 100%);
        box-shadow: 0px -10px 57px rgba(0, 0, 0, 0.08);
    }
    .line {
        margin: auto;
        vertical-align: middle;
        height: 5px;
        max-width: 100%;
        color: rgba(255, 255, 255, 1);
        padding-right: 2rem;
    }
    .social {
        float: right;
        padding-right: 3rem;
    }
    .social_icons {
        width: 23px;
        height: 17px;
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
        position: absolute;
        top: 50%;
        margin-top: -25px;
    }
    .brand_text {
        width: 89px;
        color: rgba(109, 131, 251, 1);
        font-weight: Medium;
        font-size: 14px;
        padding-left: 1.75rem;
        position: absolute;
        top: 50%;
        margin-top: -20px;
    }
    .rights {
        width: 430px;
        color: rgba(255, 255, 255, 1);
        font-weight: SemiBold;
        font-size: 10px;
        padding-left: 1rem;
    }
</style>