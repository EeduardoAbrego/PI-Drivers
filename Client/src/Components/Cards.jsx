import { useEffect, useState } from "react";
import Card from "./Card"
import style from "./style/Cards.module.css"


const Cards = ({allDrivers, driverName}) => {

  let [numPag, setNumPag] = useState(1)

 
  let indexP = (numPag- 1) * 9 
  let indexF = indexP + 9 
  let arrayDrivers = allDrivers.slice(indexP, indexF)

  const handlerAnt = ( ) => {
    if ( numPag >  1)  setNumPag(numPag - 1);
  }

  const handlerNext = ( ) => {
   if (numPag !== 57) setNumPag(numPag + 1) ;
  }
  
  
 
    return (
      
      <div  className={style.cards}>
           
      {driverName && driverName.map((element) => ( <Card  element={element} /> ))}
      
        { arrayDrivers.map((element) => (
          <Card key={element.Id} element={element} />
        ))}
        <div className={style.paginado} >
         <button onClick={handlerAnt}>Anterior</button>
         <p>Página {numPag}</p>
         <button onClick={handlerNext}>Siguiente</button>
         </div>

      </div>
      

      
    )
}

export default Cards