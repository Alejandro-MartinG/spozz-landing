<script>
</script>

<div class="grid-container">
    <div class="grid-item menu-box">
        <p class="menu-item">
            <span class="unselected-text text">CHECK OUT THE PROJECT</span>
            <span class="selected-text text"> AND</span><br>
            <span class="selected-text text">BECOME A MEMBER OF OUR GREAT COMMUNITY</span>
        </p>
    </div>
</div>

<style>
    .grid-container {
        margin-top: 12rem;
        width: 100%;
        display: grid;
        gap: 0.5rem;
        grid-template-columns: 15% 50% 23% 10%;
    }
    .grid-item {
        position: relative;
        margin: auto;
    }
    .menu-box {
        display: flex;
        height: 250px;
        grid-column-start: 2;
        grid-column-end: 2;
        align-items: flex-end;
        justify-content:left;
        width: 100%;
    }
    .text {
        font-family: 'Montserrat', sans-serif;
        text-align: left;
        letter-spacing: 0.04rem;
        line-height: 34px;
        font-size: 20pt;
        font-style: normal;
    }
    .selected-text {
        color: #FFFFFF;
        font-weight: 400;
    }
    .unselected-text {
        color: #FFFFFF;
        font-weight: 600;
    }
    .menu-item {
        float: left;
    }
</style>