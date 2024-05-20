<template>
  <div id="home">

    <div class="container home_container d-flex flex-column justify-content-center align-items-center">
    <h1>Welcome to CV Maker</h1>
    <router-link to="/create" class="btn btn-success">Create Your CV</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
};
</script>
<style scoped> 
#home {
  position: relative;
  height: 100vh;
  }
.home_container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);

}
  
</style>