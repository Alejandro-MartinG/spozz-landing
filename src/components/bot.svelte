<script>
    import src from '$lib/images/bot.png'
</script>

<div class="bot grid">
        <p class="bot_text">
            SPOZZ.club is a community run NFT marketplace and Music Club changing the way digital
            creations are distributed, cosumed and monetized.
        </p>

        <div class="center-button">
            <div/>
            <button>
                <span class="button_text">Join to SPOZZ.Club</span>
            </button>
            <div/>
        </div>

    <img {src} class="bot_background" alt="SvelteKit"/>
</div>

<style>
    .bot {
        width: 100%;
        height: 661px;
    }
    .grid {
        display: grid;
        grid-template-rows:  1fr 1fr;
        grid-template-columns:  1fr;
        grid-gap: 1rem;
    }
    .bot_background {
        height: 661px;
        width: 120%;
        position: absolute;
        z-index: -1;
    }
    .bot_text {
        width: 77%;
        margin: auto;
        color: rgba(255, 255, 255, 1);
        font-family: Montserrat;
        font-weight: Medium;
        font-size: 24px;
        text-align: center;
        justify-content: center;
        vertical-align: middle;
        align-items: center;
        padding-top: 2rem;
    }
    .center-button {
        display: grid;
        width: 100%;
        margin: auto;
        grid-template-columns:  1fr 1fr 1fr;
        grid-gap: 1rem;
        padding: 2rem;
    }
    button {
        margin: auto;
        width: 139px;
        height: 37px;
        background: rgba(255, 255, 255, 1);
        border-top-left-radius: 7px;
        border-top-right-radius: 7px;
        border-bottom-left-radius: 7px;
        border-bottom-right-radius: 7px;
        overflow: hidden;
    }
    .button_text {
        vertical-align: middle;
        margin: auto;
        width: 98px;
        color: rgba(74, 63, 91, 1);
        font-family: Montserrat;
        font-weight: Medium;
        font-size: 10px;
        text-align: center;
    }
</style>