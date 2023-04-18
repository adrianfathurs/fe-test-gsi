<template>
    <div class="sidebar-2">
        <div class="d-flex align-items-center px-2" style="height: 50px !important; background-color: black !important">
            <b-icon class="me-2" variant="white" icon="border-width" @click="toggle()"></b-icon>
            <b-navbar-brand href="#" class="text-white">Astra Graphia</b-navbar-brand>
        </div>
        <div class="mt-3">
            <div class="d-flex justify-content-center"> 
                <b-avatar size="5rem" style="background:beige !important">Hello<br>World</b-avatar>
            </div>
        </div>
        <div class="px-2 mt-3">
            <div v-for="(item, index) in menu" :key="index" class="mt-2">
                <div class="d-flex align-items-center" :class="[selectedRoute == item.to ? 'active' : 'not-active']" v-if="item.children.length == 0" @click="goToPage(item.to)">
                    <div>
                        <b-icon size="1rem" class="me-2" :icon="item.icon"></b-icon>
                    </div>
                    <h6 class="mb-0" >{{item.name}}</h6>
                </div>
                <div v-else>
                    <div class="d-flex align-items-center not-active">
                        <div>
                            <b-icon size="1rem" class="me-2" :icon="item.icon"></b-icon>
                        </div>
                        <h6 class="mb-0">{{item.name}}</h6>
                    </div>
                    <div class="d-flex align-items-center ps-3" :class="[selectedRoute == child.to ? 'active' : 'not-active']" v-for="(child, index) in item.children" :key="index" @click="goToPage(child.to)">
                        <div>
                            <b-icon size="1rem" class="me-2" :icon="child.icon" ></b-icon>
                        </div>
                        <p class="mb-0">{{child.name}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            selectedRoute: 'dashboard',
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
    methods: {
        toggle(){
            this.$emit('closeSidebar')
        },
        goToPage(name){
            this.selectedRoute = name
            if (name != 'logout') {
                this.$router.push({name})
            }else{
                this.logOut()
            }
        },
        logOut(){
            this.$router.push({name:'signIn'})
            localStorage.clear()
        }
    },
    watch:{
        $route:{
            handler(newRouter){
                this.routeNow = newRouter.name
            }
        }
    }
}
</script>
<style lang="scss">
    .sidebar-2{
        width: 23vw;
        min-height: 100vh;
        background: darkorange;
    }
    .active{
        border-radius: 4px;
        background: floralwhite;
        padding-left: 8px;
    }
    .not-active{
        padding-left: 8px;
    }
</style>