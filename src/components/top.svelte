<script>
    import top from '$lib/images/top.png'
</script>

<div class="top">
    <img class="top_background" src={top} alt="SvelteKit" />


    <span class="v1_33">
        OWN AND BENEFIT FROM
        YOUR FAVORITE MUSIC,
        VIDEOS OR DIGITAL
        ARTWORK!
    </span>

    <span class="v1_35">
        With SPOZZ.club you can own a copy of your favorites songs, videos or
        digital art: Enjoy it,
        collect it, trade it and earn lifetime royalties from it! And if you like the idea, we invite you
        to be part of the SPOZZ.club community.
    </span>

    <span class="v2_106">
        Receive many member benefits, direct access to
        artists and firts-hand information.
        Take part in the decision making of the SPOZZ.club community, a registered Swiss
        Social Club. Earn from claiming and staking of SPOZZ-Tokens.
    </span>

    <button class="v1_37">
        <span class="v1_36">Join to SPOZZ.Club</span>
    </button>

    <div>
        <ul class="menu">
            <li class="menu-item"><span class="v3_154">CHECK OUT THE PROJECT</span></li>
            <li class="menu-item"><span class="v1_38">AND BECOME A MEMBER OF OUR GREAT COMMUNITY</span></li>
        </ul>
    </div>
</div>

<style>
    .top {
        width: 100%;
        height: 795px;
    }
    .top_background {
        height: 795px;
        transform: matrix(-1, 0, 0, 1, 0, 0);
    }
    .v1_33 {
        height: 116px;
        width: 357px;
        color: rgba(255, 255, 255, 1);
        position: absolute;
        top: 221px;
        left: 316px;
        font-family: Montserrat;
        font-weight: Bold;
        font-size: 24px;
        text-align: left;
    }
    .v1_35 {
        width: 559px;
        color: rgba(255, 255, 255, 1);
        position: absolute;
        top: 365px;
        left: 315px;
        font-family: Montserrat;
        font-weight: Medium;
        font-size: 14px;
        text-align: left;
    }
    .v1_36 {
        width: 98px;
        color: rgba(74, 63, 91, 1);
        position: absolute;
        top: 11px;
        left: 21px;
        font-family: Montserrat;
        font-weight: Medium;
        font-size: 10px;
        text-align: left;
    }
    .v1_37 {
        width: 139px;
        height: 37px;
        background: rgba(255, 255, 255, 1);
        opacity: 0.5;
        position: absolute;
        top: 511px;
        left: 316px;
        border-top-left-radius: 7px;
        border-top-right-radius: 7px;
        border-bottom-left-radius: 7px;
        border-bottom-right-radius: 7px;
        overflow: hidden;
    }
    .v2_106 {
        width: 566px;
        color: rgba(255, 255, 255, 1);
        position: absolute;
        top: 432px;
        left: 315px;
        font-family: Montserrat;
        font-weight: Medium;
        font-size: 14px;
        text-align: left;
    }

    .v1_38 {
        width: 841px;
        color: rgba(191, 35, 255, 1);
        font-size: 28px;
        font-family: Montserrat;
        font-weight: SemiBold;
    }
    .v3_154 {
        width: 403px;
        color: rgba(255, 255, 255, 1);
        font-family: Montserrat;
        font-weight: SemiBold;
        font-size: 22px;
    }
</style>