<template>
 <div class="mb-3 container-fluid">
    <h6 class="page-subtitle mr-1"> {{title}} </h6>

    <hooper rtl infinite-scroll :settings="hooperSettings" class="hooper">
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
      slides:[
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
  props: ['backgroundColor', 'title'],
}
</script>

<style scoped>
.hooper{
  height: 270px;
  padding: 2px;
  background: rgb(255,255,255);
}
</style>