import style from "./style/Card.module.css"
import { Link } from "react-router-dom"

const Card = ({element}) => {

const {name , image, id , teams} = element

    return (
        <div className={style.card}>
           <Link to={`/detail/${id}`} >
          <span>{name.forename}</span>
          </Link>
          <span> {name.surname} </span>
          <img className={style.img} src={image.url} alt='' />
          <span>{teams}</span>

        </div>
    )
}

export default Card