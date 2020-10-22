<template>
    <div class="container content-section mt-3 bg-white py-2">
        <div class="title row" @click="toggleTab">
            <h6 class="col-6"> {{title}} </h6>
            <span class="close ml-auto mr-auto col-1">
                <img :class="{rotate: display}" src="@/assets/img/up-chevron.png">
            </span>
        </div>
        <div class="body my-2 p-2" :class="{display: display}" transition="fade">
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
        margin: 5px 0;
        list-style-image: url('../../assets/img/tick.png');
        padding-right: 15px;
        font-size: 14px;
    }
    li {
        padding-top: 7px;
    }
    p{
        font-size: 14px;
        line-height: 2;
    }
    h6{
        font-size: 15px;
    }
    .bg-div{
        background: #d1fff0;
        margin-right: 0;
    }
    .bg-gray{
        background: #e7e7e7;
        font-size: 14px;
    }
    .bg-white{
        font-size: 14px;
    }
    .map{
        width: 100%;
        height: 150px;
    }
    .map iframe {
        width: 100%;
        height: 100%;
    }
</style>