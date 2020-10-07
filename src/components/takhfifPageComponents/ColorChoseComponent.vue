<template>
      <div class="container-fluid mt-3 py-2 pb-4 bg-white">
            <h6 class="py-1">انتخاب رنگ:</h6>
            <div class="row">
                <div class="mr-2 outerOval p-2 mx-1" @click="selected" 
                                    v-for="color in colors" :key="color.title">
                    <div class="color-div" :style="'background: ' + color.color"></div>
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
    font-size: 15px;
}
.outerOval{
    background: #fff;
    border-radius: 18px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    height: 40px;
    width: 17.5%;
    font-size: 11px;
    text-align: center;
}
.color-div{
    width: 40px;
    height: 10px;
    border-radius: 5px;
}
.selected{
    border: 2px solid pink;
    box-shadow: 0 4px 8px 0 #fbc9c9, 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
</style>