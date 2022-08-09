<template>
  <div>
    <router-view></router-view>
    <!-- <button-counter></button-counter> -->
  </div>
</template>

<script>

export default {
  name: 'App',
  
}
</script>

<style>
*,
*::before,
*::after{
    margin: 0 ;
    padding: 0;
    /* border: 0; */
    /* box-sizing: border-box; */
}

._container{
  max-width: 1046px;
  margin: 0px auto;
}
body{
  /* background: url('~@/assets/img/fon.jpg'); */
  background-color: black;
  background-attachment: fixed;
  background-size: 100%;
  /* background-position: top; */
  height: 100%;
  /* position: relative;
  padding-bottom: 58px;
  box-sizing: border-box; */
  /* padding: 0;
  margin: 0; */
}


</style>
