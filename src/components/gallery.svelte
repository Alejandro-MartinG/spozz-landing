<script>
    import egirl from '$lib/images/gallery/egirl.png'
    import hall from  '$lib/images/gallery/hall.png'
    import spozz_card from  '$lib/images/gallery/spozz_card.png'
    import hall2 from  '$lib/images/gallery/hall2.png'
    import { Row, Col } from 'sveltestrap';
    import { fade, scale } from 'svelte/transition';
    import Card from './card.svelte'

    let hover = true;
</script>

<Row columns={4}>
    <Col>
        <div class="d-flex justify-content-around">
            <img src={spozz_card} alt="SvelteKit" />
        </div>
    </Col>

    <Col>
        <div class="d-flex justify-content-around">
            <img src={hall2} alt="SvelteKit" />
        </div>
    </Col>

    <Col>
        <Card></Card> 
    </Col>

    <Col>
        <div class="d-flex justify-content-around">
            <img src={hall} alt="SvelteKit" />
        </div>
    </Col>
</Row>

<style>
    img {
        max-width: 40%;
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
    p {
        color: rgba(255, 255, 255, 1);
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 17px;
        text-align: justify;
        letter-spacing: -0.05em;
    }
</style>