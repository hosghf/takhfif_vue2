<template>
    <div>
        <!-- sticky footer tabs -->
        <div class="footer-tabs border-top text-center">
            <ul class="nav nav-tabs justify-content-center" id="myTab" role="tablist">
                <li class="nav-item">
                    <router-link to="/" :class="{active: $route.path == '/' ? true : false}" class="nav-link" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">
                        <i class="material-icons">home</i>
                        <small class="sr-only">Home</small>
                    </router-link>
                    <span class="menu-text">خانه</span>
                </li>
                <li class="nav-item" id="cat-li">
                    <router-link to="/listCategoryPage" class="nav-link" id="search-tab" data-toggle="tab" href="#search" role="tab" aria-controls="search" aria-selected="false">
                    <!-- <i class="material-icons">room</i> --> 
                        <svg class="category" width="20" height="20" viewBox="0 0 512 512.002">
                            <path id="Union_3" :class="{backgroundActive: $route.path == '/listCategoryPage' ? true : false}" data-name="Union 3" d="M5.859,506.146a20,20,0,0,1,0-28.285L91.715,392,5.859,306.146a20,20,0,0,1,28.282-28.285L120,363.716l85.86-85.86a20,20,0,0,1,28.281,28.29L148.285,392l85.856,85.855a20,20,0,1,1-28.281,28.285L120,420.286,34.141,506.146a20,20,0,0,1-28.282,0ZM292,512a20,20,0,0,1-14.141-34.145l200-200A20,20,0,0,1,512,292V492a20,20,0,0,1-20,20ZM272,120A120,120,0,1,1,392,240,120.136,120.136,0,0,1,272,120ZM20,240A20,20,0,0,1,0,220V20A20,20,0,0,1,20,0H220a20,20,0,0,1,20,20V220a20,20,0,0,1-20,20Z"/>
                        </svg>
                        <!-- <img class="catgory" src="@/assets/img/category.png"> -->
                        <small class="sr-only">search</small>
                    </router-link>
                    <span class="menu-text">دسته بندی</span>
                </li>
                <li class="nav-item centerlarge">
                    <div class="items-number">3</div>
                    <router-link to="/shopingcard"  class="nav-link bg-basket" id="cart-tab" data-toggle="tab" href="#cart" role="tab" aria-controls="cart" aria-selected="false">
                        <!-- <i class="material-icons">shopping_basket</i> -->
                        <img src="@/assets/img/supermarket.png">
                        <small class="sr-only">chat</small>
                    </router-link>
                </li>
                <li class="nav-item">
                    <a class="nav-link" id="favorite-tab" data-toggle="tab" href="#favorite" role="tab" aria-controls="favorite" aria-selected="false">
                        <i class="material-icons">bookmark</i>
                        <small class="sr-only">Best</small>
                    </a>
                    <span class="menu-text">نشان شده ها</span>
                </li>
                <li class="nav-item">
                    <router-link to="/account" :class="{active: $route.path == '/account' ? true : false}" class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">
                        <i class="material-icons">person</i>
                        <small class="sr-only">Account</small>
                    </router-link>
                    <span class="menu-text">حساب کاربری</span>
                </li>
            </ul>
        </div>
        <!-- sticky footer tabs ends -->

    </div>
</template>

<script>
export default {
  name: "Footer",
  data: function() {
      return {
          home: true,
          cat: false,
          account: false,
          marked: false
      }
  }
}
</script>

<style scoped>
.footer-tabs .nav-tabs .nav-item .nav-link {
    color: #333333;
}
.bg-basket{
    background: #f15252;
}
.centerlarge #cart-tab{
    height: 45px;
    width: 45px;
    box-shadow: 0 0 0 5px #fff;
}
.centerlarge img{
    margin-top: -5px;
    width: 60%;
}
.menu-text{
    color: #000;
    font-size: 11px;
}
.nav-tabs .nav-item {
    margin: 0 7px;
}
.nav-link {
    padding-bottom: unset;
}
.footer-tabs {
    height: 63px;
}
.items-number {
    width:27.5px;
    height: 27.5px;
    border-radius: 50%;
    background: #f15252;
    box-shadow: 0 2px 3px 0 #333;
    position: fixed;
    top: -29px;
    padding: 2px;
}

#cat-li{
    margin-top: 4px;
}
.category{
    padding-top: 1px;
}
.backgroundActive {
    fill: #f15252 !important;
}
.category path{
    fill: #333333;
}

</style>