const players = [
    {
        "id": 52,
        "firstname": "Novak",
        "lastname": "Djokovic",
        "shortname": "N.DJO",
        "sex": "M",
        "country": {
            // J'ai ajouté la propriété name pour l'importer en front
            "name": "Serbie",
            "picture": "https://data.latelier.co/training/tennis_stats/resources/Serbie.png",
            "code": "SRB"
        },
        "picture": "https://data.latelier.co/training/tennis_stats/resources/Djokovic.png",
        "data": {
            "rank": 2,
            "points": 2542,
            "weight": 80000,
            "height": 188,
            "age": 31,
            "last": [1, 1, 1, 1, 1]
        }
    },
    {
        "id": 95,
        "firstname": "Venus",
        "lastname": "Williams",
        "shortname": "V.WIL",
        "sex": "F",
        "country": {
            // J'ai ajouté la propriété name pour l'importer en front
            "name": "USA",
            "picture": "https://data.latelier.co/training/tennis_stats/resources/USA.png",
            "code": "USA"
        },
        "picture": "https://data.latelier.co/training/tennis_stats/resources/Venus.webp",
        "data": {
            "rank": 52,
            "points": 1105,
            "weight": 74000,
            "height": 185,
            "age": 38,
            "last": [0, 1, 0, 0, 1]
        }
    },
    {
        "id": 65,
        "firstname": "Stan",
        "lastname": "Wawrinka",
        "shortname": "S.WAW",
        "sex": "M",
        "country": {
            // J'ai ajouté la propriété name pour l'importer en front
            "name": "Suisse",
            "picture": "https://data.latelier.co/training/tennis_stats/resources/Suisse.png",
            "code": "SUI"
        },
        "picture": "https://data.latelier.co/training/tennis_stats/resources/Wawrinka.png",
        "data": {
            "rank": 21,
            "points": 1784,
            "weight": 81000,
            "height": 183,
            "age": 33,
            "last": [1, 1, 1, 0, 1]
        }
    },
    {
        "id": 102,
        "firstname": "Serena",
        "lastname": "Williams",
        "shortname": "S.WIL",
        "sex": "F",
        "country": {
            // J'ai ajouté la propriété name pour l'importer en front
            "name": "USA",
            "picture": "https://data.latelier.co/training/tennis_stats/resources/USA.png",
            "code": "USA"
        },
        "picture": "https://data.latelier.co/training/tennis_stats/resources/Serena.png",
        "data": {
            "rank": 10,
            "points": 3521,
            "weight": 72000,
            "height": 175,
            "age": 37,
            "last": [0, 1, 1, 1, 0]
        }
    },
    {
        "id": 17,
        "firstname": "Rafael",
        "lastname": "Nadal",
        "shortname": "R.NAD",
        "sex": "M",
        "country": {
            // J'ai ajouté la propriété name pour l'importer en front
            "name": "Espagne",
            "picture": "https://data.latelier.co/training/tennis_stats/resources/Espagne.png",
            "code": "ESP"
        },
        "picture": "https://data.latelier.co/training/tennis_stats/resources/Nadal.png",
        "data": {
            "rank": 1,
            "points": 1982,
            "weight": 85000,
            "height": 185,
            "age": 33,
            "last": [1, 0, 0, 0, 1]
        }
    }

]

// Les players sont triées du meilleur au moins bon dans cette fonction
exports.getPlayers = (req, res, next) => {
    res.status(200).json(
        players.sort((a, b) => a.data.rank - b.data.rank),
    );
};

//Cette fonction permet de calculer l'indice de masse corporelle de chaque player

function calculateBMI(player) {
    const weight = Math.round(player.data.weight / 1000); // Convertir le poids en kilogrammes et arrondir
    const height = player.data.height / 100;
    const bmi = (weight / (height * height)).toFixed(2); // Formater l'IMC avec deux décimales

    return bmi;
}

const playerBMIs = players.map((player) => {
    const bmi = calculateBMI(player);
    return {
        name: player.firstname,
        IMC: bmi,
    };
});

console.log("Indice de masse corporelle de chaque joueurs : ",playerBMIs);

//Cette fonction permet de calculer la médiane de taille de chaque player
function calculateMedian(arr) {
    const n = arr.length;
    const middle = Math.floor(n / 2);

    if (n % 2 === 0) {
        return (arr[middle - 1] + arr[middle]) / 2;
    } else {
        return arr[middle];
    }
}

const heights = players.reduce((acc, player) => {
    if (player.data.height) {
        acc.push(player.data.height);
    }
    return acc;
}, []);

heights.sort((a, b) => a - b);

const medianHeight = calculateMedian(heights);

console.log("Taille médiane des joueurs :", medianHeight);

//Cette fonction permet de calculer le pays ayant le plus de parties gagnées
function getCountryWithMostWins(players) {
    const countryWins = {};

    players.forEach((player) => {
        const country = player.country.name;
        if (countryWins[country] === undefined) {
            countryWins[country] = 0;
        }
        countryWins[country]++;
    });

    let mostWins = 0;
    let countryWithMostWins = '';

    for (let country in countryWins) {
        if (countryWins[country] > mostWins) {
            mostWins = countryWins[country];
            countryWithMostWins = country;
        }
    }

    return countryWithMostWins;
}
const countryWithMostWins = getCountryWithMostWins(players);
console.log("Pays ayant le plus grand nombre de parties gagnées :", countryWithMostWins);