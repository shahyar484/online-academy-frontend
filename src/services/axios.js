import axios from "axios";

const axiosClient = axios.create({
    baseURL: "https://online-academy-backend.up.railway.app",
    // baseURL: "https://back.zangeyek.ir/",
})

// axiosClient.defaults.withCredentials = true

axiosClient.interceptors.request.use(
     config => {
        const token = localStorage.getItem( 'AUTH_USER_TOKEN' );
        if(token){
            config.headers.authorization= `Bearer ${token}`;
        }else{
          config.headers.authorization= '';
        }
        return config;
    },
    error => {
    //   return Promise.reject(error)
      console.log(error)
    }
  )




export default axiosClient