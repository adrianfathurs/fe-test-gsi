<template>
  <div>
    <!-- navbar -->
    <div class="d-flex">
      <div v-show="sidebar">
        <Sidebar @closeSidebar="hiddenSidebar"/>
      </div>
      <div class="w-100">
        <Navbar :sidebarNav="sidebar" @openSidebar="showSidebar"/>
        <router-view></router-view>
      </div>
    </div>
    <!-- sidebar -->
    <!-- router view -->
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Navbar from '@/components/layout/Navbar.vue'
import Sidebar from '@/components/layout/Sidebar.vue'
import {mapGetters} from 'vuex'

export default {
  name: 'HomeView',
  computed:{
    ...mapGetters({
      windowWidth: 'getWindowWidth'
    })
  },
  data() {
    return {
      sidebar: true,
    }
  },
  components: {
    HelloWorld,
    Navbar,
    Sidebar
  },
  methods: {
    hiddenSidebar(){
      this.sidebar = false
    },
    showSidebar(){
      this.sidebar = true
    },
  },
  watch:{
    windowWidth:{
      handler(newWindowWidth){
        if (newWindowWidth <= 576 ) {
          this.hiddenSidebar()
        }
      }
    }
  }
}
</script>
