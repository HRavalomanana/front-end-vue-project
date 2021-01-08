<template>
   <div class="header-section">
      <b-navbar toggleable="lg" type="dark"  fixed="top">
         <b-navbar-brand href="#" v-on:click="scrollTo('app')"><img alt="Front-end onepage site" src="./../../assets/images/logo.svg" ><h1 class="home-h1">Front-end onepage site</h1></b-navbar-brand>

         <b-navbar-toggle target="nav-collapse">&#xf0c9;</b-navbar-toggle>

         <b-collapse id="nav-collapse" is-nav>

            <!-- Left  nav items -->
            <b-navbar-nav class="left-nav">
                <b-nav-item href="#" v-on:click="scrollTo('about')">About</b-nav-item>
                <b-nav-item href="#" v-on:click="scrollTo('services')">Services</b-nav-item>
                <b-nav-item href="#" v-on:click="scrollTo('works')">Works</b-nav-item>
                <b-nav-item href="#" >Blog</b-nav-item>
                <b-nav-item href="#" v-on:click="scrollTo('contact')">Contact</b-nav-item>
            </b-navbar-nav>

            <!-- Right  nav items -->
            <b-navbar-nav class="ml-auto right-nav">
                <b-nav-item href="#" title="Twitter"><span class="fa">&#xf099;</span></b-nav-item>
                <b-nav-item href="#" title="facebook"><span class="fa">&#xf09a;</span></b-nav-item>
                <b-nav-item href="#" title="Linkedin"><span class="fa">&#xf0e1;</span></b-nav-item>
            </b-navbar-nav>
         </b-collapse>
       </b-navbar>
   </div>
</template>

<script>
import './Header.scss';
export default {
    name: 'Header',
    methods: {
        scrollTo : function (id) {
            if (document.getElementById(id)) {
                const element = document.getElementById(id);
                const y = element.getBoundingClientRect().top + window.pageYOffset;
                window.scrollTo({ top: y - 120, behavior: "smooth" });
            }
        }
    }
}
</script>
