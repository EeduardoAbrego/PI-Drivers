import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDrivers } from "../redux/actions";
import style from "./style/HomePage.module.css";
import Menu from "../Components/Menu";
import Cards from "../Components/Cards";
import NavBar from "../Components/NavBar";

const HomePage = () => {
  const dispatch = useDispatch();
  const allDrivers = useSelector((state) => state.allDrivers);
  const allTeams = useSelector((state) => state.allTeams);

  useEffect(() => {
    dispatch(getDrivers());
  }, [dispatch]);

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
