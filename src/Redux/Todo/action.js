import axios from "axios"
import { TODO_GET_SUCCESS,TODO_POST_SUCCESS, TODO_FAILURE, TODO_REQUEST} from "./actionTypes"

export const todoRequestAction=()=>{
    return {type:TODO_REQUEST}
}
export const getTodoSuccessAction=(payload)=>{
    return {type:TODO_GET_SUCCESS,payload}
}
export const todoFailureAction=(payload)=>{
    return {type:TODO_FAILURE,payload}
}


export const postTodoSuccessAction=(payload)=>{
    return {type:TODO_POST_SUCCESS,payload}
}

export const postTodos=(newTodo)=>(dispatch)=>{
    dispatch(todoRequestAction())
    axios.post("http://localhost:8080/todos",newTodo)
    .then((res)=>{
        dispatch(postTodoSuccessAction(res.data))
    }).catch((err)=>{
        dispatch(todoFailureAction(err.message))
        console.log("error")
    })
}

export const getTodos=(dispatch)=>{
    dispatch(todoRequestAction())
    axios.get("http://localhost:8080/todos")
    .then((res)=>{
      dispatch(getTodoSuccessAction(res.data))
      console.log(res.data)
    })
    .catch((err)=>{
      dispatch(todoFailureAction(err.message))
      console.log(err.messaage)
    })
  }