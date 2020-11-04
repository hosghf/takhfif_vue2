<template>
    <div class="container-fluid mt-3 py-1 pb-3 bg-white">
        <h6 class="py-1">انتخاب سایز:</h6>
        <div class="row">
            <div class="size mx-3 p-2" @click="selected">
                S
            </div>
            <div class="size mx-3 p-2" @click="selected">
                M
            </div>
            <div class="size mx-3 p-2" @click="selected">
                L
            </div>
            <div class="size mx-3 p-2" @click="selected">
                XL
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        selected: function(event){
            this.children = this.$el.querySelectorAll('.size')
            this.children.forEach(element => {
                element.classList.remove('selected')    
            });
            event.target.classList.toggle('selected')
        }
    },
    data(){
        return {
            children: ''
        }
    }
}
</script>

<style scoped>
h6{
    font-size: 14px;
    font-weight: 600;
}
.size{
    width: 34px;
    height: 34px;
    border-radius: 50%;
    box-shadow: 0 0 5px 0.5px #eee;
    text-align: center;
    vertical-align: middle;
    font-weight: 500;
    font-size: 14px;
}
.container-fluid .row {
    margin: 0 auto;
    width: fit-content;
}
.selected{
    border: 1px solid pink;
    box-shadow: 0 0px 5px 2px #f9b8b8;
}
</style>