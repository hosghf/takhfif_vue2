<template>

    <div class="root-div">
        <div class="top-img-div" :style="'background: url('+saleInfo.background+')' + '; background-repeat: round;'">
            <!-- top image section -->
            <div class="row top-img-buttons-container">
                <div class="bookmark-holder">
                    <i class="material-icons text-danger bookmark">bookmark</i>
                </div>
                <div class="bookmark-holder">
                    <i class="material-icons share">share</i>
                </div>

                <div class="left-number ml-auto mr-auto">
                    2/8
                </div>
                <div class="right-space"></div>
            </div>

            <div class="row timer-section-container">
                <div class="py-2 mohlate-kharid">
                    <i class="material-icons ml-1">access_time</i>
                    <span>مهلت خرید</span>
                </div>
                <div class="py-2 timer-container">
                    <div class="timer mx-3 mb-1">
                        21
                    </div>
                    <span class="mx-3">
                        ثانیه
                    </span>
                </div>
                <div class="py-2 timer-container">
                    <div class="timer mx-3 mb-1">
                        12
                    </div>
                    <span class="mx-3">
                        دقیقه
                    </span>
                </div>
                <div class="py-2 timer-container">
                    <div class="timer mx-3 mb-1">
                        23
                    </div>
                    <span class="mx-3">
                        ساعت
                    </span>
                </div>
                <div class="py-2 timer-container">
                    <div class="timer mx-3 mb-1">
                        28
                    </div>
                    <span class="mx-3">
                        روز
                    </span>
                </div>
            </div>
        </div>
        
        <div style="background: #fff">

            <div class="container-fluid price-section">
                <TakhfifPercent percent="71" medium="0" firstPrice="200/000" secondPrice="58/000"></TakhfifPercent>
            </div>

            <div class="container-fluid explanation">
                <h6>خدمات پاکسازی صورت یا کوتاهی مو درآرایشگاه مردانه کاج با 50% تخفیف و شروع پرداخت از 15000 تومان</h6>
            </div>
        </div>

        <div class="container-fluid star-section">
            <div class="row">
                <div class="col-6">
                    <!-- <ovalStar number="4.2" background="#e7e7e7"></ovalStar> -->
                     <div class="star">
                        <i class="material-icons">star</i>
                        <span>4.2</span>
                     </div>
                    امتیاز از مجموع 20 رای
                </div>
                <div class="col-4 location">
                    <p>
                        <i class="material-icons">room</i>
                        <span class="mr-1">شهیدان اشرف</span>
                    </p>
                    <p>
                        <i class="material-icons">shopping_basket</i>
                        <span class="mr-1"> 254 </span>
                    </p>
                </div>
            </div>
        </div>

      <ColorChose></ColorChose>
      <SizeChose></SizeChose>

      <Card title="ویژگی ها:">
          <ul>
              <li>با 25% تخفیف</li>
              <li>پرداخت 1150 تومان اما به ارزش 15000 تومان</li>
              <li>حوضچه آبسرد و ... تخفیف برگ شامل استفاده از استخر سونا</li>
              <li>شسیباشسیبننم</li>
              <li>شسیباشسیبننم</li>
          </ul>

          <h6 class="mt-4 text-bold">سانس های آزاد استخر</h6>
          <p class="mt-2">
              هر روز به استثنای روز های جمعه 8 صبح تا یک بامداد بصورت سانس باز 120 دقیقه ای 
          </p>
          <p>نکته: فلان فلان فلان و فلان</p>
      </Card>

      <Card title="شرایط و نکات:">
          <div class="bg-div p-2">
              <h6 class="font-weight-bold">خرید آفلاین</h6>
              <p class="mt-2">
                  هر روز به استثنای روز های جمعه 8 صبح تا یک بامداد بصورت سانس باز 120 دقیقه ای 
              </p>
              <p class="font-weight-bold">
                  مهم: مجموعه جمعه ها بسته میباشد.
              </p>
          </div>

          <ul class="mt-3">
              <li>بدون محدودیت در تعداد</li>
              <li>بدون محدودیت در تعداد</li>
              <li>بدون محدودیت در تعداد</li>
              <li>بدون محدودیت در تعداد</li>
          </ul>
      </Card>

      <Card title="اطلاعات مجموعه:">
          <div class="information-section">
            <div class="info-row bg-white py-2">
                <div class="col-6">مهلت استفاده</div>
                <div class="col-6 text-right">3 روز</div>
            </div>
            <div class="info-row bg-gray py-2">
                <div class="col-6"> ساعات پاسخگویی</div>
                <div class="col-6 text-right">8 صبح تا یک بامداد </div>
            </div>
            <div class="info-row bg-white py-2">
                <div class="col-6">  شماره تلفن مجموعه</div>
                <div class="col-6 text-right">035676535</div>
            </div>
            <div class="info-row bg-gray py-2">
                <div class="col-6">روزهای سرویس دهی</div>
                <div class="col-6 text-right">شبنه تا پنچشنبه</div>
            </div>
            <div class="row bg-white py-2 mt-3">
                <div class="py-2">آدرس مجموعه:</div>
                <p> بعد از دروازه قرآن روبروی کاشی مسعود میدان میوه و تره بار شاهدیه</p>
            </div>
            
            <div class="map row">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d6934.974730860709!2d52.48416351874294!3d29.647628834825653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1602015413381!5m2!1sen!2s" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
            </div>
          </div>
      </Card>

      <Card title="توضیحات تکمیلی:">
          <p>
              کافه رستوران نخل با بهره گیری از کادر حرفه ای و بهترین مواد اولیه تمام تلاش خود را برای عرضه با کیفیت ترین و لذیذ ترین خوراک ها را برای شما به کار گرفته تا تجربه یک غذای عالی در محیطی زیبا را به خاطره ای فراموش نشدنی برای شما تبدیل کند.
          </p>
      </Card>
      
      <ChoseTakhfifBarg></ChoseTakhfifBarg>

      <div class="container container-buy-button py-4">
          <div class="row">
              <div class="buyButtonSection">
                <button class="buy ml-1">خرید سریع</button>
                <button class="addtoBasket">افزودن به سبد خرید</button>
              </div>
          </div>
      </div>

    </div>
