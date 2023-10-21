import { GET_DRIVERS, GET_NAME , GET_TEAM , ORDER , FILTER} from "./actions";


let initialState = {
    allDrivers: [],
    driverName: [],
    driversTeam:[],
}

const reducer = (state = initialState , action ) => {

    switch (action.type) {
        case GET_DRIVERS :
            return { ...state, allDrivers: action.payload};

        case GET_NAME:
            return {...state, allDrivers:action.payload};

        case GET_TEAM:
            const driverFilter = [...state.allDrivers].filter((driv) => {
                if (typeof driv.teams === 'string') {
                  return driv.teams.includes(action.payload) || driv.teams === action.payload ;
                } else {
                 return false;
                }
              });
                   return {...state, allDrivers: driverFilter}

        case ORDER: 
        const driverOrder = [...state.allDrivers].sort((a,b)=> {
            if(action.payload === "Ascendente") {
                return a.name.forename > b.name.forename ? 1 : -1
            } else {
                return a.name.forename < b.name.forename ? 1 : -1
            }
            });
            return {
                ...state,
                allDrivers: driverOrder
            }  
            
        case FILTER:
            /*const newAllDrivers = [...state.allDrivers].map((driver) => ({
                ...driver,
                dob: driver.dob.split('-')[0],
              }));*/
              
              const filterDate = [...state.allDrivers].sort((a, b) => {
                if (action.payload === "Menor a Mayor") {
                  return Number(a.dobsplit('-')[0]) - Number(b.dob.split('-')[0]);
                } else {
                  return Number(b.dob.split('-')[0]) - Number(a.dob.split('-')[0]);
                }
              });
              
              return {
                ...state,
                allDrivers: filterDate,
              };




            default:
            return {...state}
    }
}

export default reducer;