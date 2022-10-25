<script>
    let radioSelector = 'Plain';
    let selected = 'Plain';
</script>

<div class="card">
  <div class="card-header">Choose the role that best describes you</div>

  <div class="card-body">
    <div class="card-radio">
        <label>
            <input type="radio" bind:group={radioSelector} value="Plain">
            Artist, Creator
        </label>

        <label>
            <input type="radio" bind:group={radioSelector} value="Whole wheat">
            Lover of arts, music, photography 
        </label>

        <label>
            <input type="radio" bind:group={radioSelector} value="Spinach">
            Investor, Trader
        </label>

        <label>
            <input type="radio" bind:group={radioSelector} value="Spinach">
            Other
        </label>
    </div>

    <div class="card-radio-2 disabled">
        <label>
            <input type="radio" bind:group={radioSelector} value="Plain">
            Music
        </label>

        <label>
            <input type="radio" bind:group={radioSelector} value="Whole wheat">
            Digital Art, Collectibles
        </label>

        <label>
            <input type="radio" bind:group={radioSelector} value="Spinach">
            Video Art, Film and Animations
        </label>

        <label>
            <input type="radio" bind:group={radioSelector} value="Spinach">
            Photography
        </label>
    </div>

    <a href={null} class="btn btn-primary">NEXT</a>
  </div>
</div>

<style>
    .card {
        background: #FFFFFF;
        mix-blend-mode: normal;
        box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.25);
        border-radius: 21px;
        display: grid;
        gap: 0.5rem;
        grid-template-rows: 10% 70% 20%;
        grid-template-columns: 50% 50%;
        padding: 1rem;
        overflow:hidden;
    }
    .card-radio {
        display: flex;
        flex-direction: column;
    }
    .card-radio-2 {
        display: flex;
        flex-direction: column;
        float: right;
    }
    .btn {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 500;
        font-size: 11px;
        line-height: 132.1%;
        letter-spacing: 0.105em;
        background: linear-gradient(90deg, #713ACA 0%, #4786D6 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
    .card-header {
        background: linear-gradient(90deg, #713ACA 0%, #4786D6 100%);
        mix-blend-mode: normal;
        transform: matrix(1, 0, 0, 1, 0, 0);
    }
</style>