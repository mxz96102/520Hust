/**
 * Created by Doming on 2017/5/16.
 */
import axios from 'axios'

let axiosInstance = axios.create({
  baseURL : "http://119.29.9.72:8888/api/"
});

export default axiosInstance