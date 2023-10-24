import { useState } from "react";
import { getTeamDriver , filterOrder, filterDrivers , filterOrigin} from "../redux/actions";
import {  useDispatch } from "react-redux";



const Menu = ({allDrivers}) => {

    const dispatch = useDispatch()
     
    const [team,setTeam] = useState("");
    

    const handleChange = (e) => {
          setTeam(e.target.value)
    }
    
    const onSearchTeam = (team) => {
     
      dispatch(getTeamDriver(team))
    
    }

    const handleOrder = (e) => {
        const {value} = e.target;
         dispatch(filterOrder(value))
    };

   const handleFilter = (e) => {
       const {value} = e.target;
       dispatch(filterDrivers(value));
    };

    const handleOrigin = (e) => {
      const {value} = e.target;
      dispatch(filterOrigin(value));
   };

  const numAllDrivers = allDrivers.length
   

console.log(team)
    return (
        <div>
          <div> Filtros </div>

          <div>    
            <input type='search' placeholder="Ingrese un Team" onChange={handleChange}  value={team}/> 
            <button  onClick={() => {onSearchTeam(team)}}>🔍</button>
          </div>         
          <div>

            <select onChange={handleOrder}  > 
            <option selected disabled >Orden Alfabetico</option>
            <option value="Ascendente">Ascendente</option>          
            <option value="Desendente">Desendente</option>
            </select>
            <select  onChange={handleFilter}>
            <option selected disabled >Orden Fecha de Nacimiento</option>
            <option value="Mayor a Menor">Mayor a Menor</option>          
            <option value="Menor a Mayor">Menor a Mayor</option>
            </select>
            <select  onChange={handleOrigin} >
            <option selected disabled >API/DB</option>
            <option value="API">API</option>          
            <option value="DB">DB</option>
            </select>
        
         </div>
           <p> {`${numAllDrivers} Drivers `} </p>
        </div>
    )
}

export default Menu