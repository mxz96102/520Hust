/**
 * Created by Doming on 2017/5/16.
 */
import axios from 'axios'

let axiosInstance = axios.create({
  baseURL : "http://520.mingdom.cn/api/"
});

export default axiosInstance