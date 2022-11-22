<template>
    <div class="border-calc">
        <div class="check-on" >Casio fx-250</div>
        <ScreenVue :showNumber = "showNumber" />
        <KeyboardVue @sendValue="sendValue"/>
    </div>
</template>
<script>
import ScreenVue from '../components/Screen.vue';
import KeyboardVue from '../components/Keyboard.vue';
export default{
    components:{
        ScreenVue,
        KeyboardVue
    },
    data() {
        return {
            showNumber:0
        }
    },methods: {
        sendValue(value){
            this.showNumber = value;
        },
    },
}

</script>
<style>
.border-calc {
    border: 1px solid;
    padding: 10px;
    border-radius: 3px;
    box-shadow: 3px 6px 13px 0px #ab7990;
    background: pink;
}
</style>