import { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import style from "./style/Form.module.css";
import { getDrivers } from "../redux/actions";

const Form = () => {
  const allTeams = useSelector((state) => state.allTeams);
  const dispatch = useDispatch();

  const [driverData, setDriverData] = useState({
    forename: "",
    surname: "",
    image: "",
    nationality: "",
    description: "",
    dob: "",
    teams: "",
  });

  const [errors, setErrors] = useState({
    forename: "Required",
    dob: "Required",
  });

  const validations = (value, proper, setErrors, errors) => {
    if (proper === "forename") {
      const valName = /^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]+$/;
      const isValid = valName.test(value);
      setErrors({
        ...errors,
        forename: isValid ? "Name Válido" : "Name Inválido",
      });
    } else if (proper === "dob") {
      const valDate = /^\d{4}\-\d{2}\-\d{2}$/;
      const isValid = valDate.test(value);
      setErrors({
        ...errors,
        dob: isValid ? "Date Válida" : "Date Inválida",
      });
    }
  };

  const handleChange = (e) => {
    const proper = e.target.name;
    const value = e.target.value;
    setDriverData({ ...driverData, [proper]: value });
    validations(value, proper, setErrors, errors);
  };

  const createDriver = async (driver) => {
    try {
      await axios.post("https://pi-drivers-juyt.onrender.com/drivers", driver);
      alert("usuario creado");
    } catch (error) {
      alert(error.message);
    }
  };

  const handleSubmit = (event, driverData) => {
    event.preventDefault();
    if (errors.forename === "Name Invalid" ||
     errors.dob === "Date Invalid" || errors.forename === "Required" ||
      errors.dob === "Required" ||  driverData.teams.length === 0  )
      return alert("Name or Date Invalid ");
    createDriver(driverData);
    dispatch(getDrivers());
  };

  const handleSelect = (e) => {
    const { value } = e.target;
    setDriverData({ ...driverData, teams: [...driverData.teams, value] });
  };

  return (
    <div className={style.container}>
      <form className={style.form} onSubmit={handleSubmit}>
        <div>
          <label htmlFor="Name">Name:</label>
          <input
            type="text"
            name="forename"
            value={driverData.forename}
            onChange={handleChange}
          />
          <span>{errors.forename} </span>
        </div>

        <div>
          <label htmlFor="Apellido">Last Name: </label>
          <input
            type="text"
            name="surname"
            value={driverData.surname}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="Nationality">Nationality: </label>
          <input
            type="text"
            name="nationality"
            value={driverData.nationality}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="Image">Image: </label>
          <input
            type="text"
            name="image"
            value={driverData.image}
            onChange={handleChange}
            placeholder="url"
          />
        </div>

        <div>
          <label htmlFor="Date of Birthday"> Date of Birthday: </label>
          <input
            type="text"
            name="dob"
            value={driverData.dob}
            onChange={handleChange}
            placeholder="yyyy-mm-dd"
          />
          <span>{errors.dob} </span>
        </div>

        <div>
          <label htmlFor="Description"> Description: </label>
          <input
            type="text"
            name="description"
            value={driverData.description}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="Teams"> Teams: </label>
          <input
            type="text"
            name="teams"
            value={driverData.teams}
            onChange={handleChange}
          />

          <select onChange={handleSelect}>
            <option selected disabled>
              Teams
            </option>
            {allTeams.map((team) => (
              <option value={team}>{team}</option>
            ))}
          </select>
        </div>

        <div className={style.button}>
          <button type="submit"> Send </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
