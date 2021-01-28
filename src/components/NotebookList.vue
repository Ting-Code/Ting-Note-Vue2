<template>
  <div id="notebook-list">
    <h1>{{msg}}</h1>
    <ul>
      <li><router-link to="/note/1">页面1</router-link></li>
      <li><router-link to="/note/2">页面2</router-link></li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'Login',
    data () {
      return {
        msg: '笔记本列表'
      }
    }
  }
</script>

<style scoped>
  h1 {
    color: red;
  }
</style>
