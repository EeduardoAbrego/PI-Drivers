import axios from "axios";
export const GET_ID = "GET_ID";
export const GET_DRIVERS = "GET_DRIVERS";
export const GET_NAME = "GET_NAME";
export const GET_TEAM = "GET_TEAM";
export const ORDER_NAME = " ORDER_NAME";
export const ORDER_DATE = "ORDER_DATE";
export const GET_ALL_TEAMS = "GET_ALL_TEAMS";
export const ORIGIN = "ORIGIN";
export const RELOAD = "RELOAD";
export const CLEAR = "CLEAR";

export const getDrivers = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios("https://drivers-pi-backend.onrender.com/drivers");
      return dispatch({
        type: GET_DRIVERS,
        payload: data,
      });
    } catch (error) {
      alert(error);
    }
  };
};

export const getNameDriver = (name) => {
  return async (dispatch) => {
    try {
      const { data } = await axios(
        `https://drivers-pi-backend.onrender.com/drivers?name=${name}`
      );
      if (data.length === 0)
        return alert("No characters with that name were found");
      return dispatch({
        type: GET_NAME,
        payload: data,
      });
    } catch (error) {
      alert(error);
    }
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
      type: ORDER_NAME,
      payload: value,
    });
  };
};

export const filterDrivers = (value) => {
  return (dispatch) => {
    return dispatch({
      type: ORDER_DATE,
      payload: value,
    });
  };
};

export const getAllTeams = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios(`https://drivers-pi-backend.onrender.com/teams`);
      console.log(data);
      return dispatch({
        type: GET_ALL_TEAMS,
        payload: data,
      });
    } catch (error) {
      alert(error);
    }
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

export const getId = (id) => {
  return (dispatch) => {
    return dispatch({
      type: GET_ID,
      payload: id,
    });
  };
};

export const clearState = () => {
  return (dispatch) => {
    return dispatch({
      type: CLEAR,
      payload: [],
    });
  };
};
