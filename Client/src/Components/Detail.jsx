import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { useSelector } from "react-redux";



const Detail = () => {

 /*const {characterer, se{characterer] = useState([])
 const  {id} = useParams();
   
useEffect( () => {
    se{characterer{characterers.find(char => char.id === Number(id)))
    
}, [id,{characterers]) ;
 
const{driver ={characterer[0]*/
const { id } = useParams();
const driversAll = useSelector(state => state.allDrivers);


const driver = driversAll.find(char => char.id === Number(id));


useEffect(() => {
    
},[id,driversAll])

console.log(driversAll)
console.log(Number(id))

console.log("hola")



return (

    <div>
         

            <h1> {driver.forename} </h1>
             <h2> {driver.surname}</h2>
             <h2>{driver.teams}</h2>
             <p> {driver.description} </p>
             <p> {driver.dob}</p>
             <p> {driver.nationality} </p>
            <img src= {driver.image} alt={"characterer"} />
    </div>
)

}

export default Detail


