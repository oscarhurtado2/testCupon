const { Sequelize } = require('sequelize');
const config = require("config");

var sequelize = new Sequelize(config.database.db, config.database.user, config.database.pass, {
    host: config.database.host,
    port: config.database.port,
    dialect: 'mysql'
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.producto = require("./model/producto.js")(sequelize, Sequelize);
db.estadisticas = require("./model/estadisticas.js")(sequelize, Sequelize);

db.estadisticas.belongsTo(db.producto, {
    foreignKey: 'id_producto',
    target: 'id'
});

module.exports = db;