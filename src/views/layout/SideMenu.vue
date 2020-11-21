<template>
  <!-- sidebar -->
  <div class="sidebar">
    <div class="red-background">
       <div class="img-white-cont">
          <svg class="right-svg" width="83.523" height="36.781" viewBox="0 0 83.523 36.781">
            <path id="Union_1" data-name="Union 1" d="M0,36.781v-18H23.788c-.181-11.672.2-23.6,2.906-16.8C35.63,24.428,72.03,34.919,72.03,34.919l11.493,1.708L30,36.635v.147Z" transform="translate(0 0)" fill="#fff"/>
          </svg>
          <svg class="left-svg" width="79" height="36.75" viewBox="0 0 79 36.75">
            <path id="Union_1" data-name="Union 1" d="M54,36.75v-.1L0,36.645l11.5-1.709s36.4-10.5,45.328-32.95c3.015-7.58,3.145,8.092,2.826,20.764H79v14Z" fill="#fff"/>
          </svg>
       </div>
    </div>
    <div class="row no-gutters">
      <div class="col-auto align-self-center top-img mt-1">
        <router-link to="/account">
          <figure class="avatar avatar-50">
            <img src="@/assets/img/user1.png" alt="">
          </figure>
        </router-link>
      </div>
    </div>
    <div class="row no-gutters top-name">
      <div class="col pl-3 align-self-center">
        <router-link to="/account" class="account-link">
          <p class="my-0">حامد برزگری دهج</p>
        </router-link>
      </div>
    </div>
    <div class="row social-icons-section">
      <!-- <div class="col-12"> -->
         <div class="icon-cont insta">
           <a href="#">
             <svg enable-background="new 0 0 24 24" height="33.9" viewBox="0 0 24 24"  width="33.9" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><linearGradient id="SVGID_1_" gradientTransform="matrix(0 -1.982 -1.844 0 -132.522 -51.077)" gradientUnits="userSpaceOnUse" x1="-37.106" x2="-26.555" y1="-72.705" y2="-84.047"><stop offset="0" stop-color="#fd5"/><stop offset=".5" stop-color="#ff543e"/><stop offset="1" stop-color="#c837ab"/></linearGradient><path d="m1.5 1.633c-1.886 1.959-1.5 4.04-1.5 10.362 0 5.25-.916 10.513 3.878 11.752 1.497.385 14.761.385 16.256-.002 1.996-.515 3.62-2.134 3.842-4.957.031-.394.031-13.185-.001-13.587-.236-3.007-2.087-4.74-4.526-5.091-.559-.081-.671-.105-3.539-.11-10.173.005-12.403-.448-14.41 1.633z" fill="url(#SVGID_1_)"/><path d="m11.998 3.139c-3.631 0-7.079-.323-8.396 3.057-.544 1.396-.465 3.209-.465 5.805 0 2.278-.073 4.419.465 5.804 1.314 3.382 4.79 3.058 8.394 3.058 3.477 0 7.062.362 8.395-3.058.545-1.41.465-3.196.465-5.804 0-3.462.191-5.697-1.488-7.375-1.7-1.7-3.999-1.487-7.374-1.487zm-.794 1.597c7.574-.012 8.538-.854 8.006 10.843-.189 4.137-3.339 3.683-7.211 3.683-7.06 0-7.263-.202-7.263-7.265 0-7.145.56-7.257 6.468-7.263zm5.524 1.471c-.587 0-1.063.476-1.063 1.063s.476 1.063 1.063 1.063 1.063-.476 1.063-1.063-.476-1.063-1.063-1.063zm-4.73 1.243c-2.513 0-4.55 2.038-4.55 4.551s2.037 4.55 4.55 4.55 4.549-2.037 4.549-4.55-2.036-4.551-4.549-4.551zm0 1.597c3.905 0 3.91 5.908 0 5.908-3.904 0-3.91-5.908 0-5.908z" fill="#fff"/></svg>
           </a>
         </div>
         <div class="icon-cont teleg">
           <a href="#">
            <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
              <circle style="fill:#41B4E6;" cx="255.997" cy="256" r="255.997"/>
              <path style="fill:#0091C8;" d="M512,256.003c0-6.238-0.235-12.419-0.673-18.546L405.228,131.36L106.772,248.759l114.191,114.192
                l1.498,5.392l1.939-1.955l0.008,0.008l-1.947,1.947L348.778,494.66C444.298,457.5,512,364.663,512,256.003z"/>
              <polygon style="fill:#FFFFFF;" points="231.138,293.3 346.829,380.647 405.228,131.36 106.771,248.759 197.588,278.84 
                363.331,167.664 "/>
              <polygon style="fill:#D2D2D7;" points="197.588,278.84 222.461,368.344 231.138,293.3 363.331,167.664 "/>
              <polygon style="fill:#B9B9BE;" points="268.738,321.688 222.461,368.344 231.138,293.3 "/> </svg>
           </a>
         </div>
      <!-- </div> -->
      <!-- <div class="col-6">
         <div class="icon-cont">
           asasfas
         </div>
      </div> -->
    </div>
    <div class="list-group main-menu my-4">
      <router-link to="/account" class="list-group-item list-group-item-action active"><i class="material-icons">shopping_cart</i>تخفیف های من</router-link>
      <router-link to="/takhfifPage" class="list-group-item list-group-item-action"><i class="material-icons">support</i>پشتیبانی</router-link>
      <router-link to="/listCategoryPage" class="list-group-item list-group-item-action"><i class="material-icons">insert_emoticon</i>درخواست همکاری</router-link>
      <router-link to="/signIn" class="list-group-item list-group-item-action"><i class="material-icons">info</i>درباره ما</router-link>
    </div>
  </div>
  <!-- sidebar ends -->
