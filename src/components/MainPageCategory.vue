<template>
    <div class="container-fluid">
        <div class="page-subtitle mr-1"> دسته بندی ها</div>
          <hooper rtl infinite-scroll :settings="hooperSettings">
            <slide v-for="slide in slides" v-bind:key="slide.id">
              <a href="#">
                <div class='square-box p-3' :style="'background:' + slide.background">
                    <div class='square-content'>
                      <img :src="slide.icon">
                      <p class="cat-text">{{slide.title}}</p>
                    </div>
                </div>
              </a>
            </slide>
          </hooper>
    </div>
</template>

<style scoped>
.page-subtitle{
  margin-top: 4px;
}
.container-fluid{
  padding-left: 0;
  margin-bottom: 13px;
}
.hooper{
  height: 110px;
}
.square-box{
    position: relative;
    width: 110px;
    overflow: hidden;
    border-radius: 10px;
    height: 110px;
}
.square-box:before{
    content: "";
    display: block;
    padding-top: 100%;

}
.square-content{
    position:  absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    color: white;
    text-align: center;
    padding-top: 20px;
}
.cat-text{
  font-size: 13px;
  margin-top: 3px;
}
</style>

<script>
import { Hooper, Slide } from 'hooper';
import 'hooper/dist/hooper.css';

export default {
  name:"MainPageCategory",
  components: {
    Hooper,
    Slide
  },
    data() {
    return {
      slides: [
        {
          id: 1,
          title: 'پزشکی و سلامت',
          icon: require ('@/assets/img/doctor.png'),
          background: '#8ddeef'
        },
        {
          id: 2,
          title: 'آرایشی و بهداشتی',
          icon: require('@/assets/img/nails.png'),
          background: '#ffb1e0'
        },
        {
          id: 3,
          title: 'آرایشی و بهداشتی',
          icon: require('@/assets/img/swimming.png'),
          background: '#ffb1e0'
        }
      ],
      baseW: 360,
      baseItem: 2.9,
      newWidth: window.innerWidth,
      hooperSettings: {
        itemsToShow: 1,
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
  }
}
</script>