const Productos = require("./producto");

module.exports = (sequelize, Sequelize) => {
    const Estadisticas = sequelize.define("estadisticas", {

        id: {
            type: Sequelize.DataTypes.INTEGER,
            primaryKey: true,
            field: 'id'
        },
        id_producto: {
            type: Sequelize.DataTypes.INTEGER,
        },
        cantidad_busqueda: {
            type: Sequelize.DataTypes.INTEGER,
        }

    }, {
        freezeTableName: true,
        timestamps: false,
        underscored: true
    });

    return Estadisticas;
};