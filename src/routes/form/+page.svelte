<script>
    let radioSelector = '';
    let radioSelector2 = '';

    let selected = 'Plain';
    let disabled = false;
</script>

<div class="cardo">
  <div class="card-header">CHOOSE THE ROLE THAT BEST DESCRIBES YOU</div>

  <div class="card-body">
    <div class="column-title">CHOOSE THE GENRE THAT BEST DESCRIBES YOUR ART</div>
    <div class="card-radio">
        <label>
            <input type="radio" bind:group={radioSelector} value="1">
            Artist, Creator
        </label>

        <label>
            <input type="radio" bind:group={radioSelector} value="2">
            Lover of arts, music, photography 
        </label>

        <label>
            <input type="radio" bind:group={radioSelector} value="3">
            Investor, Trader
        </label>

        <label>
            <input type="radio" bind:group={radioSelector} value="4">
            Other
        </label>
    </div>

    <div class="card-radio-2">
        <label>
            <input type="radio" bind:group={radioSelector2} value="music" disabled>
            Music
        </label>

        <label>
            <input type="radio" bind:group={radioSelector2} value="art" disabled>
            Digital Art, Collectibles
        </label>

        <label>
            <input type="radio" bind:group={radioSelector2} value="film" disabled>
            Video Art, Film and Animations
        </label>

        <label disabled>
            <input type="radio" bind:group={radioSelector2} value="photo" disabled>
            Photography
        </label>
    </div>

    <a href={null} class="btn btn-primary disabled">NEXT</a>
  </div>
</div>

<style>
    .cardo {
        position: relative;
        margin: auto;
        max-width: 660px;
        max-height: 460px;
        width: 100%;
        height: 100%;

        background: #FFFFFF;
        box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.25);
        border-radius: 21px;
        overflow:hidden;
    }
    .card-body {
        display: grid;
        gap: 0.5rem;
        grid-template-rows: 20% 60% 20%;
        grid-template-columns: 50% 50%;
        padding: 1rem;
    }
    .column-title {
        height: 50px;
        padding: 0.4rem 0.8rem 0.4rem 1rem;
        grid-column: 2;
        font-size: 13px;
        line-height: 132.1%;
        letter-spacing: 0.085em;

        border: 1px solid;
        border-radius: 150px;
        border-color: rgba(106, 90, 205, 0.5);

        opacity: 0.8;
        background: linear-gradient(90deg, #713ACA 0%, #4786D6 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
    }

    .card-header {
        display: block;
        text-align: center;
        color: #fff;
        background: linear-gradient(90deg, #713ACA 0%, #4786D6 100%);
    }

    .card-radio {
        margin: .5rem .5rem .5rem 2rem;
        display: flex;
        flex-direction: column;
    }
    .card-radio-2 {
        opacity: .5;
        margin: .5rem .5rem .5rem 1.7rem;
        display: flex;
        flex-direction: column;
        float: right;
    }
    .btn {
        margin: auto;
        grid-row: 3;
        grid-column-start: 1;
        grid-column-end: 3;
        width: 107px;
        font-size: 11px;
        line-height: 132.1%;
        letter-spacing: 0.105em;
        background: linear-gradient(90deg, #713ACA 0%, #4786D6 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        border-radius: 5px;
    }
    .disabled {
        pointer-events: none;
        color: #ccc;
    }
    label {
        font-family: 'Montserrat';
        font-weight: 400;
        font-size: 15px;
        line-height: 210%;
        letter-spacing: 0.000em;
    }
    input {
        accent-color: rgb(93, 53, 252);
    }
</style>