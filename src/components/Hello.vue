<!-- <template>
    <h1>Hello</h1>
    <div>
    <ul v-for="fruit in freshFruits" :key="fruit.name">
        <li>{{fruit.name}}</li>
    </ul>
  </div>
  </template> -->
<!-- 
  <script>
  export default {
  name: 'ShowMessage',
  data() {
    return {
        fruits: [
  { name: 'Apple', origin: 'American' },
  { name: 'Pear', origin: 'China' },
  { name: 'Pineapple', origin: 'My Tho' },
  { name: 'Banana', origin: 'Ha noi' },
  { name: 'Orange', origin: 'China' },
  { name: 'Lemon', origin: 'Unknown' },
  { name: 'Watermelon', origin: 'Laos' }
]
    }
  },
  computed: {
    freshFruits() {
      return this.fruits.filter(f => f.origin !== 'China' && f.origin !== 'Unknown')
    }
  }

}
</script> -->

<template>
    <div>
      <h1>Hi, my name is {{ name }}</h1>
      <div>
        <input type="text" placeholder="Your name" v-model="name">
        Number: {{ number }}
      </div>
      <button @click="number++">Increment</button>
    </div>

    <h3>Today price: {{coinPrice}}</h3>
    <input type="text" v-model="coinName">
    <button @click="checkPrice(coinName)">Check</button>


    <h1>{{msg}}</h1>
    <button @click="changeMessage">Change message</button>


<div class="text-magenta" style="text-align: center" v-html="slogan"></div>

  </template>
  
  <script>
import axios from 'axios'

  export default {
    name: 'SayMyName',
    data() {
      return {
        name    : "Yeulaptrinh.vn",
        number  : 0,
        coinName: "bitcoin",
        coinPrice: 0,
        slogan: '<h2>Chào mừng bạn đã đến với website: hoc.tv</h2>'
      }
    },props: {
    msg: String
  },
    methods: {
    async checkPrice(coinName) {
       const data = await axios
         .get(`https://api.coingecko.com/api/v3/simple/price?ids=${coinName}&vs_currencies=usd`)
         .then(function (response) {
           return response.data;
         })
         .catch(function (error) {
           console.log(error);
         })
      this.coinPrice = data[this.coinName]?.usd;
    },
    changeMessage() {
      var abc = "Hello, world!";
      this.$emit('updateMessage', abc);
    }
  }, 
    
  }
  </script>

  <!-- <template>
    <div>
      <h1>{{ msg }}</h1>
      <button @click="changeMessage">Change message</button>
    </div>
</template>

<script>
export default {
  name: 'ChildComponent',
  props: {
    msg: String
  },
  methods: {
    changeMessage() {
        this.$emit('updateMessage', "Hello world!")
    }
  }
}
</script> -->
