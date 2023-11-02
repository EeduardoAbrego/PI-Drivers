const axios = require("axios");
const { Driver } = require("../db");
const getDriversId = async (idDriver) => {
  try {
    if (isNaN(idDriver)) {
      const driver = await Driver.findByPk(idDriver);
      return driver
    }
    const { data } = await axios.get(
      `http://localhost:5000/drivers/${idDriver}`
    );
    const { id, name, image, nationality, description, teams } = data;
    const driver = { id, name, image, nationality, description, teams };
    return driver;
    
  } catch (error) {
    return error;
  }
};

module.exports = getDriversId;
