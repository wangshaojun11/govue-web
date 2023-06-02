<template>
<div>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-container>
    <b-navbar-brand href="#">Uisee</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <!-- 新增click事件，点击导航到 login 的页面 -->
        <b-nav-item @click="$router.replace({name: 'login'})">登录</b-nav-item>
        <b-nav-item @click="$router.replace({name: 'register'})">注册</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-container>
  </b-navbar>
</div>
</template>

<script>
export default {

};
</script>

<style lang="scss" scoped>
</style>
