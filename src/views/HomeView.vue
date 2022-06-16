<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HelloWorld from '../components/HelloWorld.vue'; // @ is an alias to /src

export default defineComponent({
  name: 'HomeView',
  components: {
    HelloWorld,
  }, data() {
    return {
      count: 0
    }
  },
  computed: {
    count1(): number {
      return this.count
    }
  },
  created() {
    // this.count += '3'
    console.log('homeView', this.$store);
    // console.log('homeView', this.$axios.get('https://jsonplaceholder.typicode.com/users'));
  }
});
</script>
