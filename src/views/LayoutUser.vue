<template>
    <div>
        <Header />
        <router-link to="/">Home</router-link> 
        <router-link to="/cats">Cats</router-link>
        <router-link to="/calc">Caculator</router-link>
        <slot></slot>
        <Footer />

    </div>
</template>
<script>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
export default {
  name: 'LayoutUser',
  components:{
    Header,
    Footer
  }
}
</script>