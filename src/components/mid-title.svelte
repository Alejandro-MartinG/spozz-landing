<script>
</script>

<div class="top grid-container">
    <div class="grid-item menu-box">
        <ul class="menu">
            <li class="menu-item">
                <span class="unselected-text text">CHECK OUT THE PROJECT</span>
                <span class="selected-text text"> AND</span>
            </li>
            <li class="menu-item">
                <span class="selected-text text">BECOME A MEMBER OF OUR GREAT COMMUNITY</span>
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
        grid-template-columns: 13% 15% 15% 20% 20% 15%;
    }
    .grid-item {
        position: relative;
        margin: auto;
    }
    .menu-box {
        display: flex;
        height: 400px;
        grid-column-start: 2;
        grid-column-end: 6;
        grid-row-start: 1;
        grid-row-end: 2;
        align-items: flex-end;
    }
    .text {
        font-family: 'Montserrat', sans-serif;
        text-align: left;
        letter-spacing: 0.04rem;
        line-height: 34px;
        font-size: 27.35pt;
        font-style: normal;
    }
    .selected-text {
        color: #FFFFFF;
        font-weight: 400;
    }
    .unselected-text {
        color: #FFFFFF;
        font-weight: 800;
    }
    .menu-item {
        float: left;
    }
</style>