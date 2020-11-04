<template>
    <!-- Fixed navbar -->
    <header class="header fixed-top active">
        <nav class="navbar">
          <div class="img-menu">
             <span v-on:click="openMenu">
                <img src="@/assets/img/menu.png">
             </span>
          </div>
          <div v-if="curentUrl !== '/'">
              <a class="navbar-brand" href="">
                  <div>
                    <img src="@/assets/logo.png">
                  </div>
              </a>
          </div>
          <div v-if="curentUrl !== '/'">
              <form class="form-inline search">
                  <input class="form-control w-100" type="text" placeholder="Search..." aria-label="Search">
                  <button class="btn btn-link btn-44" type="submit"><span class="icon_search"></span></button>
              </form>
              <button class="btn btn-link search-btn" type="button">
                <span>
                  <svg data-v-fae5bece="" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#e9e9e9" stroke-width="2" stroke-linecap="square" stroke-linejoin="bevel"><circle data-v-fae5bece="" cx="11" cy="11" r="8"></circle><line data-v-fae5bece="" x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                </span>
              </button>
          </div>
        </nav>
    </header>
    <!-- Fixed navbar ends -->
</template>

<style scoped>

.navbar-brand{
  margin: 0 auto !important;
}
.navbar {
  padding:10px 9px;
}
.img-menu{
  padding: 7px 7px;
}
</style>

<script>
export default {
    name: "Header",
    data: function (){
      return{
        body: document.body,
        curentUrl: window.location.pathname
      }
    },
  methods: {
    openMenu: function (){
      this.body.classList.add('sidemenu-open')
    },
    closeMenu: function (){
      if(this.body.classList.contains('sidemenu-open') ){
        this.body.classList.remove('sidemenu-open')
      }
    },
    setUrl: function(){
       this.curentUrl = window.location.pathname
    }
  },
  watch:{
    $route (to, from){
        console.log('to: ' + to.path + ' from: ' + from.path)
        this.setUrl()
    } 
  }
}
</script>