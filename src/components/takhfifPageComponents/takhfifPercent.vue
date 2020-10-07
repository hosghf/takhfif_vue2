<template>
    <div>
        <div class="takhfif-btn" :class="{medium: isMedium()}">
            <span>
                {{percent}}%
            </span>
            <span class="text-sm">
                تخفیف
            </span>
        </div>
        <span class="text-success mx-3 discount" :class="{discountMedium: isMedium()}">
            58/000
        </span>
        <span class="text-muted ml-3 price"><del>
            20000 </del>
        </span>
    </div>
</template>

<script>
export default {
    props: ['percent' , 'medium'],
    methods: {
        isMedium: function(){
            if(this.medium == 1){
                return true
            } else{
                return false
            }
        }
    }
}
</script>

<style scoped>
.takhfif-btn{
    width: 86px;
    height: 30px;
    background: #f15252;
    border-radius: 20px;
    text-align: center;
    color: #fff;
    padding: 3px 4px;
    display: inline-block;
}
.text-sm{
    font-size: 10px;
}
.medium{
    font-size: 0.9rem;
    height: 24px;
    width: 66px;
    padding: 1.5px 2px;
}
.discount{
    font-size: 18px;
    font-weight: bold;
}
.discountMedium {
    font-size: 16px;
    font-weight: bold;
}
.price{
    font-size: 14px;
}
</style>