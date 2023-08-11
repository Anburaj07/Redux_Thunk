import { AUTH_FAILURE, AUTH_REQUEST, AUTH_SUCCESS } from "./actionTypes"

export const authRequestAction=()=>{
    return {type:AUTH_REQUEST}
}
export const authFailureAction=(payload)=>{
    return {type:AUTH_FAILURE,payload}
}
export const authSuccessAction=(payload)=>{
    return {type:AUTH_SUCCESS,payload}
}

