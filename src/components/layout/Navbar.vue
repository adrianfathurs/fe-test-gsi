<template>
<div>
    <b-navbar toggleable="sm" type="dark" variant="info" class="px-2">
        <div>
            <b-icon class="me-2" variant="white" v-show="!sidebarNav && windowWidth >= 576" icon="border-width" @click="toggle()"></b-icon>
            <b-navbar-brand href="#">Astra Graphia</b-navbar-brand>
        </div>
        <b-navbar-toggle target="nav-collapse" v-b-toggle.sidebar-right></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
        </b-collapse>
    </b-navbar>
    <b-sidebar id="sidebar-right" title="Sidebar" right shadow>
        <div class="px-3 py-2">
            <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
            in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
            </p>
            <b-img src="https://picsum.photos/500/500/?image=54" fluid thumbnail></b-img>
        </div>
    </b-sidebar>
</div>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
    computed:{
    ...mapGetters({
        windowWidth: 'getWindowWidth'
        })
    },
    props:['sidebarNav'],
    methods: {
        toggle(){
            this.$emit('openSidebar')
        }
    },
}
</script>