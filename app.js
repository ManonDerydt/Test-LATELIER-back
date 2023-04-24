const express = require('express');
const cors =require('cors')
require("./server.js");
const PlayersRoutes = require("./modules/players/players.routes");
const port = 1995;

const app = express();

// Lancement du serveur
app.listen(port, () => {
    console.log(`API is running on ${port}`);
});

app.get("/", (req, res, next) => res.send("OK"));

app.use(cors())

app.use(PlayersRoutes);

(async() => {
    try {
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
})();

module.exports = app;
