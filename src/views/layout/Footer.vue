<template>
    <div>
        <!-- sticky footer tabs -->
        <div class="footer-tabs border-top text-center">
            <ul class="nav nav-tabs justify-content-center" id="myTab" role="tablist">
                <li class="nav-item">
                    <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">
                    <i class="material-icons">home</i>
                        <small class="sr-only">Home</small>
                    </a>
                    <span class="menu-text">خانه</span>
                </li>
                <li class="nav-item">
                    <a class="nav-link" id="search-tab" data-toggle="tab" href="#search" role="tab" aria-controls="search" aria-selected="false">
                    <!-- <i class="material-icons">room</i> -->
                    <img class="catgory" src="@/assets/img/category.png">
                    <small class="sr-only">search</small>
                    </a>
                    <span class="menu-text">دسته بندی</span>
                </li>
                <li class="nav-item centerlarge">
                    <a class="nav-link bg-basket" id="cart-tab" data-toggle="tab" href="#cart" role="tab" aria-controls="cart" aria-selected="false">
                        <!-- <i class="material-icons">shopping_basket</i> -->
                        <img src="@/assets/img/supermarket.png">
                        <small class="sr-only">chat</small>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" id="favorite-tab" data-toggle="tab" href="#favorite" role="tab" aria-controls="favorite" aria-selected="false">
                    <i class="material-icons">bookmark</i>
                    <small class="sr-only">Best</small>
                    </a>
                    <span class="menu-text">نشان شده ها</span>
                </li>
                <li class="nav-item">
                    <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">
                    <i class="material-icons">person</i>
                    <small class="sr-only">Account</small>
                    </a>
                    <span class="menu-text">حساب کاربری</span>
                </li>
            </ul>
        </div>
        <!-- sticky footer tabs ends -->

    </div>
</template>

<script>
export default {
  name: "Footer"
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
</style>