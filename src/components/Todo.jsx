import React, { useEffect } from 'react'
import Todoinput from './Todoinput'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { getTodos } from '../Redux/Todo/action'

const Todo = () => {
  // const todos=useSelector((store)=>store.todos);
  // const isLoading=useSelector((store)=>store.isLoading);
  // const isError=useSelector((store)=>store.isError);
  // const errorMessage=useSelector((store)=>store.errorMessage);

  const {todos,isLoading,isError,errorMessage}=useSelector(store=>{
    console.log(store)
    return{
      todos:store.todoReducer.todos,
      isLoading:store.todoReducer.isLoading,
      isError:store.todoReducer.isError,
      errorMessage:store.todoReducer.errorMessage
    }
  },shallowEqual)

  console.log('toto render')

  const dispatch=useDispatch();

  useEffect(()=>{
    // getTodos(dispatch)
    dispatch(getTodos)
  },[])  
  
  return (
    <div>
      <Todoinput/>
      {isError && <h3>{errorMessage}</h3>}
      {todos.map((el)=>(
        <h3 key={el.id}>{el.title} - {el.status===true? "True":"False" }</h3>
      ))}
    </div>
  )
}

export default Todo
