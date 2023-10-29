import style from "./style/LandingPage.module.css";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className={style.image}>
      <Link to="/home">
        <h1 className={style.button}> WELCOME </h1>
      </Link>
    </div>
  );
};

export default LandingPage;
