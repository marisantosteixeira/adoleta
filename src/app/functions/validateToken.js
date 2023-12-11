import {jwtVerify } from "jose";
import {decode} from "jsonwebtoken";

const validateToken = async (token)=>{
const secret = "hfdsfbewufwefqkjfQHI"
try{
    /*const isTokenValidate = await jwtVerify(token,
         new TextEncoder().encode(secret));
         if(isTokenValidate){
            return true
         }*/
             const isTokenValidate = await decode(token)
         if(isTokenValidate){
            return true
         }
}catch{
    return false;
}
}
export {validateToken};