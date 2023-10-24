import { GET_DRIVERS, GET_NAME , GET_TEAM , ORDER , FILTER, GET_ALL_TEAMS, ORIGIN, RELOAD} from "./actions";


let initialState = {
    allDrivers: [],
    allDriver: [],
    driversTeam:[],
    allTeams:[]
}

const reducer = (state = initialState , action ) => {

    switch (action.type) {
        case GET_DRIVERS :
            return { ...state, 
              allDrivers: action.payload,
              allDriver: action.payload
            };

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
                return a.forename > b.forename ? 1 : -1
            } else {
                return a.forename < b.forename ? 1 : -1
            }
            });
            return {
                ...state,
                allDrivers: driverOrder
            }  
            
        case FILTER:
              const filterDate = [...state.allDrivers].sort((a, b) => {
                if (action.payload === "Menor a Mayor") {
                  return Number(a.dob.split('-')[0]) - Number(b.dob.split('-')[0]);
                } else {
                  return Number(b.dob.split('-')[0]) - Number(a.dob.split('-')[0]);
                }
              });
              
              return {
                ...state,
                allDrivers: filterDate,
              };

            case GET_ALL_TEAMS :
              return  {
                ...state,
                allTeams: action.payload,
              };

              case ORIGIN :
                if(action.payload === "API" ) {
                  const driverOrigin = [...state.allDriver].filter((driv) => typeof(driv.Id) === "number" )
                  return {
                    ...state,
                    allDrivers: driverOrigin,
                  };
                } else {
                  const driverOrigin = [...state.allDriver].filter((driv) => isNaN(driv.Id) )
                  return {
                    ...state,
                    allDrivers: driverOrigin,
                  };
                }

              case RELOAD:
                return {...state, allDrivers: state.allDriver};


            default:
            return {...state}
    }
}

export default reducer;