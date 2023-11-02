import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import style from "./style/HomePage.module.css";
import Menu from "../Components/Menu";
import Cards from "../Components/Cards";
import NavBar from "../Components/NavBar";
import { getDrivers, getAllTeams } from "../redux/actions";

const HomePage = () => {
  const allDrivers = useSelector((state) => state.allDrivers);
  const allTeams = useSelector((state) => state.allTeams);

  const dispatch = useDispatch();

  useEffect(() => {
    if (allDrivers.length === 0) {
      dispatch(getDrivers());
    }
    if (allTeams.length === 0) {
      dispatch(getAllTeams());
    }
  }, [dispatch, allDrivers, allTeams]);

  return (
    <div>
      <div className={style.container}>
        <div className={style.nav}>
          <NavBar />
        </div>
        <div className={style.main}>
          <Menu allDrivers={allDrivers} allTeams={allTeams} />
        </div>

        <div className={style.cards}>
          <Cards allDrivers={allDrivers} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
