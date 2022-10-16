<script>
    import screen from '$lib/images/screen.png'
    import vector from '$lib/images/screen/leftup.png'
    import rectangle from '$lib/images/screen/rectangle.png'
</script>

<div class="grid-container">
    <img class="vector leftup" src={vector} alt="SvelteKit" />

    <div class="">
        <img class="vector rectangle" src={rectangle} alt="SvelteKit" />

        <div class="">
            <img class="screen" src={screen} alt="SvelteKit" />
        </div>
    </div>
</div>

<style>
    img {
        max-width: 100%;
    }
    .screen {
    }
    .rectangle {
        max-width: 50%;
        position: absolute;
    }
    .leftup {
        max-width: 50%;
        width: 209.5px;
        height: 40.5px;
    }
    .vector {
        mix-blend-mode: overlay;
        border: 2px solid #FFFFFF;
    }
</style>
