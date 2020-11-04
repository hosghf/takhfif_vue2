<template>
    <div class="page-root">

        <!-- the item section -->
        <div v-for="num in TestNumbers" :key="num.id" :class="num.id" class="mb-4">
            <div class="container">
                <ShopingItem :firstPrice="num.firstPrice" secondPrice="110/000"></ShopingItem>
            </div>
            <div class="del mt-3">
                <div class="item">
                    <ShopingItem :firstPrice="num.firstPrice" secondPrice="110/000"></ShopingItem>
                </div>
                <div class="delete">
                    <div class="del-oval" @click="deleteItem">
                        <img src="../../assets/img/deleteico.png">
                    </div>
                </div>
            </div>   
        </div> 

        <div class="sum-section container">
            <div class="row">
                <div class="col-6 py-2">
                    <span>
                        جمع سبد:
                        <span class="font-weight-bold">3/25/000</span>
                        تومان
                    </span>
                </div>
                <div class="col-6">
                    <button class="btn btn-success taeedBtn">
                        تایید و ادامه
                    </button>
                </div>
            </div>
        </div>

        <!-- <div class="bottom-section"></div> -->
        <Mbottom></Mbottom>
    </div>
</template>

<script>
import ShopingItem from "@/components/shopingCardPageComponents/shopingItemComponent"
import Mbottom from "@/components/marginBottomComponents"

export default {
    components: {
        ShopingItem,
        Mbottom
    },
    data() {
        return {
            TestNumbers: [
                {
                    id: 1,
                    firstPrice: "12000"
                },
                {
                    id: 2,
                    firstPrice: "200000"
                }
            ],
        }
    },
    methods: {
        deleteItem: function(){
            alert('hello')
        }
    }
}
</script>

<style scoped>
.page-root{
    margin-top: 70px;
    overflow: hidden;
}
.del{
    /* display: inline-block; */
    width: 135%;
    height: 123px;
    background: #fbd7d7;
}
 .item{
    width: 66%;
    display: inline-block;
    position: relative;
    right: -12.5%;
    height: 123px;
    background: #fbd7d7;
    box-shadow:  0 0 0 0 ;
    vertical-align: middle;
}
.delete{
    display: inline-block;
    width: 20%;
    height: 123px;
    background: rgb(255,255,255);
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 26%, rgba(251,215,215,1) 100%);
    position: relative;
    right: -12%;
    /* z-index: -1; */
    vertical-align: middle;
    /* padding: 4%; */
}
.delete .del-oval {
    width: 50px;
    height: 80px;
    background: #f15252;
    border-radius: 25px;
    text-align: center;
    padding-top: 24px;
    margin: 0 auto;
    margin-top: 17px;
}

.sum-section{
    background: #e7e7e7;
    height: 80px;
    font-size: 14px;
}
.sum-section div{
   margin-top: 24px;
   font-size: 13px;
}
.sum-section .taeedBtn{
    background: #19c188;
    border: none;
    width: 97%;
    height: 33px;
    font-size: 13px;
    font-weight: 400;
    margin-right: -3px;
}
.bottom-section {
    height: 60px;
}
</style>