</template>

<script>
import ColorChose from "@/components/takhfifPageComponents/ColorChoseComponent"
import SizeChose from "@/components/takhfifPageComponents/sizeChoseComponent"
import Card from "@/components/takhfifPageComponents/cardComponent"
import ChoseTakhfifBarg from "@/components/takhfifPageComponents/choseTakhfifBarg"
import TakhfifPercent from "@/components/takhfifPageComponents/takhfifPercent"


export default {
    name: 'takhfifPage',
    data() {
        return {
            saleInfo: {
                background: require('@/assets/img/saleimg.jpg')
            }
        }
    },
    components: {
        ColorChose,
        SizeChose,
        Card,
        ChoseTakhfifBarg,
        TakhfifPercent
    }
}
</script>

<style scoped>
h6{
    font-size: 14px;
}
i{
    font-size: 18px;
    vertical-align: middle;
}
.text-sm{
    font-size: 10px;
    vertical-align: middle;
}
.text-lg{
    font-size: 18px;
    vertical-align: middle;
}
.root-div{
    margin-top: 36px;
    background: #f8f8f8;
}
.top-img-div{
    width: 100%;
    height: 239px;
    background-repeat: round;
    font-size: 13px;
    position: relative;

}
.top-img-buttons-container{
    height: 35px;
    width: 100%;
    position: relative;
    top: 24px;
    margin: 0;
}
.bookmark-holder{
    width: 31px;
    height: 30px;
    border-radius: 50%;
    background: #fff;
    margin-right: 7px;
}
.bookmark-holder .bookmark {
    padding: 4px;
    font-size: 22px;
}
.bookmark-holder .share {
    padding: 5px;
    color: #afafaf;
    font-size: 22px;
}
.left-number{
    height: 30px;
    width: 61px;
    border-radius: 30px;
    background: #333333;
    margin-left: 15px;
    opacity: 86%;
    color: #fff;
    padding: 5px;
    text-align: center;
}
.right-space{
    width: 15px
}

.timer-section-container{
    width: 68%;
    height: 52px;
    background: #fff;
    position: absolute;
    bottom: -17px;
    border-radius: 30px 0 0 0 ;
    padding-left: 9px;
}
.timer-section-container .mohlate-kharid{
    font-size: 13px;
    width: 33%;
    margin-right: 20px;
    margin-top: 6px;
    font-weight: 500;
}
.timer-section-container .mohlate-kharid i{
    font-size: 13px;
    margin-top: 2px;
    vertical-align: middle;
}

.timer-container{
    width: 13%;
    font-size: 10px;
    /* text-align: center; */
}
.timer{
    width: 20px;
    height: 21px;
    border-radius: 50%;
    padding: 4px 0;
    text-align: center;
    color: #fff;
    background: #f15252;
}

/* price section */
.price-section{
    /* margin-top: 34px; */
    padding-top: 34px;
    width: 228px;
    margin-right: 0;
}
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
.explanation{
    margin-top: 20px;
    padding-bottom: 6px;
    padding: 0 15px 32px;
}
.explanation h6{
    font-weight: 700;
    line-height: normal;
    font-size: 15px;
}

.star-section{
    height: 72px;
    /* margin: 0; */
    margin-top: 10px;
    font-size: 12px;
    background: #fff;
}
.star-section .col-6{
    padding: 0;
    padding-right: 15px;
}
.star-section .location{
    margin-right: 30px;
    border-right: 1px solid #ddd;
    font-weight: bold;
}
.star-section .row {
    padding-top: 12px
}
/* star point */
.star{
    height: 24px;
    width: 50px;
    background: #e7e7e7;
    border-radius: 10px;
    margin-top: 10px;
    /* margin-right: 12px; */
    display: inline-block;
    font-size: 13.3px;
    padding: 3px 2px;
    font-weight: bold;
    text-align: center;
}
 .star i {
    vertical-align: middle;
    color: #ffc107;
    font-size: 17px;
    margin-left: 2px;
}

.container-buy-button{
    background: #e7e7e7;
    margin-bottom: 55px;
}
.buyButtonSection{
    width: 90%;
    margin: auto;
    font-size: 12.5px;
    background: #e7e7e7;
    text-align: center;
}
.buyButtonSection button{
    /* width: 150px; */
    width: 48%;
    height: 33px;
    border-radius: 16.5px;
    border: 0;
    color: #fff;
    padding-right: 8px;
    padding-left: 8px;
}
.addtoBasket{
    background: #f15252;
}
.buy {
    background: #19c188;
}
</style>