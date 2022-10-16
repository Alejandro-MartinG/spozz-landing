<script>
    import { fade, scale } from 'svelte/transition';
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
        gap: 0.5rem;
        grid-template-columns: 25% 25% 25% 25%;
        padding: 1rem;
        /*
        .item1 {
            grid-column-start: 1;
            grid-column-end: 3;
        }

        */
    }
    .grid-item {
        position: relative;
        margin: auto;
        max-width: 60%;
        border-radius: 7px;
    }
    div {
        max-width: 100%;
        border-radius: 7px;
        opacity: 0.85;
    }
    div:hover {
        max-width: 120%;
        border-radius: 7px;
        opacity: 1;
    }
</style>