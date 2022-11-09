<script>
    import spozz_card from "$lib/images/gallery/3_b.png";
    import egirl from '$lib/images/gallery/1_b.png'
    import hall from "$lib/images/gallery/2_b.png";
    import hall2 from "$lib/images/gallery/4_b.png";
    import frameBig from "$lib/images/gallery/frame_b.png";
    import lineRight from '$lib/images/gallery/title-line-right.png'
    import lineLeft from '$lib/images/gallery/title-line-left.png'

	$: borderImage = `border-image: url("${frameBig}") /* source */ 25 / /* slice */ 1.5rem 28px 28px
    28px / /* width */ 1px 42px 1px 42px /* outset */ round; /* repeat */;`;
</script>

<div class="margin-wrapper">
    <div class="grid-container" style="{borderImage}">
        <div class="grid-item">
            <div class="image">
                <img src={spozz_card} alt="SvelteKit"/>
            </div>

            <div class="description">
                <div class="title title-right">
                    <span class="selected-text text"><span class="italic-text">Creators</span>: Earn more and get paid directly<br> and instantly for your digital content</span>
                    <img src={lineRight} class="line" alt="SvelteKit"/>
                </div>
                <div class="text-right">
                    <p>
                        SPOZZ.club is an entirely new way of monetizing your digital creations. You can sell your creations to an unlimited number of fans, traders and investors and collect income from multiple sources such as views, trades and royalties from the distribution to all major digital streaming and broadcast platforms.
                    </p>
                </div>
            </div>
        </div>

        <div class="grid-item">
            <div class="description">
                <div class="title">
                    <span><span class="italic-text">fans</span>: Own the creations of your<br> favorite artists</span>
                    <img src={lineLeft} class="line" alt="SvelteKit"/>
                </div>
                <div class="text-left">
                    <p>
                        Invest in your favorite artist's work. Buy early into new limited releases and help independent artists to fund new creations. Sense what’s hot and trendy and make good money by selling it later to the secondary market on SPOZZ or any other NFT marketplace.
                    </p>
                </div>
            </div>

            <div class="image">
                <img src={hall} alt="SvelteKit"/>
            </div>
        </div>

        <div class="grid-item">
            <div class="image">
                <img src={egirl} alt="SvelteKit"/>
            </div>

            <div class="description">
                <div class="title title-right">
                    <span class="selected-text text"><span class="italic-text">MEMBERS</span>: SHARE THE PIE AND GROW<br>YOUR BENEFITS</span>
                    <img src={lineRight} class="line" alt="SvelteKit"/>
                </div>
                <div class="text-right">
                    <p>
                        Become part of the community that operates
                        and owns the SPOZZ NFT market and music
                        club and chage the way how art, music,
                        movies or photos are distributed, consumed
                        and monetized. SPOZZ tokens are a new
                        medium of exchange that rewards creators and
                        users for their contributions to the community.
                        100% of the net benefits of SPOZZ.club are paid
                        out to the token holders.
                    </p>
                </div>
            </div>
        </div>

        <div class="grid-item">
            <div class="description">
                <div class="title">
                    <span><span class="italic-text">Investors and traders</span></span>
                    <img src={lineLeft} class="line" alt="SvelteKit"/>
                </div>
                <div class="text-left">
                    <p>
                        A song, video or artwork you used to download and pay for now belongs to you. You can view it, collect it, earn royalties from it or trade it. 
                        SPOZZ is a community owned marketplace where creators sell their music, movies, photos and other digital creations for fans and collectors to buy directly.
                    </p>
                </div>
            </div>

            <div class="image">
                <img src={hall2} alt="SvelteKit"/>
            </div>
        </div>
    </div>
</div>

<style>
    .margin-wrapper {
        display: grid;
        gap: 0.5rem;
        grid-template-columns: 16% 67% 16%;
        align-self: center;
        max-width: 100%;
        margin-bottom: 6rem;
    }
    .grid-container {
        grid-column: 2;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        max-width: 100%;
        margin: auto;

        padding-top: 5rem;
        padding-bottom: 2rem;
        border-style:ridge;
    }
    .grid-item {
        display: flex;
        align-items:center;
        margin-bottom: 4rem;
    }
    .text-right {
        vertical-align: middle;
        border-top: 2px solid #FFFFFF47;
        border-bottom: 2px solid #FFFFFF47;
        border-right: 2px solid #FFFFFF47;
    }
    .text-left {
        vertical-align: middle;
        border-top: 2px solid #FFFFFF47;
        border-bottom: 2px solid #FFFFFF47;
        border-left: 2px solid #FFFFFF47;
    }
    p {
        color: #FFFFFF;
        font-family: 'Montserrat', sans-serif;
        font-weight: 500;
        font-size: 17pt;
        line-height: 25pt;
        text-align: justify;
        padding: 2rem 3rem .9rem 3.5rem;
    }
    .image > img {
        border-radius: 40px;
        box-shadow: var(--shadow-elevation-high);
    }
    .title {
        display: flex;
        flex-direction: column;
        margin-bottom: 2rem;
        text-transform: uppercase;
    }
    .title-right {
        align-items: end;
        text-align: right;
    }
    .title > span {
        font-family: 'Montserrat', sans-serif;
        font-weight: 600;
        font-size: 18pt;
        color: #BF23FF;
        mix-blend-mode: color-dodge;
    }
    .italic-text {
        font-weight: 700;
        color: #BF23FF;
        mix-blend-mode: color-dodge;
        font-style: italic;
    }
    .line {
        opacity: .4;
        max-width:100%;
    }
</style>