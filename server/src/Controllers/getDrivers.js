const axios = require ("axios");
const {Driver, Team} = require("../db")

const getDrivers = async (req, res) => {
try {
const {name} = req.query 
const  {data} = await axios.get("http://localhost:5000/drivers")
const drivers =  data.map((driver) => {
    return {
        Id: driver.id,
        forename: driver.name.forename,
        surname: driver.name.surname,
        description: driver.description,
        image: driver.image.url,
        nationality: driver.nationality,
        dob: driver.dob,
        teams: driver.teams,
      };
     })
if(data){
    if(data && name){
    const driverApi = drivers.filter(element => element.forename.toLowerCase().includes(name.toLowerCase()))
    const driverDb = await Driver.findAll({where: {forename: name}})
    const driverName = [...driverApi, ...driverDb]
    
    return res.status(200).send(driverName)
}
const driv = await Driver.findAll({
    include: {
      model: Team,
      attributes: ["team"],
      through: {
        attributes: [],
      },
    },
  }
)
console.log(driv)
const driDb = driv.map(driv => {
  let team = driv.Teams.map(obj => obj.team)
  let teams = team.join(", ")
  return{
    Id: driv.Id,
    forename: driv.forename,
    surname: driv.surname,
    description: driv.description,
    image: driv.image,
    nationality: driv.nationality,
    dob: driv.dob,
    teams,
  }
} )

const allDrivers = [...driDb, ...drivers]
  return res.status(200).send(allDrivers)
}
res.status(200).send("error")
} catch (error) {
    res.status(500).json({error: error.message})
}
}
 
module.exports = getDrivers;