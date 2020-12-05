<template>
    <div class="dropdown m-1">
        <div class="categoryDropdown d-flex justify-content-between" :class="{active: active}" @click="expand">
            <div class="icon-box" :class="{activeLogo: active}">
                <svg v-if="catsvg" :class="{category: active}" width="19" height="18" viewBox="0 0 512 512.002">
                   <path id="Union_3" fill='#fff' data-name="Union 3" d="M5.859,506.146a20,20,0,0,1,0-28.285L91.715,392,5.859,306.146a20,20,0,0,1,28.282-28.285L120,363.716l85.86-85.86a20,20,0,0,1,28.281,28.29L148.285,392l85.856,85.855a20,20,0,1,1-28.281,28.285L120,420.286,34.141,506.146a20,20,0,0,1-28.282,0ZM292,512a20,20,0,0,1-14.141-34.145l200-200A20,20,0,0,1,512,292V492a20,20,0,0,1-20,20ZM272,120A120,120,0,1,1,392,240,120.136,120.136,0,0,1,272,120ZM20,240A20,20,0,0,1,0,220V20A20,20,0,0,1,20,0H220a20,20,0,0,1,20,20V220a20,20,0,0,1-20,20Z"/>
                </svg>
                <i v-else class="material-icons">new_releases</i>
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
.category path{
    fill: #f15252;
}
.icon-box svg{
    margin-top: 2px;
    margin-right: 2px ;
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
    props: ["title", "isopen", "display", 'catsvg']
   
}
</script>