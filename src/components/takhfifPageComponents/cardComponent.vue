<template>
    <div class="container content-section mt-3 bg-white py-2">
        <div class="title row" @click="toggleTab">
            <h6 class="col-6 title"> {{title}} </h6>
            <span class="ml-auto mr-auto col-1">
                <!-- <img :class="{rotate: display}" src="@/assets/img/up-chevron.png"> -->
                 <i v-if="display" class="material-icons arrow">keyboard_arrow_down</i>
                 <i v-if="!display" class="material-icons arrow">keyboard_arrow_up</i>
            </span>
        </div>
        <div class="body" :class="{display: display}" transition="fade">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
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
    props: ['title']
}
</script>

<style scoped>
    .display{
        display: none;
        transition: all 1s ease;
    }
    .rotate{
        -ms-transform: rotate(180deg); /* IE 9 */
        transform: rotate(180deg);
    }
    ul{
        margin: 5px 6px;
        list-style-image: url('../../assets/img/tick.png');
        padding-right: 15px;
        font-size: 14px;
    }
    li {
        padding-top: 7px;
        font-weight: 500;
        font-size: 13px;
    }
    p{
        font-size: 13px;
        line-height: 2;
    }
    h5{
        font-size: 14px;
        font-weight: 600;
    }
    h6{
        font-size: 14px;
        font-weight: bold;
    }
    .title{
        font-size: 14px;
        font-weight: 600;
    }
    .title i {
        color: #333;
    }
    .bg-div{
        background: #d1fff0;
        margin-right: 0;
    }
    .bg-div h6{
        font-size: 13px;
        font-weight: bold;
    }
    .bg-gray{
        background: #e7e7e7;
        font-size: 14px;
    }
    .bg-white{
        font-size: 14px;
    }
    .map{
        height: 150px;
    }
    .map iframe {
        width: 100%;
        height: 100%;
    }
    .information-section div{
        font-size: 13px;
    }
    .information-section .row{
        margin: 0;
    }
    .information-section .info-row {
        display: flex;
        flex-wrap: wrap;
        padding: 0;
        margin: 0 -15px;
    }
    .information-section .info-row .col-6 {
       padding: 0 15px ;
    }
</style>