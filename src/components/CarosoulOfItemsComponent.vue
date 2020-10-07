<template>
 <div class="mb-4 container-fluid">
    <h6 class="page-subtitle mr-1"> {{title}} </h6>

    <hooper rtl infinite-scroll :settings="hooperSettings" class="hooper">
      <slide v-for="slide in slides" v-bind:key="slide.id">

        <div class="card card-of-main-pg border-0 shadow-light text-center mb-4">
          <div class="card-body position-relative bg-gray" 
                            v-bind:style="{ background: backgroundCard }">
            <div class="top-right mt-3 text-sm">
              <button class="btn btn-link text-black p-0 badge-light">
                <i class="material-icons text-warning vm star">star</i>
                <span class="p-1">{{slide.id}}</span>
              </button>
            </div>
            <div class="card-img position-relative">
              <div class="background background-h-200" :style="'background: url('+slide.img+'); background-size: cover'"
                            :key="slide.id">
              </div>
            </div>
            <div class="text-left">
              <span class="text-left text-location">
                  <i class="material-icons star mt-1">room</i>
                   {{slide.location}}
              </span>
              <br>
              <a href="#">
               <span class="takhfif-text-title">{{slide.title}}</span>
              </a>
            </div>
            <div class="row mt-1">
              <div class="col-auto"><button class="btn btn-sm btn-link text-success p-0">
                <i class="material-icons">shopping_basket</i> 254 </button>
              </div>
              <div class="col text-right">
                <p class="text-success my-0">
                  <span class="text-success">58</span>
                  <span class="text-danger" style="font-size: 20px;">&rarr;</span>
                  <span class="text-mute text-dark">280</span>
                </p>
              </div>
            </div>
          </div>
        </div>

      </slide>
    </hooper>

 </div>
</template>

<script>
import { Hooper, Slide } from 'hooper';
import 'hooper/dist/hooper.css';

export default {
  name: "CarosoulOfItemsComponent",
  components: {
    Hooper,
    Slide
  },
  data() {
    return {
      slides: [
        {
          id: 1,
          title: 'میکرو پوست تراپی ...',
          location: 'شهیدان مشرف',
          img: require('@/assets/img/takhfifcard.jpg')
        },
        {
          id: 2,
          title: 'تخفیف ویژه فلان و خوب',
          location: 'شریعتی',
          img: require("@/assets/img/takhfifcard.jpg")
        }
      ],
      baseW: 360,
      baseItem: 1.3,
      newWidth: window.innerWidth,
      hooperSettings: {
        itemsToShow: 1.3,
        centerMode: false
      }
    }
  },
      methods:{
        myinit(){
          this.$set(this.hooperSettings, 'itemsToShow', (this.newWidth * this.baseItem) / this.baseW );
        }
     },
     created(){
       this.myinit()
     },
  props: ['backgroundCard', 'title'],
}
</script>

<style scoped>
.hooper{
  height: 250px;
  padding: 2px;
}
.card-of-main-pg{
  height: 239px;
  background: #f7f7f7;
}
.hooper{
  background: rgb(255,255,255);
}
.card-of-main-pg > .card-body{
    border-radius: 15px;
    width: 248px;
    padding: 7px;
}
.card-of-main-pg > .card-body .star{
    font-size: 19px;
}
.card-slide{
    height: 270px;
}
.card-img{
  height: 141px;
}
.background{
  background-size: cover;
  border-radius: 12px;
}
.text-location{
  font-size: 10px;
}
.takhfif-text-title{
  font-size: 14px;
  font-weight: bold;
}
.container-fluid{
  /* margin-left: 0; */
  /* margin-right: 10px; */
  padding-left: 0;
}

</style>