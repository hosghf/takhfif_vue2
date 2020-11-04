<template>
    <div class="flex">
        <div class="takhfif-btn" :class="{medium: isMedium()}">
            <span>
                {{percent}}%
            </span>
            <span class="text-normal" :class="{textSm: isMedium()}">
                تخفیف
            </span>
        </div>
        <div class="flex-right">
            <span class="text-success discount" :class="{discountMedium: isMedium()}">
                {{secondPrice}}
            </span>
            <span class="text-muted price">
                <del>
                    {{firstPrice}}
                </del>
            </span>
        </div>
    </div>
</template>

<script>
export default {
    props: ['percent' , 'medium', "firstPrice", "secondPrice"],
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
    width: 83px;
    height: 27px;
    background: #f15252;
    border-radius: 20px;
    text-align: center;
    color: #fff;
    padding: 2px 4px;
    display: inline-block;
}
.flex{
    display: flex;
}
.flex-right{
    flex-grow: 1;
    text-align: end;
}
.text-normal{
    font-size: 12px;
}
.textSm{
    font-size: 11px;
}
.medium{
    font-size: 0.85rem;
    height: 20px;
    width: 67px;
    width: fit-content;
    padding: 1px 6px;
}
.discount{
    font-size: 17px;
    font-weight: bold;
    margin: 0 6px;
}
.discountMedium {
    font-size: 15.5px;
    font-weight: bold;
}
.price{
    font-size: 13px;
}
</style>