</template>

<script>
export default {
  name: "SideMenu"
}
</script>

<style scoped>
  .red-background {
    position: absolute;
    background: #ed4c4c;
    height: 87.87px;
    width: 100%;
    margin: -20px;
  }
  .img-white-cont {
    width: 95px;
    height: 95px;
    border-radius: 50%;
    background: #fff;
    right: 89.5px;
    bottom: -17px;
    position: relative;
  }
  .right-svg {
    position: relative;
    left: 57px;
    bottom: -36px;
  }
  .left-svg {
    position: relative;
    left: -72px;
    bottom: 2px;
  }
 .sidebar {
   background: #fff;
   color: #000;
 }
 .sidebar .main-menu .list-group-item.active {
   color: #000;
 }
 .sidebar .main-menu .list-group-item {
   color: #000;
 }
 .top-img {
   text-align: center;
   margin: auto;
   width: fit-content;
 }
 .avatar-50 {
    width: 80px;
    min-width: 80px;
    height: 80px;
    line-height: 80px;
}
.avatar {
  box-shadow: 0 4px 6px 2px #bbb;
}
.avatar img {
  width: 80px;
  height: 80px;
}
.top-name {
  text-align: center;
  margin-top: 12px;
  font-size: 15px;
  font-weight: bold;
  margin-bottom: 30px;
}
.sidebar .main-menu .list-group-item i{
  margin-right: -8px;
  margin-left: 13px;
}
.sidebar .main-menu .list-group-item {
  color: #333333;
}
.social-icons-section{
  margin-right: -20px;
  margin-left: -20px;
  height: 52px;
  box-shadow: 0 0 4px 0 #f8f8f8;
}
.social-icons-section .icon-cont{
  width: 52px;
  height: 100%;
  background: #fff;
  /* margin: auto; */
  padding: 9px;
  box-shadow: 0 0 7px 0px #f9f9f9;
}
.insta {
  margin-right: 65px;
  margin-left: 25px;
}
.teleg {
  margin-right: 25px;
  /* margin-left: 75px; */
}
.account-link{
  color: #000;
}
.account-link:hover {
  text-decoration: none;
  color:#888;
}
/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1; 
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: #888; 
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555; 
}
</style>