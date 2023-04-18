<template>
<div>
    <b-navbar toggleable="sm" type="dark" class="px-2" style="min-height: 50px; background-color: black !important">
        <div v-show="!sidebarNav && windowWidth >= 576">
            <b-icon class="me-2" variant="white"  icon="border-width" @click="toggle()"></b-icon>
            <b-navbar-brand href="#">Astra Graphia</b-navbar-brand>
        </div>
        <b-navbar-toggle target="nav-collapse" v-b-toggle.sidebar-left></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
        </b-collapse>
    </b-navbar>
    <b-sidebar id="sidebar-left" title="Sidebar" left shadow>
        <div v-for="(item, index) in menu" :key="index" class="ps-3">
                <div class="d-flex align-items-center"  v-if="item.children.length == 0" @click="goToPage(item.to)">
                    <div>
                        <b-icon size="1rem" class="me-2" :icon="item.icon"></b-icon>
                    </div>
                    <h6 class="mb-0" >{{item.name}}</h6>
                </div>
                <div v-else>
                    <div class="d-flex align-items-center">
                        <div>
                            <b-icon size="1rem" class="me-2" :icon="item.icon"></b-icon>
                        </div>
                        <h6 class="mb-0">{{item.name}}</h6>
                    </div>
                    <div class="d-flex align-items-center ps-3"  v-for="(child, index) in item.children" :key="index" @click="goToPage(child.to)">
                        <div>
                            <b-icon size="1rem" class="me-2" :icon="child.icon" ></b-icon>
                        </div>
                        <p class="mb-0">{{child.name}}</p>
                    </div>
                </div>
            </div>
    </b-sidebar>
</div>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
    data() {
        return {
            menu:[
                {
                    name: 'Dashboard',
                    icon: 'house-door-fill',
                    to: 'dashboard',
                    children:[]
                },
                {
                    name: 'Transaksi',
                    icon: 'card-checklist',
                    to: 'transaksi',
                    children:[
                        {
                            name: 'Input',
                            icon: 'pen-fill',
                            to: 'inputTransaksi'
                        },
                        {
                            name: 'View',
                            icon: 'view-stacked',
                            to: 'listTransaksi'
                        },
                    ]
                },
                {
                    name: 'Logout',
                    icon: 'arrow-left-circle-fill',
                    to: 'logout',
                    children:[]
                },
            ]
        }
    },
    computed:{
    ...mapGetters({
        windowWidth: 'getWindowWidth'
        })
    },
    props:['sidebarNav'],
    methods: {
        toggle(){
            this.$emit('openSidebar')
        },
        goToPage(name){
            if (name != 'logout') {
                this.$router.push({name})
            }else{
                this.logOut()
            }
        },
    },
}
</script>