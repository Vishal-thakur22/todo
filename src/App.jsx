
// import { useEffect, useState } from "react";
// const App = () => {
//   const [count, setCount] = useState (1000);  //(() => {
//   //   const storedCount = localStorage.getItem("count");
//   //   if (storedCount) {
//   //     return Number(storedCount);
//   //   }
//   //   return 1000;
//   // });


  
// console.log("hi");
// const handleClick = (result) => {
//   if (result === "increase") {
//     setCount(count + 1000);
//   }
//   else {
//     setCount(count - 1000);
//   }
// };

//   // const handleClick = () => {
//   //   setCount(count + 1000);
//   //   // localStorage.setItem("count", count + 1000);
//   // };

//   return (
//     <div>
//       <h1>value of count is {count}</h1>
//       { <button onClick={() =>handleClick("increase")}>increase count</button>  /* needed to wrap in another function to pass the argument */}
//       <button onClick={() =>handleClick("decrease")}>decrease count</button>
//       {count >5000 ? <h1> hello how are you</h1> : <h1>bye bye</h1>}
//     </div>
//   );
// };





// import { useEffect, useState } from "react";
// const App = () => {
//   let [count, setCount] = useState({
//     data: 1000,
//     name: "vikram",
//     status: "single",
//     gender: "male",
//   });

//   console.log("hiiii");

//   const handleClick = (result) => {
//     if (result == "increase") {
//       // count.data = count.data + 1000; ye galat hai
//       const newCount = { ...count, data: count.data + 1000 };

//       setCount(newCount);
//       console.log(count);
//     } else {
//       // count.data = count.data - 1000;
//       const decCount = { ...count, data: count.data - 1000 }; // to change the value of the state
//       setCount(decCount);
//       console.log(count);
//     }
//   };

//   return (
//     <div>
//       <h1>{count.data}</h1>
//       <h2>{count.name}</h2>
//       <h2>{count.gender}</h2>

//       <button
//         onClick={() => {
//           handleClick("increase");
//         }}
//       >
//         increase count
//       </button>
//       <button
//         onClick={() => {
//           handleClick("decrease");
//         }}
//       >
//         decrease count
//       </button>

//       {count > 5000 ? <h1> "hello dear how are you"</h1> : <p>"Go to hell"</p>}
//     </div>
//   );
// };





// import { useEffect, useState } from "react";
// const App = () => {
//   const [count,setCount] = useState(1000);
//   const [data,setData] = useState(5000);
// console.log("hii");
// useEffect(() => {
//   console.log("useEffect ");
// }, [count,data]);// due to empty array it will only run once  // and if we add state variable in array and is changing then it will execute again and again.

// return (
//   <>
//   <h1>hello app.jsx {count}</h1>
//   {console.log("return called")}
//    <button onClick={() =>setCount(count+1000)}>increase count</button>
//     <button onClick={() =>setData(data+1000)}>decrease count</button>
//   </>
// );
// };

// export default App;




// fetch api 
// import React from "react";
// const App = () => {
//   const apiCall = async () => {

//   const response = await fetch("https://fakestoreapi.com/products")
//   const data = await response.json();
//   console.log(data);
//   };
//   apiCall();
//   return (
//     <div>app</div>
   
//   );
// }
// export default App;


// import React, { useEffect ,useState, } from "react";

// const App = () => {
//   const [count,setCount] = useState(1000);
//   const [data,setData] = useState([]);

//   const apiCall = async () => {
//   const response= await fetch("https://fakestoreapi.com/products");
//   const json = await response.json();
//   setData(json);
//   };
  
//   useEffect(() => {
//     apiCall();
//   },[]);
//   console.log(data);

//   return (
// <div
//       style={{
//         display: "flex",
//         flexWrap: "wrap",
//         gap: "10px",
//         justifyContent: "space-around",
//         image : "center",
//       }}
//     >
//       {data.map((item) => (
//         <div
//           style={{
//             width: "300px",
//             height: "600px",
//             background: "cyan",
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//             flexDirection: "column",
//             borderRadius: "15px",
            
