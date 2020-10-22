<template>
    <div class="dropdown m-1">
        <div class="categoryDropdown d-flex justify-content-between" :class="{active: active}" @click="expand">
            <div class="icon-box" :class="{activeLogo: active}">
                <i class="material-icons">new_releases</i>
                <!-- <img class="m-1" src="@/assets/img/category.png"> -->
            </div>
            <span class="text-center mt-1">
                {{title}} 
            </span>
            <i class="material-icons arrow mt-1 ml-2" :class="{active: active}">keyboard_arrow_down</i>
        </div>

        <div class="dropdown-content" :class="{display: active}">
            <a href="#">رستوران و کافی شاپ</a>
            <a href="#">بوفه</a>
            <a href="#">درمانی</a>
            <a href="#">رستوران ایرانی و سنتی</a>
        </div>
    </div>
</template>

<style scoped>
.icon-box{
    width: 28px;
    /* height: 28px; */
    height: 100%;
    background: #f15252;
    border-radius: 12px;
    color: #fff;
    vertical-align: middle;
    padding: 2px;
    padding-top: 4px;
}
.root-div{
    margin-top: 45px;
    height: 46px;
    background: #fff;
}
.categoryDropdown{
    /* width: 47%; */
    height: 30px;
    background: white;
    border-radius: 15px 15px 15px 15px;
    /* margin-left: 5px; */
    font-size: 14px;
    /* padding: 5px; */
    color: #000;
    box-shadow: 2px 1px 5px 4px #eee;
}
.arrow{
    color: #f15252;
}


.dropdown {
  position: relative;
  display: inline-block;
  width: 47%;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f0eff7;
  min-width: 100%;
  margin-left: 5px;
  padding: 5px;
  width: 47%;
  z-index: 1;
  border-radius: 0 0 15px 15px;
  font-size: 13px;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  border-radius: 7px;
}

.dropdown-content a:hover {background-color: #ccc; color:#f15252}

/* .dropdown:hover .dropdown-content {
  display: block;
} */

.active{
    background: #f15252;
    color: #fff;
    border-radius: 15px 15px 15px 0;
}
.activeLogo{
    background: white;
    color: #f15252;
}
.display{
    display: block;
}
</style>

<script>
export default {
    data(){
        return {
            active: false,
            // display: false
        }
    },
    methods: {
        expand: function(){
            this.active = !this.active;
            // this.display = !this.display;
        }
    },
    props: ["title", "isopen", "display"]
   
}
</script>