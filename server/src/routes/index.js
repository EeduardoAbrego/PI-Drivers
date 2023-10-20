const { Router } = require("express");

const router = Router();
const getDrivers = require("../Controllers/getDrivers");
const getDriversId = require("../Controllers/getDriverId");
const postDriver = require("../Controllers/postDriver");
const getTeams = require("../Controllers/getTeams")

router.get("/drivers", (req, res) => {
   getDrivers(req, res);
});
 
router.get("/drivers/:idDriver", (req, res) => {
    getDriversId(req, res);
 });

 router.post("/drivers",(req, res) => {
  postDriver(req, res);
});

router.get("/teams",(req, res) => {
   getTeams(req, res);
 });
 

module.exports = router;
