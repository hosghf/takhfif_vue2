<template>
    <div>
        <div class="top-div">
            <div class="container">
                <div class="name-section">
                    <h5>سلام حامد برزگری</h5>
                    <p>09132334774</p>
                </div>
                <div class="kifpool-section row">
                    <div class="col-4">
                        <img src="@/assets/img/map1.svg">
                        <p>مشخصات من</p>
                    </div>
                    <div class="col-4">
                        <img src="@/assets/img/map1.svg">
                        <p>کیف پول:</p>
                        <p class="mony">
                            <span>50/000</span>
                            <span> تومان </span>
                        </p>
                    </div>
                    <div class="col-4">
                        <img src="@/assets/img/map1.svg">
                        <p>تغییر رمز عبور</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="bon-section">
            <div class="container bon-title-section">
                <div class="d-flex">
                    <h6 class="col-4 mr-auto">بن های من</h6>
                    <p class="col-3">همه</p>
                </div>
            </div>

            <div class="carousel-container">
                <hooper rtl :settings="hooperSettings">
                    <slide v-for="bone in bones" :key="bone.id" >
                         <BonCard :title="bone.title" :bone="bone.numerOfBon"></BonCard>
                    </slide>
                </hooper>
            </div>
        </div>
        <div class="container info-menu-section">
            <div class="row d-flex">    
                <img src="@/assets/img/address.svg">
                <h6>آدرس های من</h6>
                <i class="material-icons arrow ml-auto">keyboard_arrow_left</i>
            </div>
            <div class="row d-flex">    
                <img src="@/assets/img/address.svg">
                <h6>تراکنش های مالی</h6>
                <i class="material-icons arrow ml-auto">keyboard_arrow_left</i>
            </div>
            <div class="row d-flex">    
                <img src="@/assets/img/address.svg">
                <h6>تراکنش های مالی</h6>
                <i class="material-icons arrow ml-auto">keyboard_arrow_left</i>
            </div>
        </div>
        <!-- <div class="bottom-section"></div> -->
        <Mbottom></Mbottom>
    </div>
</template>

<script>

import { Hooper, Slide } from 'hooper';
import 'hooper/dist/hooper.css';

import BonCard from "@/components/accountPage/BonCardComponent"
import Mbottom from "@/components/marginBottomComponents"

export default {
  components: {
    Hooper,
    Slide,
    BonCard,
    Mbottom
  },
 data () {
     return {
         hooperSettings: {
            itemsToShow: 1.03
         },
         bones: [
            {
                id: 1,
                title: "جوانسازی صورت باآر اف تری پولار در مطب دکتر...",
                numerOfBon: 118
            },
            {
                id: 1,
                title: "جوانسازی صورت باآر اف تری پولار در مطب دکتر22...",
                numerOfBon: 222
            }
         ]
     }
 }
}
</script>

<style scoped>
.bottom-section{
    height: 100px;
    margin-bottom: 100px;
}
.top-div{
    margin-top: 50px;
    padding-bottom: 16px;
    box-shadow: 0px 2px 2px 0px #e8e8e8;
}
.name-section {
    text-align: center;
    margin: 0 auto;
}
.name-section h5{
    font-size: 17px;
}
.name-section p{
    font-size: 14px;
}
.kifpool-section {
    text-align: center;
    margin-top: 27px;
}
.kifpool-section img{
    width: 28px;
    height: 24px;
}
.kifpool-section p{
    font-size: 12px;
    font-weight: 600;
}
.kifpool-section .mony{
    color: #666666;
    margin-top: -9px;
}

.bon-section {
    margin-top: 24px;
    vertical-align: middle;
}
.bon-section .bon-title-section p{
    color: #f36969;
    text-align: left;
    font-size: 14px;
    font-weight: 500;
}
.bon-section .bon-title-section h6{
    font-size: 15px;
    font-weight: 600;
}
.bon-section .carousel-container{
    margin-top: 8px;
    margin-right: 15px;
}
.info-menu-section img{
    width: 20px;
    height: 20px;
    margin-top: -4px;
}
.info-menu-section i {
    color: #c7c7c7;
    margin-top: -2px;
}
.info-menu-section h6 {
    margin-right: 20px;
    font-size: 12px;
    vertical-align: middle;
}
.info-menu-section .row {
    margin: 12px 0;
    margin-top: 15px;
    padding: 6px 0;
    border-bottom: 2px solid #e8e8e8;
}
.info-menu-section .row:last-child {
    border-bottom: none;
}
</style>