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
        <div class="grid-item icon">
            <a href="https://discord.com/invite/6Yp2dcqHQ3">
                <img class="social_icons" src={discord} alt="SvelteKit" />
            </a>
        </div>

        <div class="grid-item icon">
            <a href="https://twitter.com/spozzclubnft">
                <img class="social_icons" src={twitter} alt="SvelteKit" />
            </a>
        </div>

        <div class="grid-item icon">
            <a href="https://info.spozz.club/">
                <img class="social_icons" src={medium} alt="SvelteKit" />
            </a>
        </div>

        <div class="grid-item icon">
            <a href="https://www.instagram.com/spozz.club.nft/">
                <img class="social_icons" src={instagram} alt="SvelteKit" />
            </a>
        </div>
    </div>
</div>




<style>
    .grid-container {
        display: grid;
        gap: 1.2rem 0.5rem;
        grid-template-rows: 25% 25% 25% 25%;
        grid-template-columns: 50% 50%;
    }
    .grid-item {
        position: relative;
        margin: auto;
    }
    .icons {
        mix-blend-mode: overlay;
        grid-column-start: 2;
        grid-column-end: 2;
        grid-row-start: 1;
        grid-row-end: 4;
    }
    .social_icons {
        mix-blend-mode: overlay;
    }
    .follow {
        height: 9px;
        font-style: normal;
        font-weight: 500;
        font-size: 7px;
        line-height: 9px;
        /* identical to box height */
        letter-spacing: -0.05em;
        color: #FFFFFF;
        mix-blend-mode: overlay;
    }
</style>