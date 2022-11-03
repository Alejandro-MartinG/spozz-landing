<script>
    import windows from '$lib/images/windows.png'

	$: backgroundImage = `background-image: url("${windows}");`;
</script>

<div class="top grid-container">
    <div class="grid-item menu-box" style="{backgroundImage}">
        <ul class="menu">
            <li class="menu-item">
                <span class="unselected-text text">CHECK OUT THE PROJECT</span>
            </li>
            <li class="menu-item">
                <span class="selected-text text">AND BECOME A MEMBER OF OUR GREAT COMMUNITY</span>
            </li>
        </ul>
    </div>
</div>

<style>
    .top {
        width: 100%;
        height: 360px;
    }
    .grid-container {
        display: grid;
        gap: 0.5rem;
        grid-template-rows: 50% 50%;
        grid-template-columns: 15% 15% 15% 20% 20% 15%;
    }
    .grid-item {
        position: relative;
        margin: auto;
    }
    .menu-box {
        display: flex;
        height: 360px;
        grid-column-start: 3;
        grid-column-end: 6;
        grid-row-start: 1;
        grid-row-end: 2;
        align-items: flex-end;
        background-blend-mode:hard-light;
        background-repeat: round;
    }
    .text {
        text-align: right;
        letter-spacing: 0.04rem;
        line-height: 34px;
        font-size: 28px;
        font-style: normal;
        font-weight: 600;
    }
    .selected-text {
        width: 841px;
        color: #BF23FF;
    }
    .unselected-text {
        width: 403px;
        color: #FFFFFF;
    }
    .menu-item {
        float: right;
    }
</style>