import axios from "axios";

export const baseURL = process.env.NEXT_PUBLIC_BASEURL;

// if(process.env.NODE_ENV==='production'){
//     // baseUrl='http://localhost:3000/api'
//     // this part will be done after register a domain for production
// }

const axiosInstance = axios.create({
  baseURL,
});

export interface CustomError {
  message: string;
}

export default axiosInstance;
