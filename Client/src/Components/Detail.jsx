import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import style from "./style/Detail.module.css";

const Detail = () => {
  const { id } = useParams();
  const driversAll = useSelector((state) => state.allDrivers);
  let driver = {};
  if (isNaN(id)) {
    driver = driversAll.find((char) => char.Id === id);
  } else {
    driver = driversAll.find((char) => char.Id === Number(id));
  }

  useEffect(() => {}, [id, driversAll]);

  console.log(driversAll);
  console.log(id);

  console.log("hola");

  return (
    <div className={style.container}>
      <div className={style.info}>
        <h1>
          {driver.forename} {driver.surname}
        </h1>

        <h3>Teams: </h3>
        <p>{driver.teams}</p>
        <h3>Description: </h3>
        <p>{driver.description} </p>
        <h3>Date Of Birth: </h3>
        <p> {driver.dob}</p>
        <h3>Nationality: </h3>
        <p> {driver.nationality} </p>
      </div>
      <div className={style.image}>
        <img className={style.img} src={driver.image} alt={"characterer"} />
      </div>
    </div>
  );
};

export default Detail;
