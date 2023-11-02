import { useState } from "react";
import {
  getTeamDriver,
  filterOrder,
  filterDrivers,
  filterOrigin,
} from "../redux/actions";
import { useDispatch } from "react-redux";
import style from "./style/Main.module.css";

const Menu = ({ allDrivers, allTeams }) => {
  const dispatch = useDispatch();

  const [team, setTeam] = useState("");

  const handleTeam = (e) => {
    const { value } = e.target;
    dispatch(getTeamDriver(value));
  };

  const handleOrder = (e) => {
    const { value } = e.target;
    dispatch(filterOrder(value));
  };

  const handleDate = (e) => {
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
          <select className={style.styleButton1} onChange={handleTeam}>
            <option selected disabled>
              Teams
            </option>
            {allTeams.map((team) => (
              <option key={team} value={team}>
                {team}
              </option>
            ))}
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
      </details>
      <details>
        <summary className={style.summary}>Sort</summary>
        <div>
          <div>
            <select className={style.styleButton1} onChange={handleOrder}>
              <option selected disabled>
                Alphabetical order
              </option>
              <option value="Upward">Upward</option>
              <option value="Falling">Falling</option>
            </select>
          </div>
          <div>
            <select className={style.styleButton1} onChange={handleDate}>
              <option selected disabled>
                Order Date of Birth
              </option>
              <option value="Highest to Lowest">Highest to Lowest</option>
              <option value="Lowest to Highest">Lowest to Highest</option>
            </select>
          </div>
        </div>
      </details>
      <div className={style.p}>
        <p> {`${numAllDrivers} Drivers `} </p>
      </div>
    </div>
  );
};

export default Menu;
