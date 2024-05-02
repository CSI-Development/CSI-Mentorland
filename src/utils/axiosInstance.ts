import axios from "axios";
import { ApiError } from "next/dist/server/api-utils";

// export let baseURL = "http://18.221.74.118/api";
console.log(process.env.NEXT_PUBLIC_BASEURL,'enf')
export let baseURL = process.env.NEXT_PUBLIC_BASEURL;

// if(process.env.NODE_ENV==='production'){
//     // baseUrl='http://localhost:3000/api'
//     // this part will be done after register a domain for production
// }

let axiosInstance = axios.create({
  baseURL,
});

export interface CustomError {
  message: string;
}

export default axiosInstance;
