const express = require("express");
const { dummyCtrl } = require("../../controllers");

const router = express.Router();

router.post("/", dummyCtrl.getSomething);
/*router.get("/login", authCtrl.login);
router.post("/token", authCtrl.renewToken);
router.post("/verify", authCtrl.renewToken);*/

module.exports = router;
