import React,{useState} from 'react'
import './Card.css'
import logo from "../img/Vaibhav.jpeg"

function Card() {
   
    const [ID,setID]= useState('ID:- 202');
    const [Name,setName]= useState('Name:- Vaibhav Lanjewar');
    const [Address,setAddress]= useState('Address:- Nagpur, Maharashtra.');
    const [office,setoffice]= useState('Office:- Axiom Tech Guru pvt.ltd');

  return (
    
    <div className='card'>
    
       <div className='upper-container'>
          <div className='image-container'>
            <img src= {logo} alt='abc' height="100px" weight="100px"/>
          </div>
        </div>
          <div className='lower-container'>
            <h3> { ID } </h3>
            <h3> { Name } </h3> 
            <h3> { Address } </h3>
            <h3> { office } </h3>
          </div>
     </div>
    );
   }

export default Card
