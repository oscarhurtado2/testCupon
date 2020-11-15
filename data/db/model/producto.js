module.exports = (sequelize, Sequelize) => {
    const Productos = sequelize.define("productos", {

        id: {
            type: Sequelize.DataTypes.INTEGER,
            primaryKey: true,
            field: 'id'
        },
        titulo: {
            type: Sequelize.DataTypes.STRING
        },
        descripcion: {
            type: Sequelize.DataTypes.STRING
        },
        fecha_inicio: {
            type: Sequelize.DataTypes.DATE
        },
        fecha_termino: {
            type: Sequelize.DataTypes.DATE
        },
        precio: {
            type: Sequelize.DataTypes.FLOAT
        },
        imagen: {
            type: Sequelize.DataTypes.STRING
        },
        vendidos: {
            type: Sequelize.DataTypes.INTEGER
        },
        tags: {
            type: Sequelize.DataTypes.STRING
        },

    }, {
        freezeTableName: true,
        timestamps: false,
        underscored: true
    });

    return Productos;
};