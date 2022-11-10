<script>
    import src from '$lib/images/bot.png'
    import { Row } from 'sveltestrap';
    import { goto } from '$app/navigation';

    const formUrl = './form';

    function navigateForm() {
        goto(formUrl)
    }
</script>

<div class="bot grid">
    <Row>
        <Row>
            <p class="bot_text">
                SPOZZ.club is a community run NFT marketplace and Music Club changing the way digital
                creations are distributed, cosumed and monetized.
            </p>
        </Row>

        <Row>
            <button on:click={navigateForm}>
                <span class="button_text">Join SPOZZ.Club</span>
            </button>
        </Row>
    </Row>

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
        padding-top: 5rem;
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
        font-family: 'Montserrat', sans-serif;
        font-weight: 300;
        font-size: 23pt;
        line-height: 22pt;
        text-align: center;
        justify-content: center;
        vertical-align: middle;
        align-items: center;
        padding: 2rem;
        padding-bottom: 0rem;
    }
    button {
        margin: auto;
        width: 161.739px;
        height: 44.111px;
        overflow: hidden;
        background: #FFFFFF;
        border-radius: 7px;
        border: none;
        opacity: .8;
    }
    .button_text {
        vertical-align: middle;
        margin: auto;
        color: rgba(74, 63, 91, 1);
        font-family: 'Montserrat', sans-serif;
        font-weight: 700;
        font-size: 10pt;
        text-align: center;
    }
</style>