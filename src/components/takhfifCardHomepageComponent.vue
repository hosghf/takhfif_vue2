<template>
    <div class="card2 ml-4" v-bind:style="{ background: backgroundColor }" :class="{card2TakhfifVije: takhfifVije}">  
        <div class="background2" :style="'background: url( '+ backgroundImg + ');   background-size: cover;'">
            <svg class="svg-percent" :class="{'svg-percent-vije': takhfifVije}"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                width="82px" height="42px">
                <path fill-rule="evenodd"  :fill="backgroundColor"
                d="M81.575,15.817 C81.489,16.832 76.078,15.817 76.078,15.817 L60.471,15.817 C60.945,17.540 61.219,19.345 61.219,21.219 C61.219,32.454 52.111,41.562 40.875,41.562 C29.639,41.562 20.531,32.454 20.531,21.219 C20.531,19.312 20.813,17.475 21.303,15.725 L6.225,15.725 C6.225,15.725 0.811,16.754 0.725,15.725 C10.756,13.686 18.723,12.881 25.037,8.465 C26.319,6.875 27.828,5.477 29.526,4.334 C29.600,4.245 29.678,4.169 29.752,4.078 C29.904,3.989 30.054,3.945 30.203,3.923 C33.308,2.002 36.956,0.875 40.875,0.875 C44.965,0.875 48.765,2.093 51.955,4.170 C52.155,4.172 52.357,4.214 52.563,4.334 C52.783,4.601 53.014,4.838 53.239,5.089 C54.319,5.919 55.313,6.849 56.207,7.875 C62.680,12.930 70.975,13.690 81.575,15.817 Z"/>
            </svg>
            <div class="row top-section">
                <div class="star" v-if="!takhfifVije">
                    <i class="material-icons">star</i>
                    <span>{{star}}</span>
                </div>
                <span></span>
                <div class="green-left-number">
                    <span>{{refund}}</span>
                    <i class="material-icons">cached</i>
                </div>
            </div>
            
            <div class="location" v-if="takhfifVije">
                <i class="material-icons">room</i>
                <span>
                    {{location}}
                </span>
            </div>

        </div>
        <div class="percent" :class="{percentTakhfifVije : takhfifVije}" >
            %{{percent}}
        </div>

        <div class="location" v-if="!takhfifVije">
            <i class="material-icons">room</i>
            <span>
                {{location}}
            </span>
        </div>
        <div class="title">
            <h6>
                <div class="star" v-if="takhfifVije">
                    <i class="material-icons">star</i>
                    <span>{{star}}</span>
                </div>
                {{title}}
            </h6>
        </div>
            <div class="row price-section">
                <div class="basket text-success">
                    <i class="material-icons">shopping_basket</i>
                    <span>254</span>
                </div>
                <span></span>
                <div class="discount">
                    <p class="text-success">
                        <span class="text-success">{{oldprice}}</span>
                        <span class="text-danger d-arrow">&rarr;</span>
                        <del class="text-mute text-dark">{{newprice}}</del>
                    </p>
                </div>
            </div>
    </div>
</template>

<script>
export default {
    data: function(){
        return {
            textColor: this.background
        }
    },
    props: ["title", "star", "location", "backgroundImg",
                 "refund", "oldprice", "newprice", "percent", "backgroundColor", "takhfifVije"],
    computed: {
        percentShadow() {
            return 'box-shadow: 0 0 0 3.5px ' + this.backgroundColor
        }
    }
}
</script>

<style scoped>
.svg-percent-vije {
    position: absolute;
    top: -23.2px;
    right: 13px;
}
.svg-percent {
    position: absolute;
    bottom: -26.8px;
    left: 25px;
}
h6{
    font-size: 12px;
    font-weight: bold;
}
.card2{
    width: 100%;
    /* height: 246px; */
    height: auto;
    background: #fff;
    padding: 8px;
    border-radius: 15px;
    box-shadow: 0px 0px 6px 0px #ccc;
    position: relative;
    margin-top: 16px;
}
.background2{
    height: 141px;
    width: 100%;
    background: blue;
    border-radius: 15px;
    background-size: cover;
    position: relative;
}
.background2 .top-section{
    height: 21px;
    margin: 0;
    display: flex;
}
.background2 .top-section > span{
  flex-grow:1; 
}
.background2 .top-section .star{
    height: 20px;
    width: 41px;
    background: #e7e7e7;
    border-radius: 10px;
    margin-top: 9px;
    margin-right: 12px;
    display: inline-block;
    font-size: 12.5px;
    padding: 1px 2px;
    font-weight: bold;
}
.background2 .top-section .star i {
    vertical-align: middle;
    color: #ffc107;
    font-size: 17px;
}
.background2 .top-section .green-left-number{
    height: 20px;
    width: 55px;
    background: #19c188;
    color: #fff;
    flex-grow: 0;
    margin-top: 9px;
    margin-left: 12px;
    border-radius: 10px;
    font-size: 12.5px;
    padding: 2px;
    text-align: center;
}
.background2 .top-section .green-left-number i{
    font-size: 17px;
    vertical-align: middle;
    font-weight: bold;
    margin-right: 4px;
}
.card2 .percent{
    width: 33px;
    height: 33px;
    border-radius: 50%;
    position: absolute;
    background: #f15252;
    color: #fff;
    left: 57px;
    top: 140px;
    /* box-shadow: 0 0 0 5px #d6fafe; */
    text-align: center;
    vertical-align: middle;
    padding-top: 6.5px;
    font-size: 14px;
}
.card2 .location {
    font-size: 10.5px;
    margin-top: 10px;
    margin-right: 3px;
}
.card2 .location i {
    vertical-align: middle;
    font-size: 12px;
}
.card2 .title{
    margin-right: 4px;
    margin-top: 9px;
}
.card2 .price-section{
    display: flex;
    font-size: 13px;
}
.card2 .price-section .basket{
    margin-right: 14px;
}
.card2 .price-section .basket > i{
    font-size: 18px !important;
    vertical-align: middle;
    margin-left: 2px;
}
.card2 .price-section > span{
    flex-grow: 1;
}
.card2 .price-section .discount{
    flex-grow: 0;
    margin-left: 20px;
    margin-top: -7px;
}
.card2 .price-section .discount .d-arrow {
    font-size: 20px;
}

/* takhfif vije styles */
.card2TakhfifVije {
    height: 221px;
}
.card2 .percentTakhfifVije{
    right: 46px;
    top: -10px;
}
.card2 .title .star{
    height: 19px;
    width: 41px;
    background: #e7e7e7;
    border-radius: 10px;
    display: inline-block;
    font-size: 12.5px;
    padding-top: 1px;
    padding-right: 1px;
    margin-top: 5px;
    margin-left: 1px;
}
.card2 .title .star i {
    vertical-align: middle;
    color: #ffc107;
    font-size: 17px;
}
.card2 .background2 .location {
    font-size: 10.5px;
    margin-top: 10px;
    margin-right: 3px;
    background: #fff;
    width: auto;
    display: inline-block;
    position: relative;
    top: 85px;
    padding: 1px 2px;
    border-radius: 12px;
}
.card2 .background2 .location i {
    vertical-align: middle;
    font-size: 12px;
}
</style>