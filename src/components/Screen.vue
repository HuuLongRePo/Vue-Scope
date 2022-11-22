<template>
    <input class="screen-caculator" :value="showNumber"/>

</template>
<script>
export default{
    name:'Screen',
    props:{
        showNumber:String
    },
    data() {
        return {
            // showNumber:0
        }
    },
    methods: {
       
    },
}
</script>
<style scoped>
.screen-caculator {
    width: 250px;
    height: 85px;
    border: 2px solid;
    resize: none;
    text-align: right;
    font-size: 26px;
    font-weight: bold;
    background: #ababab;
    color: #000;

}
</style>