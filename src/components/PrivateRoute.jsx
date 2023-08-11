import React from 'react'
import { Navigate } from 'react-router-dom';
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

const PrivateRoute = (props) => {
    const isAuth=useSelector(store=>{
        console.log('store:', store)
        return store.authReducer.isAuth

      })

    console.log('isAuth:', isAuth)
    if(!isAuth){
        return <Navigate to="/login"/>
    }
  return props.children
}

export default PrivateRoute
