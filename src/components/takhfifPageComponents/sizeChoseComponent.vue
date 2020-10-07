<template>
    <div class="container-fluid mt-3 py-2 pb-4 bg-white">
        <h6 class="py-2">انتخاب سایز:</h6>
        <div class="container row">
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
    font-size: 15px;
}
.size{
    width: 34px;
    height: 34px;
    border-radius: 15px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    text-align: center;
    vertical-align: middle;
}
.container{
    padding-left: 15%;
    padding-right: 15%;
}
.selected{
    border: 1px solid pink;
    box-shadow: 0 4px 8px 0 #fbc9c9, 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
</style>