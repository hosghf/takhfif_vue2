<template>
      <div class="container-fluid mt-3 py-1 pb-3 bg-white">
            <h6 class="py-1">انتخاب رنگ:</h6>
            <div class="row">
                <div class="mr-2 outerOval p-2 mx-1" v-on:click="selected" v-for="color in colors" :key="color.title">                    
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="10" viewBox="0 0 40 10">
                        <rect id="Rectangle_1" :style="'fill: ' + color.color" data-name="Rectangle 1" class="cls-1" width="40" height="10" rx="5"/>
                    </svg>
                    {{color.title}}
                </div>  
            </div>
      </div>
</template>

<script>
export default {
    methods:{
        selected: function(event){
            this.children = this.$el.querySelectorAll('.outerOval')
            this.children.forEach(element => {
                element.classList.remove('selected')    
            });
            event.target.classList.toggle('selected')
        },
        isWhite(color) {
            return color == 'white' ? true : false;
        }
    },
    data() {
        return{
            colors: [
                {
                    title: 'قرمز',
                    color: 'red'
                },
                {
                    title: 'سفید',
                    color: 'white'
                },
                {
                    title: 'آبی',
                    color: 'blue'
                },
                {
                    title: 'زرد',
                    color: 'yellow'
                },
                {
                    title: 'صورتی',
                    color: 'pink'
                }
            ],
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
.outerOval{
    background: #fff;
    border-radius: 18px;
    height: 40px;
    box-shadow: 0 0 10px 1px #eee;
    width: 17.5%;
    font-size: 11px;
    text-align: center;
}
.color-div{
    width: 40px;
    height: 10px;
    border-radius: 5px;
    margin: auto;
    box-shadow: 0 0 2px 0.9px #eee;
}
.selected{
    border: 2px solid pink;
    box-shadow: 0px 0px 5px 0.4px #fbc9c9;
}
.boxshadowWith {
    box-shadow: 0 0 1px 0 #eee;
}
.container-fluid .row {
    width: fit-content;
    margin: 0 auto;
}
</style>