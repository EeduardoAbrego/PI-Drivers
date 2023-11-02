import {  useSelector } from "react-redux";
import style from "./style/HomePage.module.css";
import Menu from "../Components/Menu";
import Cards from "../Components/Cards";
import NavBar from "../Components/NavBar";

const HomePage = () => {
  const allDrivers = useSelector((state) => state.allDrivers);
  const allTeams = useSelector((state) => state.allTeams);

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
