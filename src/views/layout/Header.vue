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
              <!-- <div>
                  <a class="navbar-brand" href="">
                      <div class="logo"><span>تخفیف</span><span>کده</span></div>
                      <h4 class="logo-text"><span>تخفیف</span><small> کده </small></h4>
                      <div>
                        <img src="@/assets/logo.png">
                      </div>
                  </a>
              </div> -->
              <!-- <div>
                  <form class="form-inline search">
                      <input class="form-control w-100" type="text" placeholder="Search..." aria-label="Search">
                      <button class="btn btn-link btn-44" type="submit"><span class="icon_search"></span></button>
                  </form>
                  <button class="btn btn-link search-btn" type="button"><span class="icon_search"></span></button>
              </div> -->
        </nav>
    </header>
    <!-- Fixed navbar ends -->
</template>

<style scoped>

.topimg{
  /* height: 200px; */
}

</style>

<script>
export default {
    name: "Header",
    data: function (){
      return{
        body: document.body,
      }
    },
  methods: {
    openMenu: function (){
      this.body.classList.add('sidemenu-open')
    },
    closeMenu: function (){
      if(this.body.classList.contains('sidemenu-open') ){
        this.body.classList.remove('sidemenu-open')
        console.log('hiiii')
      }
    }
  }
}
</script>