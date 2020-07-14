import Api from '../utils/api'
import {login} from './urls'

let config = {
    headers:{
        "Authorization": ''
    }
}
export const loginUser = async (values) => {
    let user = '';
    await Api.post(login,values)
            .then(res=>{
                user = res.data;
                config.headers.Authorization = `Bearer ${user.token}`
            })
            .catch(error=>{
                user = "Invalid Username or Password"
            })
            return user;
    }

export const logoutUser = async(url,auth) => {
    if(auth !== undefined){
        await Api.post(url,null,config).then(res=>{
            config = '';
            return true;
        }).catch(e=>{
            return false;
        })
       
    }
}


//  export default {
//      loginUser
//  }