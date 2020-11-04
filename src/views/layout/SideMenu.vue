<template>
  <!-- sidebar -->
  <div class="sidebar">
    <div class="row no-gutters">
      <div class="col-auto align-self-center">
        <figure class="avatar avatar-50">
          <img src="@/assets/img/user1.png" alt="">
        </figure>
      </div>
      <div class="col pl-3 align-self-center">
        <p class="my-0">Maxartkiller</p>
        <p class="text-mute my-0 small">United States</p>
      </div>
      <div class="col-auto align-self-center">
        <a href="login.html" class="btn btn-link text-white p-2"><i class="material-icons">power_settings_new</i></a>
      </div>
    </div>
    <div class="list-group main-menu my-4">
      <router-link to="/" class="list-group-item list-group-item-action active"><i class="material-icons">home</i>خانه</router-link>
      <router-link to="/takhfifPage" class="list-group-item list-group-item-action"><i class="material-icons">view_day</i>تخفیف </router-link>
      <router-link to="/listCategoryPage" class="list-group-item list-group-item-action"><i class="material-icons">insert_emoticon</i>لیست کتگوری</router-link>
      <router-link to="shopingcard" class="list-group-item list-group-item-action"><i class="material-icons">notifications</i>سبد خرید</router-link>
      <router-link to="/signIn" class="list-group-item list-group-item-action"><i class="material-icons">account_circle</i>ورود</router-link>
      <router-link to="/account" class="list-group-item list-group-item-action"><i class="material-icons">business</i>حساب کاربری</router-link>
    </div>
  </div>
  <!-- sidebar ends -->
</template>

<script>
export default {
  name: "SideMenu"
}
</script>