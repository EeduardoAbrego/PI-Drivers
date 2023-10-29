import { useState, useEffect } from "react";
import {
  getTeamDriver,
  filterOrder,
  filterDrivers,
  filterOrigin,
  getAllTeams,
} from "../redux/actions";
import { useDispatch } from "react-redux";
import style from "./style/Main.module.css";

const Menu = ({ allDrivers, allTeams }) => {
  const dispatch = useDispatch();

  const [team, setTeam] = useState("");

  useEffect(() => {
    dispatch(getAllTeams());
  }, [dispatch]);

  const handleChange = (e) => {
    setTeam(e.target.value);
  };

  const onSearchTeam = (team) => {
    dispatch(getTeamDriver(team));
  };

  const handleOrder = (e) => {
    const { value } = e.target;
    dispatch(filterOrder(value));
  };

  const handleFilter = (e) => {
    const { value } = e.target;
    dispatch(filterDrivers(value));
  };

  const handleOrigin = (e) => {
    const { value } = e.target;
    dispatch(filterOrigin(value));
  };

  const numAllDrivers = allDrivers.length;

  console.log(team);
  return (
    <div>
      <details>
        <summary className={style.summary}>Filter</summary>
        <div>
          <select className={style.styleButton1} onChange={handleChange}>
            <option selected disabled>
              Teams
            </option>
            {allTeams.map((team) => (
              <option  key={team} value={team}>
                {team}
              </option>
            ))}
          </select>
          <button className={style.styleButton1}
            onClick={() => {
              onSearchTeam(team);
            }}
          >
            🔍
          </button>
        </div>
      </details>
      <details>
        <summary className={style.summary}>Sort</summary>
        <div>
          <div>    
          <select className={style.styleButton1} onChange={handleOrder}>
            <option selected disabled>
              Orden Alfabetico
            </option>
            <option value="Ascendente">Ascendente</option>
            <option value="Desendente">Desendente</option>
          </select>
          </div>
          <div>
          <select className={style.styleButton1} onChange={handleFilter}>
            <option selected disabled>
              Orden Fecha de Nacimiento
            </option>
            <option value="Mayor a Menor">Mayor a Menor</option>
            <option value="Menor a Mayor">Menor a Mayor</option>
          </select>
          </div>
          <div>
          <select className={style.styleButton1} onChange={handleOrigin}>
            <option selected disabled>
              API/DB
            </option>
            <option value="API">API</option>
            <option value="DB">DB</option>
          </select>
          </div>
        </div>
      </details>
        <div className={style.p} >
          <p > {`${numAllDrivers} Drivers `} </p>
        </div>
    </div>
  );
};

export default Menu;
