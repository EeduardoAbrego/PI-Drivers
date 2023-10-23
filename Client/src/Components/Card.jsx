import style from "./style/Card.module.css"
import { Link } from "react-router-dom"

const Card = ({element}) => {

const {forename , surname,  image, Id , teams, } = element

    return (
        <div className={style.card}>
        <p>{Id }</p>
           <Link to={`/detail/${Id}`} >
          <span>{forename}</span>
          </Link>
          <span> {surname} </span>
          <img className={style.img} src={image} alt='' />
          <span>{teams}</span>

        </div>
    )
}

export default Card