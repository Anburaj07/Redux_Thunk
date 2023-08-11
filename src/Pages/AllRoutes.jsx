import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from './Homepage'
import Login from './Login'
import Counter from "../components/counter"
import Todo from "../components/Todo"
import PrivateRoute from '../components/PrivateRoute'
import Leap from './Leap'

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Homepage/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='counter' element={<Counter/>}/>
        <Route path='todo' element={<Todo/>}/>
        <Route path='leap' element={<Leap/>}/>
      </Routes>
    </div>
  )
}

export default AllRoutes
