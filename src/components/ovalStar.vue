<template>
    <div class="oval" :style="'background: ' + background ">
        <i class="material-icons text-warning">star</i>
        {{number}}
    </div>
</template>

<style scoped>
.oval{
    /* width: auto; */
    display: inline-block;
    height: 30px;
    border-radius: 20px;
    text-align: center;
    color: #000;
    padding: 3px 4px;
}
.oval i{
    font-size: 20px;
    vertical-align: middle;
}
</style>

<script>
export default {
    name: 'buttonStar',
    props: ['number', 'background']
}
</script>