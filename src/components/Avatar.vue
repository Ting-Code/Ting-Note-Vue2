<template>
  <span title="username">{{slug}}</span>
</template>

<script>
  export default {
    name: "Avatar",
    data() {
      return {
        user: {
          username: 'hunger'
        },
        slug: 'H'
      }
    }
  }
</script>

<style scoped>
  span {
    display: inline-block;
    width: 30px;
    height: 30px;
    text-align: center;
    line-height: 32px;
    border-radius: 50px;
    background-color: yellowgreen;
    font-weight: bold;
    text-transform: uppercase;
    font-size: 18px;
    margin-top: 20px;
  }
</style>
