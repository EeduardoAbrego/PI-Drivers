const {Driver , Team } = require("../db")


const postDriver = async (req, res ) => {
try {
    console.log(req.body)
    const { forename, surname, image, nationality, description, dob, teams } = req.body

    const teamsDriv = Array.isArray(teams) ? teams : [teams];

    
    const teamsAll = await Team.findAll({ where: { team: teamsDriv } });

    const newDriver = await Driver.create({ forename, surname, image, nationality, description, dob}) 
   
    
    await newDriver.addTeam(teamsAll);  

    
    
    newDriver.teams = teamsAll.map((team) => team.team);
    

 

    
    return res.status(201).json(newDriver);

} catch (error) {
    return res.status(500).json({error: error.message}); 
}
};

module.exports = postDriver