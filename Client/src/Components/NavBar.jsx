import { useState } from "react";
import { useDispatch } from "react-redux";
import { getNameDriver, reloadHome } from "../redux/actions";
import style from "./style/NavBar.module.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState("");

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const onSearchName = (name) => {
    dispatch(getNameDriver(name));
  };
  const reload = () => {
    dispatch(reloadHome());
  };

  return (
    <div className={style.container}>
      <div className={style.cont1}>
        <Link to={"/home"}>
          <h1>Drivers</h1>
        </Link>
      </div>

      <div className={style.buttonContainer}>
        <button
          className={style.styleButton}
          onClick={() => {
            reload();
          }}
        >
          Reload
        </button>

        <div className={style.inputContainer}>
          <input
            className={style.styleButton}
            type="search"
            placeholder="Ingrese un nombre ..."
            onChange={handleChange}
            value={name}
          />
          <butto
            onClick={() => {
              onSearchName(name);
            }}
            className={style.styleButton}
          >
            Search
          </butto>
        </div>

        <Link to={"/create_driver"}>
          <button className={style.styleButton}> Create Driver </button>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
