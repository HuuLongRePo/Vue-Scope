<template>
    <div>
        <h2>Chilren</h2>
        <h1>{{msg}}</h1>
        <input
            placeholder="Type your text"
            v-model="input"
        />
        <button @click="sendMessage">EventBus</button>
        <button @click="changeText2">changetext2</button>
    </div>
</template>
<script>

export default{
    props: {
        msg : String
    },methods:{
        changeText2(){
            this.$emit('changeText2',"Text2 has change");
        },
        sendMessage() {
            this.$emit('sendMessage', this.input);
            this.input = '';
        }
    }
}
</script>