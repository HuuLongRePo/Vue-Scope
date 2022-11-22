<template>
  <!-- <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />
    <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div>
  </header> -->
  <main>
    <!-- <TheWelcome /> -->
    <!-- <Hello :msg="msg" @updateMessage="updateMessage"/>
    <Child :msg="msg2" @changeText2="changeText2"/> -->    
    <component :is="layout">
    <router-view></router-view>
  </component>
  </main>
</template>

<script >
  import Hello from './components/Hello.vue'
  import Child from './components/Child.vue'
  import Home from './views/Home.vue'
  import LayoutUser from '@/views/LayoutUser.vue'
  import LayoutBlank from '@/views/LayoutBlank.vue'
const default_layout = 'User'
  export default{
    
    data() {
      return {
        msg: "Welcome to yeulaptrinh.vn",
        msg2: "Text 2"

        }
    },
    methods: {
      
      updateMessage(value){
        this.msg = value;
        this.msg2 =value+ `${' Child receive from App '}`
      },changeText2(value){
        this.msg2 = value;
      }
    },
    components: {
      Hello,
      Child,
      Home,
      LayoutBlank,
      LayoutUser
    }, 
    computed: {
    layout() {
      return 'Layout' + (this.$route.meta.layout || default_layout)
    }
  },
    
  }
</script>

<style >

header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
