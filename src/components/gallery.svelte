<script>
    import GirlCard from './card/girl.svelte'
    import HallCard from './card/hall.svelte'
    import Hall2Card from './card/hall2.svelte'
    import SpozzCard from './card/spozz.svelte'

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
        display: inline-flex;
        justify-content: center;
        align-items: center;
    }
    div {
        max-width: 100%;
        border-radius: 19px;
        opacity: 0.85;
        align-self: center;
    }
</style>