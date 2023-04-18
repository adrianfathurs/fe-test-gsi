<template>
    <div class="sidebar-2">
        <div class="d-flex align-items-center px-2" style="height: 56px !important">
            <b-icon class="me-2" icon="border-width" @click="toggle()"></b-icon>
        </div>
        <div class="">
            <div class="d-flex justify-content-center"> 
                <b-avatar size="5rem" style="background:beige !important">Hello<br>World</b-avatar>
            </div>
        </div>
        <div class="px-2 mt-3">
            <div v-for="(item, index) in menu" :key="index">
                <div class="d-flex align-items-center" v-if="item.children.length == 0" @click="goToPage(item.to)">
                    <div>
                        <b-icon size="1rem" class="me-2" :icon="item.icon"></b-icon>
                    </div>
                    <h6 class="mb-0">{{item.name}}</h6>
                </div>
                <div v-else>
                    <div class="d-flex align-items-center">
                        <div>
                            <b-icon size="1rem" class="me-2" :icon="item.icon"></b-icon>
                        </div>
                        <h6 class="mb-0">{{item.name}}</h6>
                    </div>
                    <div class="d-flex align-items-center ps-3" v-for="(child, index) in item.children" :key="index" @click="goToPage(child.to)">
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
}
</script>
<style lang="scss">
    .sidebar-2{
        width: 23vw;
        min-height: 100vh;
        background: green;
    }
</style>