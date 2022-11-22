<template>
    <div class="keyboard ">
        <div class="btn-group btn-del-on btn-gap" >
            <button v-for="valOptions in key" @click="putValue(valOptions)" >{{valOptions}} </button>
        </div>
        <div class="btn-group">
            <div class=" list-number btn-gap">
            <button v-for="(valueNumber,key) in number" @click="putValue(valueNumber)" >{{valueNumber}}</button>
            </div>
            <div class=" list-operator btn-gap">
            <button v-for="(valueOperator,key) in operator" key="key" @click="putValue(valueOperator)" >{{valueOperator}}</button>
            </div>
        </div>
        

    </div>
</template>
<script>
export default{
    name:'Keyboard',
    props:{
        valueFromScreen:''
    },
    data(){
        return {
            number:['7','8','9','4','5','6','1','2','3','0','.','AC'],
            operator:['+','-','X',':','='],
            key:['Del','<','>','ON'],
            arrCalc: [0],
            checkOn :true
        }
    },       
    methods: {
        checkOnScreen(){
            if(this.checkOn == true){

            }
        },
        setStyleEqual(){
            console.log("2");
            let a = document.querySelectorAll('.list-operator button')
            console.log(a);
            a[4].style.width="72px";
            a[4].style.height="86px";
        },
            putValue(key){
                const toScreenArr = [...this.number,...this.operator];

                //AC clear
                if(key == "AC"){
                    this.arrCalc = [0];
                }
                if(key == "ON"){
                    if(this.arrCalc==""){
                        this.arrCalc = [0];
                        this.checkOn = true;
                    }else{
                        this.arrCalc = [];
                        this.checkOn = false;
                    }
                }
                if(this.checkOn==false){
                    this.arrCalc = "";
                }
                //nếu giá trị trên màn hình khác giá trị nhập từ bàn phím
                // if(this.valueFromScreen !== this.arrCalc.toString()&&this.valueFromScreen!==""){
                //     this.arrCalc = [];
                //     this.arrCalc.push(valueFromScreen);
                // }
                // nếu là các toán tử ở đầu biểu thức thì clear

                //hàm pop() xoá 1 phần tử cuối cùng
                if(key == "Del"&& this.checkOn == true){

                    if(this.arrCalc[0] == 0||this.arrCalc[0] == null||this.arrCalc.length==1){
                        this.arrCalc = [0];
                    }else{
                        this.arrCalc.pop();
                    }
                }
                if(this.operator.includes(this.arrCalc[0])){
                    this.arrCalc = [0];
                }

                if(key == "="){
                    if(this.operator.includes(this.arrCalc[0])){
                    this.arrCalc = [0];
                }
                    this.arrCalc = [eval(this.arrCalc.toString().replaceAll(",",""))];
                    
                }
                if(toScreenArr.includes(key) && ["AC","="].includes(key)==false){
                    if( this.arrCalc[0]==0){
                        this.arrCalc.shift();
                    }
                    if(key=="X"){
                        key = "*";
                    }
                    this.arrCalc.push(key);
                }

                console.log(this.arrCalc);
                this.$emit('sendValue',this.arrCalc.toString().replaceAll(",",""));
            }
        },
        mounted() {
            // width: 100%;
            // height: 86px;
            this.setStyleEqual();
        },
}
</script>
<style scoped>
.btn-group.list-number {
    flex-wrap: wrap;
    width: 60%;
}
button {
    width: 45px;
    margin: 2px;
}
.list-number {
    width: calc(100% - (100% / 5));
}
.list-operator  {
    width: 40%;
}
.list-operator.btn-gap button {
    width: 34px;
}
.keyboard {
    width: 250px;
    height: fit-content;
    border: 1px solid;
    display: flex;
    padding: 10px;
    border-radius: 0 0 4px 4px;
    flex-wrap: wrap;
}
.btn-group{
    display: flex;
    width: 100%;
}
.btn-group.btn-del-on {
    justify-content: space-between;

}
.screen-caculator {
    border-radius: 4px 4px 0 0;
    padding: 6px;
}
.list-operator.btn-gap {
    text-align: end;
}
button {
    font-size: 15px;
    font-weight: 600;
    padding: 10px;
    background: LEMONCHIFFON;
}

</style>