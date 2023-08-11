import {TODO_FAILURE, TODO_GET_SUCCESS,  TODO_POST_SUCCESS, TODO_REQUEST } from "./actionTypes"
const initstate={
    todos:[],
    isLoading:false,
    isError:false,
    errorMessage:""
}
export const todoReducer=(state=initstate,{type,payload})=>{
    switch(type){        
        case TODO_REQUEST:{
            return {...state,isLoadig:true,isError:false,errorMessage:''}
        }
        case TODO_GET_SUCCESS:{
            return {...state,isLoadig:false,todos:payload}
        }
        case TODO_FAILURE:{
            return {...state,isLoadig:false,isError:true,errorMessage:payload}
        }

        case TODO_POST_SUCCESS:{
            return {...state,isLoadig:false,todos:[...state.todos,payload]}
        }
        default:
            return state
    }
}