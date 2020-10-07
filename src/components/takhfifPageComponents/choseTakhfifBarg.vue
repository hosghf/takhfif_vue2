<template>
    <div class="mt-5 bg-white">
        <div class="title" @click="toggleTab">
            انتخاب تخفیف برگ
            <img :class="{rotate: display}" src="@/assets/img/up-chevron.png">
        </div>
        <div class="body container" :class="{display: display}">
            <div class="border-bottom-red mb-2 pb-2">
                <label class="container-radio">
                    <input type="radio" checked="checked" name="radio">
                    <span class="checkmark"></span>ماساژ شکم
                </label>

                <div class="container-fluid">
                    <div class="row">
                        <TakhfifPercent percent="71" medium="1"></TakhfifPercent>
                        <div class="ml-auto mr-auto">
                            <i class="material-icons">shopping_basket</i>
                            25
                        </div>
                    </div>
                    <div class="row mt-3">
                        <div>
                            مهلت استفاده
                        </div>
                        <div class="date ml-auto mr-auto">
                            1399/11/21
                        </div>
                    </div>
                </div>
            </div>

            <div class="border-bottom-red my-3 pb-2">
                <label class="container-radio">
                    <input type="radio" checked="checked" name="radio">
                    <span class="checkmark"></span>ماساژ شکم
                </label>

                <div class="container-fluid">
                    <div class="row">
                        <TakhfifPercent percent="71" medium="1"></TakhfifPercent>
                        <div class="ml-auto mr-auto">
                            <i class="material-icons">shopping_basket</i>
                            25
                        </div>
                    </div>
                    <div class="row mt-3">
                        <div>
                            مهلت استفاده
                        </div>
                        <div class="date ml-auto mr-auto">
                            1399/11/21
                        </div>
                    </div>
                    <div class="row mb-3 mt-4">
                        <div class="count">
                            <button>+</button>
                            <div class="py-2">2</div>
                            <button>-</button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="mb-2 pb-2">
                <label class="container-radio">
                    <input type="radio" checked="checked" name="radio">
                    <span class="checkmark"></span>ماساژ شکم
                </label>

                <div class="container-fluid">
                    <div class="row">
                        <TakhfifPercent percent="71" medium="1"></TakhfifPercent>
                        <div class="ml-auto mr-auto">
                            <i class="material-icons">shopping_basket</i>
                            25
                        </div>
                    </div>
                    <div class="row mt-3">
                        <div>
                            مهلت استفاده
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
    font-size: 15px;
    text-align: center;
}
i {
    font-size: 14px;
    vertical-align: middle;
}
.display{
    display: none;
}

/* The container */
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
  height: 15px;
  width: 15px;
  background-color: #ccc;
  border-radius: 50%;
  border: 1px solid #999;
}

/* On mouse-over, add a grey background color */
.container-radio:hover input ~ .checkmark {
  background-color: #ccc;
}

/* When the radio button is checked, add a blue background */
.container-radio input:checked ~ .checkmark {
  background-color: #f15252;
}
.border-bottom-red{
    border-bottom: 1px solid #f15252;
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
    box-shadow: 7px 7px 10px 4px #eee;
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
            display: false
        }
    },
    methods: {
        toggleTab: function(){
            this.display = !this.display;
        }
    },
}
</script>