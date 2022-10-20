<script>
    import GirlCard from './card/girl.svelte'
    import HallCard from './card/hall.svelte'
    import Hall2Card from './card/hall2.svelte'
    import SpozzCard from './card/spozz.svelte'

    let hover = true;
</script>

<div class="grid-container">
    <div class="grid-item">
        <SpozzCard></SpozzCard> 
    </div>

    <div class="grid-item">
        <Hall2Card></Hall2Card> 
    </div>

    <div class="grid-item">
        <GirlCard></GirlCard> 
    </div>

    <div class="grid-item">
        <HallCard></HallCard> 
    </div>
</div>

<style>
    .grid-container {
        display: grid;
        gap: 0.2rem;
        grid-template-columns: 25% 25% 25% 25%;
        max-width: 100%;
    }
    .grid-item {
        position: relative;
        max-width: 100%;
        align-self: center;
        justify-self: center;
    }
    .right {
        /*
        justify-content: flex-end;
        margin-left: auto;
        margin-right: 0;
        vertical-align: middle;
        right: 50%;
        transform: translateX(50%);
        top: 50%;
        transform: translateX(-50%);
        */
    }
    .center {
        /*
        display: flex;
        justify-content: center;
        */
    }
    div {
        max-width: 100%;
        border-radius: 7px;
        opacity: 0.85;
    }
</style>