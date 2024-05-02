import axios from "axios";
import { ApiError } from "next/dist/server/api-utils";

// let baseURL = "http://18.221.74.118/api";

let baseURL = "http://localhost:5000/api";

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
