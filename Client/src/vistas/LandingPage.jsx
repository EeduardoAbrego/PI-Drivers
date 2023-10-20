import style from "./style/LandingPage.module.css"
import { Link } from "react-router-dom"

const LandingPage = () => {

    return (
        <div className={style.image}>
            
         <Link to="/home">
            <button className={style.button}> WELCOME </button>
         </Link>


        </div>
    )
}

export default LandingPage