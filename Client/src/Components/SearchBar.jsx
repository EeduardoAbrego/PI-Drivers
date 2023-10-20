import { useState } from "react";
import {useDispatch} from "react-redux"
import { getNameDriver } from "../redux/actions";
import style  from "./style/Search.module.css"
import { Link } from "react-router-dom";

const SearchBar = () => {

  const dispatch = useDispatch()

const [name,setName] = useState("");

const handleChange = (event) => {
      setName(event.target.value)
}

const onSearchName = (name) => {
 
  dispatch(getNameDriver(name))

}

return (
    <div className={style.container} >
        <h1>Drivers</h1>
       
        <div>
        <input type='search' placeholder="Ingrese un nombre ..." onChange={handleChange}  value={name}/> 
        <button  onClick={() => {onSearchName(name)}}>🔍</button>

        <Link to={"/home"} >
            <button> Home </button>
        </Link>
     
        <Link to={"/create_driver"} >
            <button> Create Driver </button>
        </Link>
          
        
        </div>

    </div>
)
}

export default SearchBar