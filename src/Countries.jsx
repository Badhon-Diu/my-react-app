import { useEffect } from "react";
import { useState } from "react";
import Singlecountry from "./Singlecountry";

export default function Countries(){


const [ country , setcountry] = useState([])

useEffect(()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => setcountry(data))
},[])




return(
   
       

       <div className="flex">

       {
        country.map((singlecountry)=> <Singlecountry key = {singlecountry.cca3} singlecountry = {singlecountry}></Singlecountry>

        
        
    )
        
       }

       </div>
  
)





}