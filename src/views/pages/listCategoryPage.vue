<template>
    <div class="root-div mb-5">
        <div class="container">
            <div class="row top-cat">
                <CategoryDropdown title="دسته بندی"></CategoryDropdown>
                <CategoryDropdown title="جدیدترین"></CategoryDropdown>
            </div>
        </div>
        <div class="container mt-3 mb-4" v-for="takhfif in takhfifha" :key="takhfif.id">
            <div class="container mb-4">
                <div class="row">
                    <TakhfifCard 
                                :title="takhfif.title"
                                :location="takhfif.location"
                                :background="takhfif.background"
                                :star="takhfif.star"
                                :refund="takhfif.refund"
                                :oldprice="takhfif.oldprice"
                                :newprice="takhfif.newprice"
                                :percent="takhfif.percent"
                                >
                    </TakhfifCard>
                </div>
            </div>
        </div>

        <!-- <div class="bottom-space"></div> -->
        <Mbottom></Mbottom>
    </div>
</template>

<script>
import CategoryDropdown from "@/components/categoryPagesComponents/dropDownMenu/dropdownCategoryComponent"
import TakhfifCard from "@/components/takhfifCardComponent"
import Mbottom from "@/components/marginBottomComponents"

export default {
    components: {
        CategoryDropdown,
        TakhfifCard,
        Mbottom
    },
    data(){
        return {
            img: require('@/assets/img/tt2.png'),
            takhfifha: [
                {
                    id:1,
                    location: "شهیدان مشرف",
                    title: "میکرودرم آبریژن در مطب خانم دکتر نرگس قانعی(متخصص...",
                    background: require('@/assets/img/tt2.png'),
                    star:"4.2",
                    refund: "4000",
                    oldprice: "58000",
                    newprice: "28000",
                    percent: "71"
                },
                {
                    id:2,
                    location: "میدان معلم",
                    title: " فلان فلان فلان فلان فلان",
                    background: require('@/assets/img/tt2.png'),
                    star:"3.9",
                    refund: "300",
                    oldprice: "42000",
                    newprice: "12000",
                    percent: "41"
                },
                {
                    id:3,
                    location: "میدان معلم",
                    title: " فلان فsdfsdن فلان فلان",
                    background: require('@/assets/img/tt2.png'),
                    star:"3.9",
                    refund: "300",
                    oldprice: "42000",
                    newprice: "12000",
                    percent: "41"
                }
            ]
        }
    }
}
</script>

<style scoped>
.root-div{
    margin-top: 45px;
    height: 46px;
    background: #fff;
}
.top-cat{
    margin-bottom: 2px;
    padding-bottom: 4px;
    border-bottom: 1px solid #eee;
}
.bottom-space{
    margin-bottom: 50px;
    height: 10px;
}
</style>