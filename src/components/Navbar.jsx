import React from 'react'
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div>
          <div className='p-6 bg-amber-100 flex justify-between'>
         <h1 className='font-bold'> React-Routing</h1>
         <div className='flex gap-8'>
           <Link to={"/"}>Home</Link>
           <Link to={"/product"}>Product</Link>
           <Link to={"/login"}>Login</Link>
           <Link to={"/phones"}>Phones</Link>
         </div>
          </div>
    </div>
  )
}

export default Navbar;