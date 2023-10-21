import axios from "axios"

export const GET_DRIVERS = "GET_DRIVERS"
export const GET_NAME = "GET_NAME"
export const GET_TEAM = "GET_TEAM"
export const ORDER  = "ORDER"
export const FILTER = "FILTER"




export const getDrivers = () => {
    console.log("holis")
    return async (dispatch) => {
    const {data} = await axios("http://localhost:3001/drivers");
    console.log(data)
    return dispatch({
        type: GET_DRIVERS,
        payload: data,
    })
    }
};

export const getNameDriver = (name) => {
    return async (dispatch) => {
        const {data} = await axios(`http://localhost:3001/drivers?name=${name}`);
        console.log(data)
        return dispatch({
            type: GET_NAME,
            payload: data,
        })
        }
}


export const getTeamDriver = (team) => {
    return  (dispatch) => {
        return dispatch({
            type: GET_TEAM,
            payload: team,
        })
        }
}

export const filterOrder = (value) => {
    return  (dispatch) => {
        return dispatch({
            type: ORDER,
            payload: value,
        })
        }
}


export const filterDrivers = (value) => {
    return  (dispatch) => {
        return dispatch({
            type: FILTER,
            payload: value,
        })
        }
}

  