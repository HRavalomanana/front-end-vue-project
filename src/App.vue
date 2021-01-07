<template>
  <div id="app">
    <Header/>
    <HomeSlider/>
   <div id="about">
        <About />
    </div>

    <div id="services">
        <Services />
    </div>
    <div id="works">
        <Works />
    </div>
    <div id="blog">
        <HelloWorld msg="blog"/>
    </div>
    <div id="contact">
    <HelloWorld msg="contact"/>
        </div>
  </div>
</template>

<script>
import Header from './components/Header/Header.vue';
import HomeSlider from './components/HomeSlider/HomeSlider';
import About from './components/About/About';
import Services from './components/Services/Services';
import Works from './components/Works/Works';
import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',
  components: {
    Header,
    HomeSlider,
    About,
    Services,
    Works,
    HelloWorld
  }
}
</script>

