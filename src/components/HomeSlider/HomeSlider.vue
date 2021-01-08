<!-- Main Slider -->
<template>
    <div class="slider-section">
        <carousel :items="1">
            <div>
                <div class="info-block">
                <div class="container">
                    <h2 class="slide-info">We transform every <br> dream into digital<br> reality</h2>
                    <a class="red-btn" href="#" title="Discover">Discover</a>
                </div>
                </div>
                <img src="./../../assets/images/slide_1.jpg" alt="slide1" >

            </div>

            <div>
                <div class=info-block>
                    <div class="container">
                        <h2 class="slide-info">Dolor We transform every <br> dream into digital<br> reality</h2>
                        <a class="red-btn" href="#" title="Discover">Discover</a>
                    </div>
                </div>
                <img src="./../../assets/images/about.jpg" alt="slide2" >

            </div>
            <div>
                <div class=info-block>
                    <div class="container">
                        <h2 class="slide-info">Lorem ipsum We transform every <br> dream into digital<br> reality</h2>
                        <a class="red-btn" href="#" title="Discover">Discover</a>
                    </div>
                </div>
                <img src="./../../assets/images/slide_1.jpg" alt="slide3" >
            </div>
        </carousel>
    </div>
</template>

<script>

import carousel from 'vue-owl-carousel';
import './HomeSlider.scss';

export default {
    components: { carousel },
    name: 'HomeSlider',
}
</script>
