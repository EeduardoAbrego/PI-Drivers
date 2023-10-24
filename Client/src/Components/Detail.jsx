import React, { useEffect} from "react";
import { useParams } from "react-router-dom";

import { useSelector } from "react-redux";



const Detail = () => {

    const { id } = useParams();
const driversAll = useSelector(state => state.allDrivers);
let driver = {}
if(isNaN(id)){
     driver = driversAll.find(char => char.Id === id);
} else {
    driver = driversAll.find(char => char.Id === Number(id));
}


useEffect(() => {
    
},[id,driversAll])

console.log(driversAll)
console.log(id)

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


