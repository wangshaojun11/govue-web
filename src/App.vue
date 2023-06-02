<template>
  <div id="app">
      <navbar />  <!-- 调用 navbar -->
      <b-container>
    <router-view/>
      </b-container>
  </div>
</template>

<script>
import Navbar from './views/layout/NavBar.vue'; // 引用 Navbar

export default {
  components: { Navbar }, // 声明组件
  data() {
    return {};
  },
};
</script>
<style lang="scss">

</style>
