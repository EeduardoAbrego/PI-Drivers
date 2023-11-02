const { Driver, Team } = require("../db");

const postDriver = async (newDriver) => {
  try {
    const { forename, surname, image, nationality, description, dob, teams } =
      newDriver;

    const teamsDriv = Array.isArray(teams) ? teams : [teams];

    const teamsAll = await Team.findAll({ where: { team: teamsDriv } });

    const newDriv = await Driver.create({
      forename,
      surname,
      image,
      nationality,
      description,
      dob,
    });

    await newDriv.addTeam(teamsAll);

    newDriv.teams = teamsAll.map((team) => team.team);

    return newDriv;
  } catch (error) {
    return error;
  }
};

module.exports = postDriver;
