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
    <div id="contact">
        <Contact />
    </div>
    <div id="footer">
    <Footer/>
        </div>
  </div>
</template>

<script>
import Header from './components/Header/Header.vue';
import HomeSlider from './components/HomeSlider/HomeSlider';
import About from './components/About/About';
import Services from './components/Services/Services';
import Works from './components/Works/Works';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

export default {
  name: 'App',
  components: {
    Header,
    HomeSlider,
    About,
    Services,
    Works,
    Contact,
    Footer
  }
}
</script>

