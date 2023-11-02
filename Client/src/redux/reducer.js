import {
  GET_DRIVERS,
  GET_NAME,
  GET_TEAM,
  ORDER_NAME,
  ORDER_DATE,
  GET_ALL_TEAMS,
  ORIGIN,
  RELOAD,
  GET_ID,
  CLEAR,
} from "./actions";

let initialState = {
  allDrivers: [],
  allDriver: [],
  driverDetail: [],
  allTeams: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DRIVERS:
      return {
        ...state,
        allDrivers: action.payload,
        allDriver: action.payload,
      };

    case GET_NAME:
      return { ...state, allDrivers: action.payload };

    case GET_TEAM:
      const driverFilter = [...state.allDriver].filter((driv) => {
        if (typeof driv.teams === "string") {
          return (
            driv.teams.includes(action.payload) || driv.teams === action.payload
          );
        } else {
          return false;
        }
      });
      return { ...state, allDrivers: driverFilter };

    case ORDER_NAME:
      const driverOrder = [...state.allDrivers].sort((a, b) => {
        if (action.payload === "Upward") {
          return a.forename > b.forename ? 1 : -1;
        } else {
          return a.forename < b.forename ? 1 : -1;
        }
      });
      return {
        ...state,
        allDrivers: driverOrder,
      };

    case ORDER_DATE:
      const filterDate = [...state.allDrivers].sort((a, b) => {
        if (action.payload === "Lowest to Highest") {
          return Number(a.dob.split("-")[0]) - Number(b.dob.split("-")[0]);
        } else {
          return Number(b.dob.split("-")[0]) - Number(a.dob.split("-")[0]);
        }
      });

      return {
        ...state,
        allDrivers: filterDate,
      };

    case GET_ALL_TEAMS:
      return {
        ...state,
        allTeams: action.payload,
      };

    case ORIGIN:
      if (action.payload === "API") {
        const driverOrigin = [...state.allDriver].filter(
          (driv) => typeof driv.Id === "number"
        );
        return {
          ...state,
          allDrivers: driverOrigin,
        };
      } else {
        const driverOrigin = [...state.allDriver].filter((driv) =>
          isNaN(driv.Id)
        );
        return {
          ...state,
          allDrivers: driverOrigin,
        };
      }

    case RELOAD:
      return { ...state, allDrivers: state.allDriver };

    case GET_ID:
      let driver = {};
      if (isNaN(action.payload)) {
        driver = state.allDriver.find((char) => char.Id === action.payload);
      } else {
        driver = state.allDriver.find(
          (char) => char.Id === Number(action.payload)
        );
      }
      return { ...state, driverDetail: driver };

    case CLEAR :
      
      return { ...state, driverDetail: action.payload };

    default:
      return { ...state };
  }
};

export default reducer;
