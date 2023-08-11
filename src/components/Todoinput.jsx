import axios from 'axios';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {  postTodos,} from '../Redux/Todo/action';

const Todoinput = () => {
    const[title,setTitle]=useState('')

    const dispatch=useDispatch();

    const handleAdd=()=>{
        const newTodo={
            title,
            status:false
        };
        console.log('newTodo:', newTodo)  
        // postTodos(dispatch,newTodo)     
        dispatch(postTodos(newTodo)) 
    }


    

  return (
    <div>
      <input type="text" placeholder='Enter Todo' value={title} onChange={(e)=>setTitle(e.target.value)}/>
      <button onClick={handleAdd}>Add Todo</button>
    </div>
  )
}

export default Todoinput
