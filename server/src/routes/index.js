const { Router } = require("express");

const router = Router();
const getDrivers = require("../Controllers/getDrivers");
const getDriversId = require("../Controllers/getDriverId");
const postDriver = require("../Controllers/postDriver");
const getTeams = require("../Controllers/getTeams");

router.get("/drivers", async (req, res) => {
  try {
    const { name } = req.query;
    const drivers = await getDrivers(name);
    res.status(200).send(drivers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/drivers/:idDriver", async (req, res) => {
  try {
    let { idDriver } = req.params;
    const driver = await getDrivers(idDriver);
    res.status(200).send(driver);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post("/drivers", (req, res) => {
  try {
    const newDriver = req.body;
    const driver = postDriver(newDriver);
    res.status(201).json(driver);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/teams", async (req, res) => {
  try {
    const teams = await getTeams();
    res.status(200).send(teams);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
