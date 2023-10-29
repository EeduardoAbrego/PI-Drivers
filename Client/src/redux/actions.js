import axios from "axios";

export const GET_DRIVERS = "GET_DRIVERS";
export const GET_NAME = "GET_NAME";
export const GET_TEAM = "GET_TEAM";
export const ORDER = "ORDER";
export const FILTER = "FILTER";
export const GET_ALL_TEAMS = "GET_ALL_TEAMS";
export const ORIGIN = "ORIGIN";
export const RELOAD = "RELOAD";

export const getDrivers = () => {
  return async (dispatch) => {
    const { data } = await axios("http://localhost:3001/drivers");
    return dispatch({
      type: GET_DRIVERS,
      payload: data,
    });
  };
};

export const getNameDriver = (name) => {
  return async (dispatch) => {
    const { data } = await axios(`http://localhost:3001/drivers?name=${name}`);
    console.log(data);
    return dispatch({
      type: GET_NAME,
      payload: data,
    });
  };
};

export const getTeamDriver = (team) => {
  return (dispatch) => {
    return dispatch({
      type: GET_TEAM,
      payload: team,
    });
  };
};

export const filterOrder = (value) => {
  return (dispatch) => {
    return dispatch({
      type: ORDER,
      payload: value,
    });
  };
};

export const filterDrivers = (value) => {
  return (dispatch) => {
    return dispatch({
      type: FILTER,
      payload: value,
    });
  };
};

export const getAllTeams = () => {
  return async (dispatch) => {
    const { data } = await axios(`http://localhost:3001/teams`);
    console.log(data);
    return dispatch({
      type: GET_ALL_TEAMS,
      payload: data,
    });
  };
};

export const filterOrigin = (value) => {
  return (dispatch) => {
    return dispatch({
      type: ORIGIN,
      payload: value,
    });
  };
};

export const reloadHome = () => {
  return (dispatch) => {
    return dispatch({
      type: RELOAD,
    });
  };
};
