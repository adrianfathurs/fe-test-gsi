<template>
    <b-container class="pt-3">
        <h6 class="font-weight-bolder" style="font-weight: 600 !important">Transaksi Produksi</h6>
        <b-alert
            :show="dismissCountDown"
            variant="success"
        >
            <p>Successfully added..</p>
        </b-alert>
        <b-card>
            <form @submit.prevent="submitForm()" @reset="onReset">
                <b-row>
                    <b-col cols="6">
                        <b-form-group
                            label="Tanggal Produksi"
                        >
                            <b-form-input
                                id="input-1"
                                type="date"
                                v-model="date"
                                placeholder="Tanggal Produksi"
                                required
                            ></b-form-input>
                        </b-form-group>
                    </b-col>
                    <b-col cols="6">
                        <b-form-group
                            label="Lokasi"
                        >
                            <b-form-select class="w-100" v-model="selectedLocation" :options="optionsLocation"></b-form-select>
                        </b-form-group>
                    </b-col>
                </b-row>
                <b-row class="mt-2">
                    <b-col cols="6">
                        <b-form-group
                            label="Item"
                        >
                            <b-form-select class="w-100" v-model="selectedItems" :options="optionsItems"></b-form-select>
                        </b-form-group>
                    </b-col>
                    <b-col cols="6">
                        <b-form-group
                            label="Qty"
                        >
                            <b-form-input
                                id="input-1"
                                type="number"
                                placeholder="Quantity"
                                v-model="quantity"
                                required
                            ></b-form-input>
                        </b-form-group>
                    </b-col>
                </b-row>
                <b-row class="mt-2">
                    <b-col cols="6">
                        <b-form-group
                            label="Karyawan"
                        >
                            <b-form-select class="w-100" v-model="selectedKaryawan" :options="optionsKaryawan"></b-form-select>
                        </b-form-group>
                    </b-col>
                </b-row>
                <b-row class="mt-3">
                    <div class="d-flex justify-content-end">
                        <b-button type="submit" variant="primary">Simpan</b-button>
                        <b-button class="ms-2" type="reset" variant="danger">Reset</b-button>
                    </div>
                </b-row>
            </form>
        </b-card>
    </b-container>
</template>
<script>
import {getLocation, getItems, saveTransactions, getKaryawan} from '../api/transactions'
export default {
    data() {
        return {
                selectedLocation: null,
                optionsLocation: [],
                selectedItems: null,
                optionsItems: [],
                quantity: null,
                selectedKaryawan: null,
                optionsKaryawan: [],
                date: null,
                dismissSecs: 10,
                dismissCountDown: 0,
            }
        },
    mounted(){
        this.receiveLocation()
        this.receiveItems()
        this.receiveKaryawan()
    },
    methods:{
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
        async receiveItems(){
            try {
                let response = await getItems()
                response.data.forEach(element => {
                    this.optionsItems.push({value: element.kode, text:element.nama_item})
                });
            } catch (error) {
                console.log(error)
            }
        },
        async receiveKaryawan(){
            try {
                let response = await getKaryawan()
                response.data.forEach(element => {
                    this.optionsKaryawan.push({value: element.npk, text:element.nama})
                });
            } catch (error) {
                console.log(error)
            }
        },
        async submitForm(){
            try {
                let body = {
                    npk: this.selectedKaryawan,
                    transaction_date: this.date,
                    location: this.selectedLocation,
                    kode: this.selectedItems,
                    qty_actual: this.quantity
                }
                let response = await saveTransactions(body)
                this.showAlert()
                this.onReset()
            } catch (error) {
                console.log(error)
            }
        },
        showAlert() {
            this.dismissCountDown = this.dismissSecs
        },
        onReset(){
            this.selectedItems = null
            this.selectedKaryawan = null
            this.selectedLocation = null
            this.quantity = null
            this.date = null
        }
    }
}
</script>
<style lang="scss">
    .custom-select{
        border-radius: 4px !important;
        height: 36px;
        border: 1px solid lightgrey;
    }
</style>