<template>
    <!-- Begin page content -->
    <div class="flex-shrink-0 main-container pb-0 mt-5">
          <div class="mt-0">
            <img class="topimg" src="@/assets/img/topimg3.png">
          </div>
          <div class="mainlogo mt-4">
              <img src="@/assets/logo.png">
          </div>
          <div class="mb-4 container">
              <input type="text" class="form-control border-0 shadow-light" placeholder="جستجو برای تخفیف مورد نظر">
          </div>

          <!--  main slider  -->
          <div class="slideshow-container container" >
            <hooper rtl infinite-scroll :playSpeed="3500"   v-bind:style="{ height: hooperHeight + 'px' }">
              <slide v-for="slide in slides" v-bind:key="slide.id">
                  <img :src="slide.img" :key="slide.id" style="width:100%" class="img_slider">
              </slide>
            <hooper-pagination slot="hooper-addons"></hooper-pagination>
            </hooper>
          </div>

          <MainPageCategory></MainPageCategory>
     
          <CarosoulOfItemsComponent backgroundCard='#fff'></CarosoulOfItemsComponent>

          <CarosoulOfItemsComponent title="آخرین تخفیف ها" backgroundCard='#d5fbfe'></CarosoulOfItemsComponent>

          <CarosoulOfItemsComponent title="تخفیف های ویژه" backgroundCard='#ffe5d6'></CarosoulOfItemsComponent>
    </div>
</template>

<style scoped>
  .slideshow-container {
    max-width: 1000px;
    position: relative;
    margin: auto;
  }
  .cn{
    width: 95%;
    margin:auto;
  }
  .img_slider{
    border-radius: 7px;
  }
  .xy{
    margin-top: 10px;
  }
  .mainlogo{
    margin: auto;
    width: 70px;
  }
  .topimg{
    width: 100%;
    height: 67px;
  }
  .mainlogo{
    margin-bottom: 20px;
  }
.hooper-indicator:hover, .hooper-indicator.is-active {
    background-color: #dc3545 !important;
}
</style>

<script>
import { Hooper, Slide, Pagination as HooperPagination } from 'hooper';
import 'hooper/dist/hooper.css';

import CarosoulOfItemsComponent from '@/components/CarosoulOfItemsComponent';
import MainPageCategory from '@/components/MainPageCategory';

export default {
  name: 'App',
  components: {
    Hooper,
    Slide,
    HooperPagination,
    CarosoulOfItemsComponent,
    MainPageCategory
  },

  data() {
    return {
      slides: [
        {
          id: 1,
          img: require('@/assets/img/mainslide.jpg')
        },
        {
          id: 2,
          img: require('@/assets/img/mainslide.jpg')
        }
      ],
      baseW: 360,
      baseH: 160,
      newWidth: window.innerWidth
    }
  },
  computed: {
    hooperHeight: function(){
      return (this.newWidth * this.baseH) / this.baseW
    }
  }
}
</script>