//           }}
//         >
//           <h3>{item.title}</h3>
//           <img src={item.image} alt="dasdsa" style={{ width: "200px" }}></img>
//           <h3>Price:{item.price}</h3>
//           <button
//             style={{
//               padding: "20px",
//               background: "red",
//               fontWeight: "bold",
//               color: "white",
//               borderRadius: "5px",
//             }}
//             onClick={() => alert("Item added to cart")}
//           >
//             Add to Cart
//           </button>
//         </div>
//       ))}
//       <button onClick={() => setCount(count + 1000)}>Increase</button>
//     </div>
//   );
// };
// export default App;






// import React, { useEffect, useState } from "react";

// const App = () => {
//   const [count, setCount] = useState(1000);
//   const [data, setData] = useState([]);
//   const [search, setSearch] = useState("");
//   const [filterData, setFilterData] = useState([]);

//   // // Fetch API data
//   // const apiCall = async () => {
//   //   try {
//   //     const response = await fetch("https://fakestoreapi.com/products");
//   //     const json = await response.json();
//   //     setData(json);
//   //   } catch (error) {
//   //     console.error("Error fetching data:", error);
//   //   }
//   // };

//   useEffect(() => {
//     const apiCall = async () => {
//       const response = await fetch("https://fakestoreapi.com/products");
//       const json = await response.json();
//       setData(json);
//       setFilterData(json);
//     };
//     apiCall();
//   }, []);
//   console.log(data);

//   function handleSearch(){
//     const filterData=data.filter((item)=>
//       item.title.toLowerCase().include(search.toLocaleLowerCase())
//      );
//     setData(filterData);

//   }

//   return (
    
//     <div style={{ textAlign: "center", padding: "20px", backgroundColor: "#f4f4f4", minHeight: "100vh" }}>
//       <h1 style={{ fontSize: "2.5rem", color: "#333", marginBottom: "20px" }}>Product Store</h1>
      
//       {/* Advertisement Section */}
//       <div
//         style={{
//           width: "80%",
//           margin: "20px auto",
//           padding: "20px",
//           background: "#ffeb3b",
//           textAlign: "center",
//           fontSize: "1.5rem",
//           fontWeight: "bold",
//           borderRadius: "10px",
//           boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
//         }}
//       >
//         Advertisement Space - Your Ad Here!
//         <div style={{ marginTop: "10px" }}>
//           <img src="https://th.bing.com/th/id/OIP.nFW6mwBJjgaK1QUnZT94LgHaCY?w=336&h=112&c=7&r=0&o=5&dpr=2&pid=1.7" alt="Mobile Ad" style={{ width: "100%", maxWidth: "300px", borderRadius: "5px" }} />
//         </div>
//       </div >
//       <input placeholder="search" 
//       className="search-bar"
//       onChange={(e)=> setSearch}
//       >
//       </input>

//       <div>

//       </div>

//       <div
//         style={{
//           display: "flex",
//           flexWrap: "wrap",
//           gap: "20px",
//           justifyContent: "center",
//         }}
//       >
//         {data.length > 0 ? (
//           data.map((item) => (
//             <div
//               key={item.id}
//               style={{
//                 width: "320px",
//                 background: "white",
//                 display: "flex",
//                 justifyContent: "center",
//                 alignItems: "center",
//                 flexDirection: "column",
//                 border: "1px solid #ddd",
//                 boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
//                 borderRadius: "15px",
//                 padding: "20px",
//                 transition: "transform 0.3s ease-in-out",
//               }}
//               onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
//               onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
//             >
//               <img
//                 src={item.image}
//                 alt={item.title}
//                 style={{ width: "250px", height: "250px", objectFit: "contain" }}
//               />
//               <h3 style={{ textAlign: "center", marginTop: "15px", fontSize: "1.2rem", color: "#555" }}>{item.title}</h3>
//               <h3 style={{ color: "#27ae60", fontSize: "1.5rem", fontWeight: "bold" }}>Price: ${item.price}</h3>
//               <button
//                 style={{
//                   padding: "12px 24px",
//                   background: "#e74c3c",
//                   fontWeight: "bold",
//                   color: "white",
//                   borderRadius: "8px",
//                   cursor: "pointer",
//                   border: "none",
//                   marginTop: "10px",
//                   transition: "background 0.3s ease-in-out",
//                 }}
//                 onMouseOver={(e) => (e.currentTarget.style.background = "#c0392b")}
//                 onMouseOut={(e) => (e.currentTarget.style.background = "#e74c3c")}
//                 onClick={() => alert("Item added to cart")}
//               >
//                 Add to Cart
//               </button>
//             </div>
//           ))
//         ) : (
//           <h2 style={{ color: "#555" }}>Loading products...</h2>
//         )}
//       </div>

