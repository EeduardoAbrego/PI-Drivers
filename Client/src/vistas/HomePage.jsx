import { useEffect } from "react";
import {useDispatch, useSelector} from "react-redux"
import  {getDrivers} from "../redux/actions";
import style from "./style/HomePage.module.css"
import Menu from "../Components/Menu"
import Cards from "../Components/Cards"


const HomePage = () => {
 
const dispatch = useDispatch();
const allDrivers = useSelector((state) => state.allDrivers);

useEffect(() => {
    dispatch(getDrivers());
    
}, []);


return (
   <>
   <div className={style.container }>
      <div className={style.main} > 
      <Menu allDrivers={allDrivers} /> 
      </div>
      <div className={style.cards }>
      <Cards allDrivers={allDrivers}  /> 
         </div>
     </div>
     </>
)
}

export default HomePage  