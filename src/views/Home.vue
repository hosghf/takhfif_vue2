<template>
    <!-- Begin page content -->
    <div class="flex-shrink-0 main-container pb-0 mt-5">
        <div class="mt-0">
          <img class="topimg" src="@/assets/img/topimg3.png">
        </div>
        <div class="mainlogo mt-4">
            <img src="@/assets/logo.png">
        </div>
        <div class="mb-4 px-1 search-box1">
            <input type="text" class="form-control border-0 search" placeholder="جستجو برای تخفیف مورد نظر">
            <button>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#e9e9e9" stroke-width="2" stroke-linecap="square" stroke-linejoin="bevel"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
            </button>
        </div>

        <!--  main slider  -->
        <div class="slideshow-container container" >
          <hooper rtl infinite-scroll :playSpeed="3500" v-bind:style="{ height: hooperHeight + 'px' }">
            <slide v-for="slide in slides" v-bind:key="slide.id">
                <img :src="slide.img" :key="slide.id" style="width:100%" class="img_slider">
            </slide>
          <hooper-pagination slot="hooper-addons"></hooper-pagination>
          </hooper>
        </div>

        <MainPageCategory></MainPageCategory>
  
        <CarosoulOfItemsComponent takhfifVije="true" :slides="takhfifVijeSlide" backgroundColor='#fff'></CarosoulOfItemsComponent>

        <CarosoulOfItemsComponent :slides="resturanItems" title="رستوران و کافی شاپ" backgroundColor='#ffe5d6'></CarosoulOfItemsComponent>
        
        <CarosoulOfItemsComponent :slides="pezeshkiItem" title="پزشکی و سلامت" backgroundColor='#d5fbfe'></CarosoulOfItemsComponent>

        <!-- <div class="bottom-space"></div> -->
        <Mbottom></Mbottom>

    </div>
</template>

<script>
import { Hooper, Slide, Pagination as HooperPagination } from 'hooper';
import 'hooper/dist/hooper.css';

import CarosoulOfItemsComponent from '@/components/CarosoulOfItemsComponent';
import MainPageCategory from '@/components/MainPageCategory';
import Mbottom from "@/components/marginBottomComponents"

export default {
  name: 'App',
  components: {
    Hooper,
    Slide,
    HooperPagination,
    CarosoulOfItemsComponent,
    MainPageCategory,
    Mbottom
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
      resturanItems:[
        {
              id:1,
              location: "شهیدان مشرف",
              title: "میکرودرم آبریژن در مطب خانم دکتر  (...",
              backgroundImg: require('@/assets/img/tt2.png'),
              star:"4.2",
              refund: "4000",
              oldprice: "58000",
              newprice: "28000",
              percent: "71"
          },
        {
              id:1,
              location: "شهیدان مشرف",
              title: "میکرودرم آبریژن در مطب خانم دکتر  (...",
              backgroundImg: require('@/assets/img/tt2.png'),
              star:"4.2",
              refund: "4000",
              oldprice: "58000",
              newprice: "28000",
              percent: "71"
          }
      ],
      pezeshkiItem:[
        {
              id:1,
              location: "شهیدان مشرف",
              title: "میکرودرم آبریژن در مطب خانم دکتر نرگس قانعی(متخصص...",
              backgroundImg: require('@/assets/img/tt2.png'),
              star:"4.2",
              refund: "4000",
              oldprice: "58000",
              newprice: "28000",
              percent: "71"
          },
          {
              id:1,
              location: "شهیدان مشرف",
              title: "میکرودرم آبریژن در مطب خانم دکتر نرگس قانعی(متخصص...",
              backgroundImg: require('@/assets/img/tt2.png'),
              star:"4.2",
              refund: "4000",
              oldprice: "58000",
              newprice: "28000",
              percent: "71"
          }
      ],
      takhfifVijeSlide:[
        {
              id:1,
              location: "شهیدان مشرف",
              title: "میکرودرم آبریژن در مطب آقای دکتر...",
              backgroundImg: require('@/assets/img/tt2.png'),
              star:"4.2",
              refund: "4000",
              oldprice: "58000",
              newprice: "28000",
              percent: "71"
          },
          {
              id:1,
              location: "شهیدان مشرف",
              title: "میکرودرم آبریژن در مطب آقای دکتر...",
              backgroundImg: require('@/assets/img/tt2.png'),
              star:"4.2",
              refund: "4000",
              oldprice: "58000",
              newprice: "28000",
              percent: "71"
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
  .search-box1 {
    background: #fff;
    box-shadow: 0px 0px 4px 2px #eee;
    display: flex;
    border-radius: 18.5px;
    width: 90%;
    margin: 0 auto;
  }
  .search-box1 .search{
    font-size: 12px;
  }
   .search-box1 button{
    border: 0;
    background: none;
    padding: 0;
    margin: 0;
  }
  .search-box1 svg {
    margin-top: 2px;
  }

  .bottom-space{
    margin-bottom: 10px;
    height: 30px;
  }
</style>