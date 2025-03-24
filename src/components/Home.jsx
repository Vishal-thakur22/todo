import React ,{useState} from 'react'
import { Link } from 'react-router-dom';
import Header from './Header';
const  Home=()=> {
  const [count, setCount] = useState(0);


  return (
    <div>
      <img src="https://marketingaccesspass.com/wp-content/uploads/2015/10/Podcast-Website-Design-Background-Image.jpg" alt="img background" />
   
 <Header/>
    </div>
  );
};


export default Home;