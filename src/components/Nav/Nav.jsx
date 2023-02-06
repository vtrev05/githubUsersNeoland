import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <div>
        <NavLink style={{padding: '10px', color:"whitesmoke", textDecoration:"underline"}} to="/">Home</NavLink>
        <NavLink style={{padding: '10px', color:"whitesmoke", textDecoration:"underline"}} to="/users">Search Users</NavLink>
        <NavLink style={{padding: '10px', color:"whitesmoke", textDecoration:"underline"}} to="/contact">Contact</NavLink>
    </div>
  )
}

export default Nav