import { httpClient, httpClientPrivate } from "./axios";
import { accessToken } from "./token"
//private
export const getLocation = async()=>{
    return httpClientPrivate.get("/transactions/list-location", accessToken());
}
export const getItems = async()=>{
    return httpClientPrivate.get("/transactions/list-items", accessToken());
}
export const getKaryawan = async()=>{
    return httpClientPrivate.get("/transactions/list-karyawan", accessToken());
}
export const getTransactions = async()=>{
    return httpClientPrivate.get("/transactions/list-transaction", accessToken());
}
export const saveTransactions = async(body)=>{
    return httpClientPrivate.post("/transactions/add", body, accessToken());
}