const axios = require("axios");
const { Driver, Team } = require("../db");
const { Error } = require("sequelize");

const getDrivers = async (name) => {
  try {
    const { data } = await axios.get("http://localhost:5000/drivers");
    const imageUrl =
      "https://images.unsplash.com/photo-1552255472-3330e5928013?auto=format&fit=crop&q=80&w=1964&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const drivers = data.map((driver) => {
      return {
        Id: driver.id,
        forename: driver.name.forename,
        surname: driver.name.surname,
        description: driver.description,
        image: driver.image.url ? driver.image.url : imageUrl,
        nationality: driver.nationality,
        dob: driver.dob,
        teams: driver.teams,
      };
    });

    if (data && name) {
      const driverApi = drivers.filter((element) =>
        element.forename.toLowerCase().includes(name.toLowerCase())
      );
      const driverDb = await Driver.findAll({ where: { forename: name } });
      const driverName = [...driverApi, ...driverDb];

      return driverName;
    }
    const driv = await Driver.findAll({
      include: {
        model: Team,
        attributes: ["team"],
        through: {
          attributes: [],
        },
      },
    });
    const driDb = driv.map((driv) => {
      let team = driv.Teams.map((obj) => obj.team);
      let teams = team.join(", ");
      return {
        Id: driv.Id,
        forename: driv.forename,
        surname: driv.surname,
        description: driv.description,
        image: driv.image ? driv.image : imageUrl,
        nationality: driv.nationality,
        dob: driv.dob,
        teams,
      };
    });

    const allDrivers = [...driDb, ...drivers];
    return allDrivers;
  } catch (error) {
    throw new Error(error) ;
  }
};

module.exports = getDrivers;
