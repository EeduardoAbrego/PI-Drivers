import style from "./style/Card.module.css"
import { Link } from "react-router-dom"

const Card = ({element}) => {

const {forename , surname,  image, id , teams} = element

    return (
        <div className={style.card}>
           <Link to={`/detail/${id}`} >
          <span>{forename}</span>
          </Link>
          <span> {surname} </span>
          <img className={style.img} src={image} alt='' />
          <span>{teams}</span>

        </div>
    )
}

export default Card