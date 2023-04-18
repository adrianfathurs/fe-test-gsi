import { httpClient, httpClientPrivate } from "./axios";
import { accessToken } from "./token"
//public
export const signIn = async(form)=>{
  return httpClient.post("/auth/signin", form);
}