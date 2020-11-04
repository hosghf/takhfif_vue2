<template>
    <div class="mt-5 bg-white">
        <div class="title" @click="toggleTab">
            انتخاب تخفیف برگ
            <!-- <img :class="{rotate: display}" src="@/assets/img/up-chevron.png"> -->
            <i v-if="display" class="material-icons arrow">keyboard_arrow_down</i>
            <i v-if="!display" class="material-icons arrow">keyboard_arrow_up</i>
        </div>
        <div class="body container mt-2" :class="{display: display}">
            <!-- <div class="border-bottom-red mb-2 pb-2"> -->
            <div class="mb-2">
                <label class="container-radio">
                    <input type="radio" checked="checked" name="radio">
                    <span class="checkmark"></span>ماساژ شکم
                </label>

                <div class="container-fluid font12">
                    <div class="row">
                        <TakhfifPercent class="m5PxMinu" percent="71" medium="1" firstPrice="200/000" secondPrice="58/000"></TakhfifPercent>
                        <div class="ml-auto mr-auto">
                            <i class="material-icons">shopping_basket</i>
                            <span class="font-weight500"> 25 </span>
                        </div>
                    </div>
                    <div class="row mt-3">
                        <div class="font-weight500">
                            مهلت استفاده:
                        </div>
                        <div class="date ml-auto mr-auto">
                            1399/11/21
                        </div>
                    </div>
                </div>
                <div class="border-bt-red"></div>
                <div class="border-bt-gray"></div>
            </div>

            <div class="my-3 font12">
                <label class="container-radio">
                    <input type="radio" name="radio">
                    <span class="checkmark"></span>ماساژ شکم
                </label>

                <div class="container-fluid">
                    <div class="row">
                        <TakhfifPercent class="m5PxMinu" percent="71" medium="1" firstPrice="200/000" secondPrice="58/000"></TakhfifPercent>
                        <div class="ml-auto mr-auto">
                            <i class="material-icons">shopping_basket</i>
                            <span class="font-weight500"> 25 </span>
                        </div>
                    </div>
                    <div class="row mt-3">
                        <div class="font-weight500">
                            مهلت استفاده:
                        </div>
                        <div class="date ml-auto mr-auto">
                            1399/11/21
                        </div>
                    </div>
                    <div class="row mb-3 mt-4">
                        <div class="count">
                            <button>+</button>
                            <div>2</div>
                            <button>-</button>
                        </div>
                    </div>
                </div>
                <div class="border-bt-red"></div>
                <div class="border-bt-gray"></div>
            </div>

            <div class="mb-2 pb-2 font12">
                <label class="container-radio">
                    <input type="radio" name="radio">
                    <span class="checkmark"></span>ماساژ شکم
                </label>

                <div class="container-fluid">
                    <div class="row">
                        <TakhfifPercent class="m5PxMinu" percent="71" medium="1" firstPrice="200/000" secondPrice="58/000"></TakhfifPercent>
                        <div class="ml-auto mr-auto">
                            <i class="material-icons">shopping_basket</i>
                            <span class="font-weight500"> 25 </span>
                        </div>
                    </div>
                    <div class="row mt-3">
                        <div class="font-weight500">
                            مهلت استفاده:
                        </div>
                        <div class="date ml-auto mr-auto">
                            1399/11/21
                        </div>
                    </div>
                </div>
            </div>
  
        </div>
    </div>
</template>

<style scoped>
.body{
    font-size: 14px;
}
.title{
    height: 40px;
    padding: 10px;
    font-weight: bold;
    font-size: 14px;
    text-align: center;
    box-shadow: 0 1px 1px 1px #eee;
}
.title i {
    font-size: 21px;
    vertical-align: middle;
    font-weight: 600;
}
i {
    font-size: 14px;
    vertical-align: middle;
}
.display{
    display: none;
}

.container-radio {
  display: block;
  position: relative;
  padding-right: 25px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 12px;
  font-weight: bold;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Hide the browser's default radio button */
.container-radio input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}

/* Create a custom radio button */
.checkmark {
  position: absolute;
  top: 0;
  right: 0;
  height: 16px;
  width: 16px;
  background-color: #fff;
  border-radius: 50%;
  border: 1px solid #e8e8e8;
}

/* On mouse-over, add a grey background color */
.container-radio:hover input ~ .checkmark {
  background-color: #ccc;
}

/* When the radio button is checked, add a blue background */
.container-radio input:checked ~ .checkmark {
  background-color: #fff;
}

/* Create the indicator (the dot/circle - hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the indicator (dot/circle) when checked */
.container-radio input:checked ~ .checkmark:after {
  display: block;
}

/* Style the indicator (dot/circle) */
.container-radio .checkmark:after {
 	top: 2px;
	left: 1.9px;
	width: 10px;
	height: 10px;
	border-radius: 50%;
	background: #f15252;
}


.count{
    margin: auto;
    widows: 40%;
    display: inline-block;
}
.count div{
    display: inline-block;
    height: 37px;
    width: 61px;
    text-align: center;
    vertical-align: middle;
    background: #f15252;
    color: white;
    padding-top: 10px;
    box-shadow: 0 0 9px 0px #eee;
    font-weight: 500;
}
.count button {
    height: 37px;
    width: 61px;
    background: white;
    color: #000;
    text-align: center;
    font-weight: bold;
    vertical-align: middle;
    border: 0;
    box-shadow: 0 0 9px 0px #eee;
}
.font12 {
    font-size: 12px;
}
.font-weight500{
    font-weight: 500;
}
.border-bt-red {
    border-bottom: 1px solid #f15656;
    margin: 0 -15px;
    margin-top: 10px;
}
.border-bt-gray {
    border-bottom: 1px solid #e7e7e7;
    margin: 0 -15px;
    /* margin-top: 10px; */
}
.m5PxMinu {
    margin-right: -5px;
}
</style>

<script>
import TakhfifPercent from "@/components/takhfifPageComponents/takhfifPercent"

export default {
    components: {
        TakhfifPercent
    },
      data(){
        return {
            display: false,
        }
    },
    methods: {
        toggleTab: function(){
            this.display = !this.display;
        }
    },
}
</script>