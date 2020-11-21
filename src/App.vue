<template>
  <div v-on:click="closeMenu">
    <Header></Header>
    <div class="row mt-4"></div>
    <div>
      <router-view />
      <SideMenu></SideMenu>
    </div>
    <div>
      <Footer></Footer>
    </div>
  </div>
</template>

<style>
    @import "./assets/vendor/elegant_font/HTMLCSS/style.css";
    @import "./assets/vendor/materializeicon/material-icons.css";
    @import "./assets/vendor/swiper/css/swiper.min.css";
    @import "./assets/css/style-red.css";
    @import "./assets/css/lastStyle.css";
</style>

<script>
import Header from "./views/layout/Header";
import Footer from "./views/layout/Footer";
import SideMenu from "./views/layout/SideMenu";

export default {
  name: "App",
  components: {
    Footer,
    Header,
    SideMenu
  },
  data: function (){
    return{
      body: document.body,
    }
  },
  methods: {
    closeMenu: function (event){
      if(!event.target.classList.contains('menu-brg')){
        if(this.body.classList.contains('sidemenu-open') ){
          this.body.classList.remove('sidemenu-open')
        }
      }
    }
  }
}
</script>