<template>
  <div id="app">
    <Navigation />
    <router-view></router-view>
    <div>Icons made by 
      <a href="http://www.freepik.com/" title="Freepik">Freepik</a>,
      <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel perfect</a>, and
      <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">Smashicons</a>
      from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
  </div>
</template>

<script>
import Navigation from './components/Navigation'

export default {
  name: 'App',
  components: {
    Navigation
  }
}
</script>

<style>
#app {
  font-family: 'Montserrat', sans-serif;
  text-align: center;
  color: #364f6b;
}

html {
  scroll-behavior: smooth;
}

::-webkit-scrollbar {
  display: none;
}
</style>
