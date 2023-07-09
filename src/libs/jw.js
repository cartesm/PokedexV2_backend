import jw from 'jsonwebtoken'
import { KEY } from '../config.js'
export const createToken = async(payload) => {

    return new Promise((resolve,reject)=>{
        jw.sign(payload,KEY,{
            expiresIn:"7d"
        },(err,token)=>{
            if(err) reject(err.message)
            else resolve(token)
        })
    })

}