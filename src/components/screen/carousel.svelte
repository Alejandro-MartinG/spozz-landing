<script>
    import egirl from '$lib/images/gallery/egirl.png'
</script>

<div class="carousel">
	<div class="carousel__container">
        <img src={egirl} alt="SvelteKit"/>
        <img src={egirl} alt="SvelteKit"/>
        <img src={egirl} alt="SvelteKit"/>
        <img src={egirl} alt="SvelteKit"/>
	</div>
</div>

<style>
	.carousel {
		display: flex;
		overflow-x: auto;
		position: relative;
		width: 100%;
	}
	.carousel__container {
		display: flex;
	}
    img {
        height: 150px;
        margin-right: 0px;;
    }
</style>