//       {/* Increase Button */}
//       <button
//         onClick={() => setCount(count + 1000)}
//         style={{
//           marginTop: "30px",
//           padding: "12px 24px",
//           background: "#3498db",
//           color: "white",
//           fontWeight: "bold",
//           borderRadius: "8px",
//           cursor: "pointer",
//           border: "none",
//           transition: "background 0.3s ease-in-out",
//         }}
//         onMouseOver={(e) => (e.currentTarget.style.background = "#2980b9")}
//         onMouseOut={(e) => (e.currentTarget.style.background = "#3498db")}
//       >
//         Increase Count ({count})
//       </button>
//     </div>
//   );
// };

// export default App;








// import React, {useState } from "react";
// const app = () => {
//   const [name, setName] = useState("");
//   const [password, setPassword] = useState("");
//   const [passwordType, setPasswordType] = useState("password");


//   function handlechange(event) {
//     console.log(event.target.value);
//     setName(event.target.value);
// }
// function handlepassword(event) {
//   console.log(event.target.value);
//   setPassword(event.target.value);
// }

// function handlePasswordView() {
//   if (passwordType === "password") {
//     setPasswordType("text");
//   } else {
//     setPasswordType("password");
//   }
  
// }


// return(
//   <>
//   <div className="container">
//   <h2>enter your name</h2>
//   <input 
//   type="text"
//    placeholder="enter your name" 
//    onChange={handlechange}
//    value={name}
//    >
// </input>
// <h2>{name}</h2>

//   </div>
//   <button onClick={() => setName("enter name")}>click me</button>
//   <p>password</p>
//    <input
//     type={passwordType}
//     placeholder="enter your password"
//     onChange={handlepassword}
//     value={password}
//    >
//    </input>
//    <button onClick={handlePasswordView}>
//             {passwordType === "password" ? "view password" : "hide password"}
//           </button>
//   </>


// )
// };



// export default app;






// import { useState } from "react";

// const App = () => {
//   const [inputType, setInputType] = useState({
//     name: "",
//     password: "",
//     email: "",
//     number: "",
//     DOB: "",
//   });

//   const [passwordType, setPasswordType] = useState("password");

//   function handleChange(event) {
//     const { name, value } = event.target;
//     setInputType((prev) => ({...prev,[name]: value,
//     }));
//   }
//   console.log("input",inputType)

//   function handlePasswordView() {
//     setPasswordType((prevType) => (prevType === "password" ? "text" : "password"));
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(e);
//     console.log("form submitted");
//     let name = e.target[0].value;
//     let password = e.target[1].value;
//     let email = e.target[1].value;
//     console.log(name, password, email);

//   };
//   return (
//     <>
//       <div className="container">
//       <form onSubmit={handleSubmit}>
//       <div>
    
//         <h2>Enter your name</h2>

//         <input
//           type="text"
//           name="name"
//           placeholder="Enter your name"
//           onChange={handleChange}
//           value={inputType.name}
//         />
//         <h2>{inputType.name}</h2>
//       </div>
      

//       <div>
//         <p>Password</p>
//         <input
//           type={passwordType}
//           name="password"
//           placeholder="Enter your password"
//           onChange={handleChange}
//           value={inputType.password}
//         />
//         <button onClick={handlePasswordView}>
//           {passwordType === "password" ? "View Password" : "Hide Password"}
//         </button>
      
//       </div>
//       <div>
//         <p> Enter your Email</p>
//         <input
//           type={"email"}
//           name="email"
//           placeholder="Enter your email"
//           onChange={handleChange}
//           value={inputType.email}
//         />
//         </div>
//       <div>
//         <p> Enter your DOB</p>
//         <input
//           type={"date"}
//           name="date"
//           placeholder="Enter your DOB"
//           onChange={handleChange}
//           value={inputType.DOB}
//         />
//         </div>
//       <div>
//         <p> Enter your number</p>
//         <input
//           type={"number"}
//           name="number"
//           placeholder="Enter your number"
//           onChange={handleChange}
//           value={inputType.number}
//          />
//           </div>
//           <br>
//           </br>
//           <button
//             type="submit"
//             onClick={() => {
//               console.log("button submit");
//             }}
//           >
//             submit the form
//           </button>

