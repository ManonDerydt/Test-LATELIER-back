const express = require('express');
const cors = require('cors');
const path = require('path');
const PlayersRoutes = require("./modules/players/players.routes");
const port = 1995;

const app = express();

app.use(PlayersRoutes);

// Construction du chemin absolu du dossier "front-end"
const distFolder = path.join(__dirname, 'dist');

// Lancement du serveur
app.listen(port, () => {
    console.log(`API is running on ${port}`);
});



app.use(express.static(distFolder));
app.get('*', (req, res) => {
    res.sendFile(path.join(distFolder, 'index.html'));
});

app.use(cors());

app.use(express.static(distFolder));



(async() => {
    try {
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
})();

module.exports = app;