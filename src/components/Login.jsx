import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // useNavigate instead of Navigate

  const handleClick = () => {
    if (email === "abc@gmail.com" && password === "12345") {
      alert("Login Success");
      navigate("/Phones"); // Correct navigation
    } else {
      alert("Login Failed");
    }
  };

  return (
    <div>
      <img 
        src="https://th.bing.com/th/id/OIP.AZQGzhFfhnd-O5OCEkli6wHaE8?w=294&h=196&c=7&r=0&o=5&dpr=2&pid=1.7" 
        alt="login image" 
      />

      <input 
        type="email" 
        placeholder="Email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
      />

      <input 
        type="password" 
        placeholder="Password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
      />

      <button className='bg-amber-200' onClick={handleClick}>Login</button>
    </div>
  );
}

export default Login;
