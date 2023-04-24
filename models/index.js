const PlayersModel = require("./players");

const {Sequelize, Op} = require("sequelize");

const models = {
    Player: PlayersModel.init(Sequelize),

}

Object.values(models)

models.Sequelize = Sequelize;
models.Op = Op;
module.exports = models;
