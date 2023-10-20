const axios = require("axios");
const {Team} = require("../db")


const getTeams = async (req, res) => {

    try {

      const  {data} = await axios.get("http://localhost:5000/drivers")
      const teams = data.map((element) => element.teams);
     
      let team = [];

      for (let i = 0; i < teams.length; i++) {
        if (teams[i]) {
          const teamSplit = teams[i].split(",");
          team.push(...teamSplit);
        }
      }
      
      let teamsFilt = []
      
      for (let i = 0; i < team.length; i++) {
        const element = team[i].trim() ; 
        if(!teamsFilt.includes(element)) teamsFilt.push( element);
      }
      
      const dbTeam = teamsFilt.map((team) => {
        return {team: team}
      })
    
       await Team.bulkCreate(dbTeam)

     const teamsBd = await Team.findAll()

      return res.status(200).send(teamsBd)
     
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

module.exports = getTeams;