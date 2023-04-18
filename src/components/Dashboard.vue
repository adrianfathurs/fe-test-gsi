<template>
<b-container class="pt-3">
    <h6 class="font-weight-bolder" style="font-weight: 600 !important">Dashboard</h6>
    <b-row>
        <b-col cols="6">
            <BarChart :chartData="chartData" :chartOptions="chartOptions"/>
        </b-col>
    </b-row>
</b-container>
</template>

<script>
import BarChart from '../components/chart/BarChart.vue'
import {getLocation, getTransactions} from '../api/transactions'
import moment from 'moment'

export default {
    name: 'App',
    components: { BarChart },
    data() {
        return {
            chartData: {
                labels: [ 'January', 'February', 'March' ],
                datasets: [ { data: [40, 20, 12] } ]
            },
            chartOptions: {
                responsive: true
            }
        }
    },
    mounted() {
        this.receiveTransaction()
    },
    methods: {
        async receiveTransaction(){
            try {
                let response = await getTransactions()
                response.data
            } catch (error) {
                console.log(error)
            }
        },
    },
}
</script>