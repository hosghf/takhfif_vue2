<template>
    <div class="container">
        <h5>نام و نام خانوادگی خود را وارد کنید.</h5>

        <form>
            <input class="name form-control" type="text" placeholder="نام و نام خانوادگی">
            <input class="password form-control" type="password" placeholder="کلمه عبور">
            <button class="btn">ثبت نام</button>
        </form>
        <!-- <div class="bottom-section"></div> -->
        <Mbottom></Mbottom>
    </div>
</template>

<script>
import Mbottom from "@/components/marginBottomComponents"

export default {
    components: {
        Mbottom
    }
}
</script>

<style scoped>
.container{
    margin-top: 110px;
}
h5 {
    font-size: 18px;
}
.form-control {
    border-radius: 6px;
    font-size: 0.95rem;
    box-shadow: 0 0 2px 0.2px #e8e8e8;
}
.btn {
    background: #f15252;
    color: #fff;
    position: relative;
    top: 200px;
    width: 70%;
    margin: 0 auto;
    display: block;
    font-weight: 400;
}
.name {
    margin-top: 27px;
}
.password {
    margin-top: 15px;
}
.bottom-section {
    height: 50px;
    width: 2px;
    margin-bottom: 40px;
}
</style>