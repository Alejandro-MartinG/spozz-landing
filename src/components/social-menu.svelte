<script>
    import discord from '$lib/images/social-icons/top/discord.png'
    import twitter from '$lib/images/social-icons/top/twitter.png'
    import medium from '$lib/images/social-icons/top/medium.png'
    import instagram from '$lib/images/social-icons/top/instagram.png'
    import vertical from '$lib/images/social-icons/top/vertical.png'
</script>


<div class="grid-container">
    <div class="grid-item follow">
        <span>follow here</span>
    </div>

    <div class="grid-item vertical">
        <img class="social_icons" src={vertical} alt="SvelteKit" />
    </div>

    <div class="grid-item icons">
        <div class="icon discord">
            <a href="https://discord.com/invite/6Yp2dcqHQ3">
                <img class="social_icons" src={discord} alt="SvelteKit" />
            </a>
        </div>

        <div class="icon twitter">
            <a href="https://twitter.com/spozzclubnft">
                <img class="social_icons" src={twitter} alt="SvelteKit" />
            </a>
        </div>

        <div class="icon medium">
            <a href="https://info.spozz.club/">
                <img class="social_icons" src={medium} alt="SvelteKit" />
            </a>
        </div>

        <div class="grid-item icon instagram">
            <a href="https://www.instagram.com/spozz.club.nft/">
                <img class="social_icons" src={instagram} alt="SvelteKit" />
            </a>
        </div>
    </div>
</div>




<style>
    .grid-container {
        display: grid;
        gap: 0.02rem;
        grid-template-rows: 10% 30% 20% 20% 20%;
        grid-template-columns: 50% 50%;
    }
    span {
        font-family: 'Montserrat', sans-serif;
        font-weight: 400;
        letter-spacing: -0.05em;
        mix-blend-mode: overlay;
    }
    .follow {
        max-width: 100%;
        color: #FFFFFF;
        white-space: nowrap;
        grid-column: 1;
        grid-row: 1;
        direction: rtl;
        margin-right: 1.8rem;
    }

    .vertical {
        grid-column: 1;
        grid-row-start: 2;
        grid-row-end: 5;
        margin: 0 auto;
    }

    .icons {
        mix-blend-mode: overlay;
        grid-column: 2;
        grid-row-start: 2;
        grid-row-end: 6;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: end;
    }
    .icon {
        padding-top: 2rem;
    }

    .social_icons {
        display: flex;
        flex-direction: column;
        mix-blend-mode: overlay;
    }

</style>