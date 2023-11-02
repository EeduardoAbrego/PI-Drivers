import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getId, clearState } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import style from "./style/Detail.module.css";

const Detail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const driver = useSelector((state) => state.driverDetail);

  useEffect(() => {
    dispatch(getId(id));
  }, [id, dispatch]);

  useEffect(() => {
   return  () => {dispatch(clearState());}
  }, [dispatch]);

  return (
    <div className={style.container}>
      <div className={style.info}>
        <h1>
          {driver.forename} {driver.surname}
        </h1>

       { driver.teams && <> <h3>Teams: </h3>
        <p>{driver.teams}</p> </>}

        { driver.description &&  <> <h3>Description: </h3>
        <p>{driver.description} </p> </>}

        { driver.dob &&  <> <h3>Date Of Birth: </h3>
        <p> {driver.dob}</p> </>}

       { driver.nationality && <><h3>Nationality: </h3>
        <p> {driver.nationality} </p> </> }
      </div>
      <div className={style.image}>
        <img className={style.img} src={driver.image} alt={"characterer"} />
      </div>
    </div>
  );
};

export default Detail;
