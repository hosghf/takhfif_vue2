<template>
 <div class="mb-3 container-fluid">
    <h6 class="page-subtitle mr-1"> {{title}} </h6>

    <div class="TitletakhfifVije" v-if="takhfifVije">
      <img src="@/assets/img/fire.png">
      <h6>تخفیف های ویژه</h6>
    </div>

    <hooper rtl :settings="hooperSettings" class="hooper" :class="{hooperTakhfifVije: takhfifVije}">
      <slide v-for="slide in slides" v-bind:key="slide.id" class="m-1">
             <TakhfifCard 
                        :title="slide.title"
                        :location="slide.location"
                        :backgroundImg="slide.backgroundImg"
                        :star="slide.star"
                        :refund="slide.refund"
                        :oldprice="slide.oldprice"
                        :newprice="slide.newprice"
                        :percent="slide.percent"
                        :backgroundColor="backgroundColor"
                        :takhfifVije="takhfifVije"
                        >
            </TakhfifCard>
      </slide>
    </hooper>

 </div>
</template>

<script>
import { Hooper, Slide } from 'hooper';
import 'hooper/dist/hooper.css';
import TakhfifCard from "@/components/takhfifCardHomepageComponent"

export default {
  name: "CarosoulOfItemsComponent",
  components: {
    Hooper,
    Slide,
    TakhfifCard
  },
  data() {
    return {
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
  props: ['backgroundColor', 'title', 'slides', 'takhfifVije'],
}
</script>

<style scoped>
.container-fluid{
  padding-left: 0;
}
.hooper{
  height: 278px;
  padding: 2px;
  background: rgb(255,255,255);
}
.hooperTakhfifVije {
  height: 250px;
}
.TitletakhfifVije{
  display: flex;
  height: 37px;
  width: 100%;
  margin: 0;
  padding: 4px 0;
  background: rgb(242,92,92);
  background: linear-gradient(90deg, rgba(242,92,92,1) 0%, rgba(253,235,235,1) 50%, rgba(254,254,254,1) 100%);
}
.TitletakhfifVije h6{
   background: rgb(181,0,0);
   background: linear-gradient(90deg, rgba(181,0,0,1) 0%, rgba(238,58,58,1) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-top: 7px;
  margin-right: 8px;
  margin-bottom: 0;
}
</style>