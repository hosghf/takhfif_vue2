<template>
    <!-- <div class="container mb-4">
        <div class="row"> -->
            <div class="card2">
                <div class="background2" :style="'background: url( '+ background + '); background-size: cover;'">
                    <div class="row top-section">
                        <div class="star">
                            <i class="material-icons">star</i>
                            <span>{{star}}</span>
                        </div>
                        <span></span>
                        <div class="green-left-number">
                            <span>{{refund}}</span>
                            <i class="material-icons">cached</i>
                        </div>
                    </div>
                </div>
                <div class="percent">
                    %{{percent}}
                </div>
                <div class="location">
                    <i class="material-icons">room</i>
                    <span>
                        {{location}}
                    </span>
                </div>
                <div class="title">
                    <h6>
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
        <!-- </div>
    </div> -->
</template>

<script>
export default {
    data: function(){
        return {
            textColor: this.background
        }
    },
    props: ["title", "star", "location", "background",
                 "refund", "oldprice", "newprice", "percent"]
}
</script>

<style scoped>
h6{
    font-size: 12px;
    font-weight: bold;
}
.card2{
    width: 100%;
    height: 300px;
    background: #fff;
    padding: 10px;
    border-radius: 15px;
    box-shadow: 0px 0px 6px 2px #eee;
    position: relative;
}
.background2{
    height: 192px;
    width: 100%;
    background: blue;
    border-radius: 15px;
    background-size: cover;
}
.background2 .top-section{
    height: 22px;
    margin: 0;
    display: flex;
}
.background2 .top-section > span{
  flex-grow:1; 
}
.background2 .top-section .star{
    height: 22px;
    width: 43px;
    background: #e7e7e7;
    border-radius: 10px;
    margin-top: 9px;
    margin-right: 12px;
    display: inline-block;
    font-size: 13.5px;
    padding-top: 2px;
}
.background2 .top-section .star i {
    vertical-align: middle;
    color: #ffc107;
    font-size: 17px;
}
.background2 .top-section .green-left-number{
    height: 22px;
    width: 60px;
    background: #19c188;
    color: #fff;
    flex-grow: 0;
    margin-top: 9px;
    margin-left: 12px;
    border-radius: 10px;
    font-size: 13.5px;
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
    width: 15%;
    height: 16%;
    border-radius: 50%;
    position: absolute;
    background: #f15252;
    color: #fff;
    left: 15%;
    top: 60%;
    box-shadow: 0px 0px 0px 5px #fff;
    text-align: center;
    vertical-align: middle;
    padding-top: 4%;
}
.card2 .location {
    font-size: 12.5px;
    margin-top: 10px;
    margin-right: 3px;
}
.card2 .location i {
    vertical-align: middle;
    font-size: 14px;
}
.card2 .title{
    margin-right: 4px;
    margin-top: 13px;
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
</style>