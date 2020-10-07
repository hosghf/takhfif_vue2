<template>
    <!-- Fixed navbar -->
    <header class="header fixed-top active">
        <nav class="navbar">
          <div>
              <button class="menu-btn btn btn-link btn-44">
                  <span class="icon material-icons" v-on:click="openMenu">
                    <img src="@/assets/img/menu.png">
                  </span>
              </button>
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
              <button class="btn btn-link search-btn" type="button"><span class="icon_search"></span></button>
          </div>
        </nav>
    </header>
    <!-- Fixed navbar ends -->
</template>

<style scoped>

.navbar-brand{
  margin: auto !important;
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