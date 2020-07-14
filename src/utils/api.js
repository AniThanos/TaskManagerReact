import axios from 'axios';
import {baseAddress} from '../config/urls';
export default axios.create({
    baseURL : baseAddress,
    responseType: "json",
    headers:{
        'Content-Type':'application/json',
        "Access-Control-Allow-Origin":"*",
        "Access-Control-Allow-Headers":"*"
    }
})

    