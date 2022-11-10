<script>
    import top from '$lib/images/top.png'
    import welcome from '$lib/images/welcome.png'
    import SocialMenu from './social-menu.svelte'
    import { goto } from '$app/navigation';

    const formUrl = './form';

    function navigateForm() {
        goto(formUrl)
    }
</script>

<div class="top grid-container">
    <img class="top_background" src={top} alt="SvelteKit" />

    <div class="grid-item text">
        <div  class="title-border">
            <span class="title">
                OWN AND BENEFIT FROM<br>
                YOUR FAVORITE MUSIC,<br>
                VIDEOS OR DIGITAL<br>
                ARTWORK!<br>
            </span>
        </div>

        <p class="paragraph">
            <br>
            With SPOZZ.club you can own a copy of your favorites songs, videos or digital art: Enjoy it,
            collect it, trade it and earn lifetime royalties from it! And if you like the idea, we invite you
            to be part of the SPOZZ.club community.<br>
            <br>
        </p>
    
        <p class="paragraph">
            Receive many member benefits, direct access to artists and firts-hand information.
            Take part in the decision making of the SPOZZ.club community, a registered Swiss
            Social Club. Earn from claiming and staking of SPOZZ-Tokens.<br>
            <br>
        </p>

        <button class="button" on:click={navigateForm}>
            <span class="v1_36">Join SPOZZ.Club</span>
        </button>
    </div>

    <div class="grid-item menu-social">
        <SocialMenu></SocialMenu>
    </div>

    <img class="welcome" src={welcome} alt="SvelteKit" />
</div>

<style>
    .top {
        width: 100%;
        height: 605px;
        margin-bottom: 7rem;
    }
    .top_background {
        height: 795px;
        transform: matrix(1, 0, 0, 1, 0, 0);
        z-index: -1;
    }
    .grid-container {
        display: grid;
        gap: 0.5rem;
        grid-template-rows: 25% 25% 25% 25% 25% 25%;
        grid-template-columns: 15% 15% 22% 22% 15.1% 11%;
    }
    .grid-item {
        position: relative;
        margin: auto;
    }
    .text {
        grid-column-start: 2;
        grid-column-end: 4;
        grid-row-start: 2;
        grid-row-end: 3;
    }
    .welcome {
        margin-top: 4rem;
        grid-column-start: 5;
        grid-column-end: 6;
        grid-row-start: 5;
        grid-row-end: 6;
        opacity: .4;
    }
    .menu-social {
        grid-column: 6;
        grid-row-start: 8;
        grid-row-end: 3;
    }
    .title {
        font-family: 'Montserrat', sans-serif;
        font-weight: 750;
        font-size: 37.42pt;
        text-align: left;
        mix-blend-mode:overlay;
        line-height: 105%;
    }
    .title-border {
        padding-bottom: .6rem;
        border-bottom: 1px solid white;
        mix-blend-mode:overlay;
    }
    .paragraph {
        font-weight: 320;
        font-size: 15pt;
        text-align: left;
        line-height: 100%;
        text-align: justify;
        text-justify: inter-word;
        color: rgba(255, 255, 255, 1);
    }
    .v1_36 {
        font-family: 'Montserrat', sans-serif;
        font-weight: 700;
        color: #31286d;
        font-size: 10pt;
        text-align: left;
    }
    .button {
        width: 161.739px;
        height: 44.111px;
        background: rgba(255, 255, 255, 1);
        border-radius: 7px;
        border: none;
    }
</style>