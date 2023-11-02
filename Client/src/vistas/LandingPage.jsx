import { useEffect } from "react";
import { useDispatch } from "react-redux";
import style from "./style/LandingPage.module.css";
import { Link } from "react-router-dom";
import { getDrivers,  getAllTeams } from "../redux/actions";

const LandingPage = () => {
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllTeams());
    dispatch(getDrivers());
  }, [dispatch]);
 

  return (
    <div className={style.image}>
      <Link to="/home">
        <h1 className={style.button}> WELCOME </h1>
      </Link>
    </div>
  );
};

export default LandingPage;
