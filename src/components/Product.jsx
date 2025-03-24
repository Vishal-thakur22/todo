import React from 'react'
import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom';

function Product() {
  return (
    <div className='size-100'>
     
      <img src="https://www.bing.com/th/id/OIP.lTmSRLPfVUJxz76w1rT8eQHaEX?w=164&h=100&c=8&rs=1&qlt=90&o=6&dpr=2&pid=3.1&rm=2" alt="any product" />
      { <Outlet />   /*  it is used to render the child routes  like here it is product/user */ }
    </div>
  )
}

export default Product;