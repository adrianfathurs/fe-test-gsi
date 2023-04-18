<template>
    <b-container class="pt-3">
        <h6 class="font-weight-bolder" style="font-weight: 600 !important">Transaksi List</h6>
        <div class="d-flex justify-content-end mb-3">
            <div class="d-flex align-items-end">
                <b-form-group
                    label="Tanggal Produksi"
                    class="me-2"
                >
                    <b-form-input
                        id="input-1"
                        type="date"
                        v-model="date"
                        placeholder="Enter email"
                        required
                    ></b-form-input>
                </b-form-group>
                <b-form-group
                    label="Lokasi"
                    class="me-2"
                >
                    <b-form-select v-model="selectedLocation" :options="optionsLocation"></b-form-select>
                </b-form-group>
                <div>
                    <b-button class="me-2" variant="primary" sm @click="cari()">Cari</b-button>
                    <b-button variant="warning" sm @click="clear()">Clear</b-button>
                </div>
            </div>
        </div>
        <b-card>
            <b-table small :fields="fields" :items="items" responsive="sm">
                <template #cell(transaction_date)="data">
                    <p>{{ convertMoment(data.value)}}</p>
                </template>
            </b-table>

        </b-card>
    </b-container>
</template>
<script>
import {getLocation, getTransactions} from '../api/transactions'
import moment from 'moment'
export default {
    data() {
        return {
            selectedLocation: null,
            optionsLocation: [],
            date:null,
            options: [
                { value: null, text: 'Please select an option' },
                { value: 'a', text: 'This is First option' },
                { value: 'b', text: 'Selected Option' },
                { value: { C: '3PO' }, text: 'This is an option with object value' },
                { value: 'd', text: 'This one is disabled', disabled: true }
            ],
            fields: [
                { key: 'npk', label: 'NPK' },
                { key: 'transaction_date', label: 'Tanggal Transaksi' },
                { key: 'kode', label: 'Kode' },
                { key: 'location', label: 'Location' },
                { key: 'qty_actual', label: 'Quantity actual' },
            ],
            items: [],
            itemsBackup: []
        }
    },
    mounted() {
        this.receiveLocation()
        this.receiveTransaction()
    },
    methods: {
        async receiveLocation(){
            try {
                let response = await getLocation()
                response.data.forEach(element => {
                    this.optionsLocation.push({value: element.kode, text:element.nama_lokasi})
                });
            } catch (error) {
                console.log(error)
            }
        },
        async receiveTransaction(){
            try {
                let response = await getTransactions()
                this.items = response.data
                this.itemsBackup = response.data
            } catch (error) {
                console.log(error)
            }
        },
        cari(){
            if (this.selectedLocation && this.date) {
                this.items = this.items.filter((element)=>{
                    return element.location == this.selectedLocation && this.convertMoment(this.date) == this.convertMoment(element.transaction_date)
                })
            }else if (this.selectedLocation) {
                this.items = this.items.filter((element)=>{
                    return element.location == this.selectedLocation
                })
            }else if (this.date) {
                this.items = this.items.filter((element)=>{
                    return this.convertMoment(this.date) == this.convertMoment(element.transaction_date)
                })
            }
        },
        clear(){
            this.date = null
            this.selectedLocation = null
            this.items = this.itemsBackup
        },
        convertMoment(date){
            return moment(date).format('DD-MM-YYYY')
        }
    },
}
</script>
<style lang="scss">
    .custom-select{
        border-radius: 4px !important;
        height: 36px;
        border: 1px solid lightgrey;
    }
</style>