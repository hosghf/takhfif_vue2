<template>
    <div>
        <div class="bon-card">
            <div class="d-flex mb-2">
                <!-- <h6 class="title">جوانسازی صورت باآر اف تری پولار در مطب دکتر...</h6> -->
                <h6 class="title">{{title}}</h6>
                <div class="bon-circle ml-auto">
                    <span>{{bone}}</span>
                    <span>بن</span>
                </div>
            </div>
            <div class="row content">
                <div class="col-6">وضعیت:</div>
                <div class="col-6 text-center">منقضی یا استفاده شده</div>
            </div>
            <div class="content row">
                <div class="col-6">مهلت استفاده:</div>
                <div class="col-6 text-center">1399/8/21</div>
            </div>
            <div class="row content">
                <div class="col-6">تاریخ استفاده:</div>
                <div class="col-6 text-center">1399/8/21</div>
            </div>

            <div class="detail-button">
                مشاهده جزییات
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: ["title", "bone"]
}
</script>
<style scoped>
.bon-card{
    width: 95%;
    height: 175px;
    border-radius: 20px;
    box-shadow: 0 3px 6px 2px #eee;
    margin: 10px 0;
    padding: 8px 11px;
    position: relative;
}
.bon-circle{
    height: 35px;
    width: 35px;
    border-radius: 50%;
    background: #19c088;
    font-size: 12.4px;
    text-align: center;
    vertical-align: middle;
    color: #fff;
    padding-top: 2px;
}
.bon-circle span{
    margin: 0;
    padding: 0;
    display: block;
    height: 12px;
}
.title{
    font-size: 13.2px;
    display: contents;
}
.content {
    font-size: 12px;
    color: #666666;
    margin-bottom: 12px;
}
.detail-button {
    position: absolute;
    display: inline-block;
    bottom: 0;
    left: 0;
    background: #f15252;
    width: 30%;
    height: 33px;
    border-radius: 0 15px 0 15px;
    color: #fff;
    text-align: center;
    vertical-align: middle;
    font-size: 11px;
    padding-top: 8px;
}
.detail-button:hover {
    cursor: pointer;
}
</style>