//           </form>
//           </div>
      
//       </>
//   );
// };


// export default App;



//     12/march/2025


// import React, { useEffect, useState } from "react";
// import "./App.css";

// const App = () => {
//   const [count, setCount] = useState(1000);
//   const [data, setData] = useState([]);
//   const [search, setSearch] = useState("");
//   const [filterData, setFilterData] = useState([]);

//   useEffect(() => {
//     const apiCall = async () => {
//       const response = await fetch("https://fakestoreapi.com/products");
//       const json = await response.json();
//       setData(json);
//       setFilterData(json);
//     };
//     apiCall();
//   }, []);

//   console.log(data);

//   function handleSearch() {
//     const filterItem = data.filter((item) =>
//       item.title.toLowerCase().includes(search.toLowerCase())
//     );
//     setFilterData(filterItem);
//   }

//   return (
//     <div className="app">
//       <div>
//         <form onSubmit={(e) => e.preventDefault()}>
//           <input
//             placeholder="Search"
//             className="search-bar"
//             onChange={(e) => setSearch(e.target.value)}
//           ></input>
//           <button onClick={handleSearch}>Search</button>
//         </form>
//       </div>
//       <div className="products-container">
//         {filterData.map((item) => (
//           <div className="product-card" key={item.id}>
//             <h2 className="product-title">{item.title}</h2>
//             <img className="product-image" src={item.image} alt={item.title} />
//             <h3 className="product-price">₹{item.price}</h3>
//             <button
//               className="add-to-cart-button"
//               onClick={() => alert("Item added to cart")}
//             >
//               Add to Cart
//             </button>
//           </div>
//         ))}
//       </div>
//       <button
//         className="increase-button"
//         onClick={() => setCount(count + 1000)}
//       >
//         Increase
//       </button>
//     </div>
//   );
// };

// export default App;






//to do app   


// import { useState } from "react";

// const App = () => {

  
//   const [todo, setTodo] = useState([]); //in memory db
//   const [task, setTask] = useState(""); //input field

//   function handleAddTask(){
//     if(task=="")
//       return alert("please enter any task");
//     setTodo([...todo,{name: task, id:(crypto.randomUUID())}]);  // use  unique id for every task . better than randon.math
//     setTask(""); 
//   }
//   console.log(todo);
// const handleDelete=(index)=>{
//   const newTodos =todo.filter((t,idx)=> idx !==index);
//   setTodo(newTodos);
// }

//   //in memory db
//   return (
//     <div className="min-h-screen flex flex-col text-center bg-gray-100 p-5">
//       <h1 className="font-bold text-2xl mb-4">Todo List</h1>


// <div className="flex mb-4 gap-2.5 justify-center ">
//   <input placeholder="Enter your task" 
//    className="border rounded-x1 p-2 w-64 text-center "
//    onChange={(e)=>setTask(e.target.value)}
//    value={task}
  
//   ></input>
//   <button className="bg-blue-400 text-xl rounded text-center justify-center "
//    onClick={handleAddTask} > Add Task
//    </button>

// </div>
// <ul className="w-72 list-disc pl-5 list-inside">

//   {todo.map((t,index) => (<li

//   key={t.id} // don not use index as key so if we delete any item , then it will re-render the the page for every delete option. 

//   className="flex justify-between items-center bg-amber-100 p-2 rounded mb-2"
//   >
//     {t.name}
//     <button className="text-red-300 font-extrabold"
//      onClick={()=> handleDelete(index)}>X</button>

//   </li>))
// }

// </ul>

//     </div>
//   );
// };

// export default App;
//
//


// routing//
import React from "react";
import { BrowserRouter, Routes ,Route, Link} from "react-router-dom";
import Home from "./components/Home";
import Product from "./components/Product";
import Login from "./components/Login";
import Phones from "./components/Phones";
import User from "./components/User";
import Navbar from "./components/Navbar";


const App = () => {
  return(
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product" element={<Product />}>
      <Route path="/product/user" element={<User/>} />
      </Route>
      <Route path="/login" element={<Login/>}/>
      <Route path="/phones" element={<Phones />} />
      <Route path="*" element={<h1>Page not found</h1>} />
    </Routes>
    
    </>

  );
 };

 export default App;

