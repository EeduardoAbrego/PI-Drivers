const {Driver , Team } = require("../db")


const postDriver = async (req, res ) => {
try {
    console.log(req.body)
    const { forename, surname, image, nationality, description, dob, teams } = req.body

    const newDriver = await Driver.create({ forename, surname, image, nationality, description, dob}) 

    await newDriver.addTeam(teams);  
    
    return res.status(201).json(newDriver);

} catch (error) {
    return res.status(500).json({error: error.message}); 
}
};

module.exports = postDriver