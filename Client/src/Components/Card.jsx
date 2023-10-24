import style from "./style/Card.module.css"
import { Link } from "react-router-dom"

const Card = ({element}) => {

const {forename , surname,  image, Id , teams, } = element

    return (
        <div className={style.card}>
         <Link to={`/detail/${Id}`} >
          <h3>{forename}</h3>
          </Link>
          <h4> {surname} </h4>
          <img className={style.img} src={image} alt='' />
          <span>{teams}</span>

        </div>
    )
}

export default Card