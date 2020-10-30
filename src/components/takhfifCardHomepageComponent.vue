<template>
    <div class="card2 ml-4" v-bind:style="{ background: backgroundColor }" :class="{card2TakhfifVije: takhfifVije}">
            
        <div class="background2" :style="'background: url( '+ backgroundImg + ');   background-size: cover;'">
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
        <div class="percent" :class="{percentTakhfifVije : takhfifVije}" :style="percentShadow">
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
    width: 13%;
    height: 15%;
    border-radius: 50%;
    position: absolute;
    background: #f15252;
    color: #fff;
    left: 15%;
    top: 54%;
    box-shadow: 0 0 0 5px #d6fafe;
    text-align: center;
    vertical-align: middle;
    padding-top: 3%;
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
    right: 17%;
    top: -6%;
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