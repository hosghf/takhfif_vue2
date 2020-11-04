<template>
    <div>
        <div class="shoping-item">
            <div class="row top-section">
                <div class="img"></div>
                <div class="left-side">
                    <h6>
                        خدمات پاکسازی صورت یا کوتاهی مو در آرایشگاه مردانه کاج
                    </h6>
                    <TakhfifPercent class="ml-2"
                        percent="71"
                        medium="1"
                        :firstPrice="firstPrice"
                        :secondPrice="secondPrice"
                        ></TakhfifPercent>
                </div>
            </div>
            <div class="row bottom-section">
                <div class="right-bnts">
                    <div class="count">
                        <button>+</button>
                        <div class="py-1 number">2</div>
                        <button>-</button>
                    </div>
                </div>
                <div class="total-price pt-2 ml-1">
                    جمع:
                    2/200/000
                    تومان
                </div>
            </div>
        </div>
    <!-- <div class="bottom-space"></div> -->
    </div>
</template>

<script>
import TakhfifPercent from "@/components/takhfifPageComponents/takhfifPercent"
export default {
    components: {
        TakhfifPercent
    },
    props: ["firstPrice", "secondPrice"]
}
</script>

<style scoped>
h6{
    font-size: 10.4px;
    line-height: normal;
    font-weight: bold;
}
.bottom-space{
    height: 15px;
}
.shoping-item{
    /* width: 100%; */
    height: 123px;
    background: #fff;
    border-radius: 11px;
    box-shadow: 0px 0px 4px 1.4px #eee;
    padding: 7px;
}
.top-section{
    margin: 0;
    height: 66px;
}
.top-section .img{
    width: 33.8%;
    height: 66px;
    border-radius: 10px;
    margin-left: 3px;
    background: url("../../assets/img/shopingcardimg.png");
}
.top-section .left-side{
    width: 63.4%;
    height: 66px;
    float: left;
    margin-right: 3px;
}

.bottom-section{
    margin: 0;
    height: 25px;
    margin-top: 10px;
}
.bottom-section .right-bnts{
    width: 33.8%;
    display: inline-block;
}
.bottom-section .total-price{
    width: 63.4%;
    text-align: left;
    float: right;
    font-size: 12px;
}
.count{
    margin: auto;
    display: inline-block;
    font-size: 12px;
    width: 110px;
}
.count div{
    display: inline-block;
    height: 22px;
    width: 35px;
    text-align: center;
    vertical-align: middle;
    background: #f15252;
    color: white;
}
.count button {
    height: 22px;
    width: 35px;
    background: white;
    color: #000;
    text-align: center;
    font-weight: bold;
    vertical-align: middle;
    border: 0;
    box-shadow: 0px 0px 2px 1px #eee;
}
.count .number{
    margin-top: -3px;
}
</style>