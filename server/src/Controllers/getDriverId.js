const axios = require ("axios");
const {Driver} = require("../db")
const getDriversId = async (req, res) => {


    try {
let { idDriver } = req.params
 
if(isNaN(idDriver)) {
    const driver = await Driver.findByPk(idDriver);
    return res.status(200).send(driver)
}
const  {data} = await axios.get(`http://localhost:5000/drivers/${idDriver}`)
const {id, name , image, nationality,description, teams} = data
const newelement =  {id, name, image, nationality, description,teams }
return res.status(200).send(newelement)
}
 catch (error) {
    res.status(500).json({error: error.message})
}
}
 
module.exports = getDriversId;