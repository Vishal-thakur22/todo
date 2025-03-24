import React, { useEffect, useState } from 'react'
import { Link ,useLocation} from 'react-router-dom';

const Phones=()=> {

  const [count,setCount] =useState(1);
  const location = useLocation();
  const handleClick=()=>{
setCount(count+1);
  };
useEffect(() => {
 let id=setInterval(()=>{
 console.log("set interval")
},1000);
return function()
{
  console.log("return useEffect")
  clearInterval(id);
}
  },[]);
  
  return (
    <div>
       
        <img src="https://th.bing.com/th/id/OIP.HxCUDuhXiUIYR73NuIvIvQHaEp?w=267&h=180&c=7&r=0&o=5&dpr=2&pid=1.7" alt="mobile img" />

        <h1 className=''></h1>
        <button className=''></button>
    </div>
  )
}

export default Phones;