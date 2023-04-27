const players = require("./players.middlewares");
const debug = require("debug");
const { Router } = require("express");

const router = Router();

module.exports = router;

console.log("test")

router.route("/players").get(players.getPlayers);


