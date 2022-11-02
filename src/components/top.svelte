<script>
    import top from '$lib/images/top.png'
    import windows from '$lib/images/windows.png'
    import SocialMenu from './social-menu.svelte'
    import { goto } from '$app/navigation';

    const formUrl = './form';

    function navigateForm() {
        goto(formUrl)
    }

	$: backgroundImage = `background-image: url("${windows}");`;
</script>

<div class="top grid-container">
    <img class="top_background" src={top} alt="SvelteKit" />

    <div class="grid-item text">
        <div>
            <span class="title">
                OWN AND BENEFIT FROM<br>
                YOUR FAVORITE MUSIC,<br>
                VIDEOS OR DIGITAL<br>
                ARTWORK!<br>
            </span>
        </div>

        <span class="v1_35">
            <br>
            With SPOZZ.club you can own a copy of your favorites songs, videos or digital art: Enjoy it,
            collect it, trade it and earn lifetime royalties from it! And if you like the idea, we invite you
            to be part of the SPOZZ.club community.<br>
            <br>
        </span>
    
        <span class="v2_106">
            Receive many member benefits, direct access to artists and firts-hand information.
            Take part in the decision making of the SPOZZ.club community, a registered Swiss
            Social Club. Earn from claiming and staking of SPOZZ-Tokens.<br>
            <br>
        </span>

        <button class="v1_37" on:click={navigateForm}>
            <span class="v1_36">Join to SPOZZ.Club</span>
        </button>
    </div>

    <div class="grid-item menu-social">
        <SocialMenu></SocialMenu>
    </div>

</div>

<style>
    .top {
        width: 100%;
        height: 605px;
    }
    .top_background {
        height: 795px;
        transform: matrix(1, 0, 0, 1, 0, 0);
        z-index: -1;
    }
    .grid-container {
        display: grid;
        gap: 0.5rem;
        grid-template-rows: 25% 25% 40%;
        grid-template-columns: 15% 15% 15% 20% 20% 15%;
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
    .menu-social {
        grid-column-start: 6;
        grid-column-end: 6;
        grid-row-start: 2;
        grid-row-end: 3;
    }
    .title {
        max-width: 357px;
        height: 116px;
        font-weight: Bold;
        font-size: 24px;
        text-align: left;
        mix-blend-mode: overlay;
    }
    .v1_35 {
        width: 559px;
        font-weight: Medium;
        font-size: 14px;
        text-align: left;
    }
    .v1_36 {
        width: 98px;
        color: rgba(74, 63, 91, 1);
        font-weight: Medium;
        font-size: 10px;
        text-align: left;
    }
    .v1_37 {
        width: 139px;
        height: 37px;
        background: rgba(255, 255, 255, 1);
        opacity: 0.55;
        border-radius: 7px;
        overflow: hidden;
        border: none;
    }
    .v2_106 {
        width: 566px;
        font-weight: Medium;
        font-size: 14px;
        text-align: left;
    }
</style>