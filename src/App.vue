<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
export default {
  data() {
    return {
      windowWidth: window.innerWidth
    }
  },
  mounted() {
      this.$nextTick(() => {
          window.addEventListener('resize', this.onResize);
      })
  },  
  beforeDestroy() { 
      window.removeEventListener('resize', this.onResize); 
  },
  methods: {
    onResize() {
        this.windowWidth = window.innerWidth
        this.$store.commit('setWindowWidth', this.windowWidth)
        console.log(this.windowWidth,"ineer Width")
    },
  },
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  min-width: 528px;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
