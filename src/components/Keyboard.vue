<template>
<div class="keyboard ">
    <div class="btn-group btn-del-on btn-gap">
        <button v-for="valOptions in keys" @click="putValue(valOptions)">{{valOptions}} </button>
    </div>
    <div class="btn-group">
        <div class=" list-number btn-gap">
            <button v-for="(valueNumber,key) in number" @click="putValue(valueNumber)">{{valueNumber}}</button>
        </div>
        <div class=" list-operator btn-gap">
            <button v-for="(valueOperator,key) in operators" key="key" @click="putValue(valueOperator)">{{valueOperator}}</button>
            <!-- <button v-for="(operator,key) in operator" :style="operator.style"  @click="putValue(operator.value)" >{{operator.value}}</button> -->
        </div>
    </div>

</div>
</template>

<script>
export default {
    name: 'Keyboard',
    props: {
        valueFromScreen: ''
    },
    data() {
        return {
            number: ['7', '8', '9', '4', '5', '6', '1', '2', '3', '0', '.', 'AC'],
            // operators:
            // {
            //     operator:{
            //     plus:{
            //         value:"+"
            //         },
            //     minus:{
            //         value:"-"
            //         }, 
            //     multiplie:{
            //         value:"X"
            //         },
            //     divide:{
            //         value:":"
            //         },
            //     equal: {
            //         value:"=",
            //         style:{

            //             width:'72px',
            //             height:'86px',
            //             background:'yellow'
            //         }
            //         }
            //     }
            //     }
            // ,

            operators: ['+', '-', 'X', ':', '='],
            keys: ['Del', '<', '>', 'ON'],
            arrCalc: [0],
            checkOn: true,
            afterEqual: ""
        }
    },
    methods: {
        setStyleEqual() {
            let a = document.querySelectorAll('.list-operator button')
            a[4].style.width = "72px";
            a[4].style.height = "86px";
            a[4].style.background = "#ff9b64d6";
        },
        putValue(key) {

            const toScreenArr = [...this.number, ...this.operators];

            //AC clear
            if (key == "AC" && this.checkOn == true) {
                this.arrCalc = [0];
            }
            if (key == "ON") {
                if (this.arrCalc == "") {
                    this.arrCalc = [0];
                    this.checkOn = true;
                } else {
                    this.arrCalc = [];
                    this.checkOn = false;
                }
            }
            //khi t???t m??y th?? kh??ng nh???p ???????c
            if (this.checkOn == false && key) {
                key = "";
            }
            //h??m pop() xo?? 1 ph???n t??? cu???i c??ng
            if (key == "Del" && this.checkOn == true) {
                //gi??? l???i tr???ng th??i m??? m??y l?? 0
                if (this.arrCalc[0] == 0 || this.arrCalc[0] == null || this.arrCalc.length == 1) {
                    this.arrCalc = [0];
                } else {
                    this.arrCalc.pop();
                }
            }
            // n???u l?? c??c to??n t??? ??? ?????u bi???u th???c th?? clear
            if (this.operators.includes(this.arrCalc[0]) &&  "-" !== this.arrCalc[0]) {
                this.arrCalc = [];
            }

            if (key == "=") {
                // n???u l?? c??c to??n t??? ??? cu???i bi???u th???c th?? clear
                if (this.operators.includes(this.arrCalc[this.arrCalc.length - 1])) {
                    this.arrCalc = [];
                }
                // n???u l?? c??c to??n t??? ??? ?????u bi???u th???c th?? clear
                if (this.operators.includes(this.arrCalc[0])&&  "-" !== this.arrCalc[0]) {
                    this.arrCalc = [0];
                }
                //t??nh to??n b???ng h??m eval
                this.arrCalc = eval(this.arrCalc.toString().replaceAll(",", "").replaceAll("X", "*").replaceAll(":", "/"));
                if (this.arrCalc === undefined) {
                    this.arrCalc = [0];
                } else {
                    this.arrCalc = [this.arrCalc];
                    this.afterEqual = this.arrCalc;
                }
            }
            //x??? l?? sau khi b???m d???u b???ng kh??ng th??m ???????c s???.
            if (this.arrCalc[0] == this.afterEqual[0] && this.arrCalc.length == 1 && this.number.includes(key)) {
                this.arrCalc = [0];
                this.afterEqual = "";
            }
            //ki???m tra ?????u v??o ph???i l?? s??? 
            if (toScreenArr.includes(key) && ["AC", "="].includes(key) == false) {
                // b??? s??? 0 m???c ?????nh khi m??? m??y
                if (this.arrCalc[0] == 0) {
                    this.arrCalc.shift();
                }
                this.arrCalc.push(key);
            }
            
            this.$emit('sendValue', this.arrCalc.toString().replaceAll(",", ""));
        }
    },
    mounted() {
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

.list-operator {
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

.btn-group {
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
    border-radius: 4px;
    border: 1px solid rgb(167, 25, 0);
}
</style>
