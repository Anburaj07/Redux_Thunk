import React from 'react'
import { useNavigate } from 'react-router-dom'

const Homepage = () => {
    const navigate=useNavigate();
  return (
    <div>
      <button onClick={()=>navigate('/login')}>Click here for login</button>
      <button onClick={()=>navigate('/counter')}>Counter Page</button>
      <button onClick={()=>navigate('/todo')}>Todo Page</button>
      <button onClick={()=>navigate('/leap')}>LEAP Page</button>
    </div>
  )
}

export default Homepage
