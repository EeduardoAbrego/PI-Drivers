const axios = require ("axios");
const {Driver} = require("../db")

const getDrivers = async (req, res) => {
try {
const {name} = req.query 
const  {data} = await axios.get("http://localhost:5000/drivers")

if(data){
    if(data && name){
    const driverApi = data.filter(element => element.name.forename.toLowerCase().includes(name.toLowerCase()))
    const driverDb = await Driver.findAll({where: {forename: name}})
    const driverName = [...driverApi, ...driverDb]
    
    return res.status(200).send(driverName)
}
const driv = await Driver.findAll()
const drivers =  data.map((element) => {
        const {id, name , image, nationality,description, dob, teams } = element
         const newelement =  {id, name, image, nationality, description, dob, teams}
         return newelement
     })
     const allDrivers = [...driv, ...drivers]
  return res.status(200).send(allDrivers)
}
res.status(200).send("error")
} catch (error) {
    res.status(500).json({error: error.message})
}
}
 
module.exports = getDrivers;