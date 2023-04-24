const players = require("./players.middlewares");
const debug = require("debug");
const { Router } = require("express");

const router = Router();

module.exports = router;

router.route("/players").get(players.getPlayers);
// router.route("/player/:id").get(players.getPlayerById);


