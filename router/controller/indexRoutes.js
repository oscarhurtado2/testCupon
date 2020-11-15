const express = require('express');
const producto = require('../../data/db/model/producto');
const router = express.Router();
const db = require('./../../data/db/coneccion');
module.exports = (app) => {

    router.post('/search', async(req, res) => {

        const Op = db.Sequelize.Op;

        search = req.body.keyword;

        let condition = search ? {
            titulo: {
                [Op.like]: `%${search}%`
            }
        } : null;
        const pr = await db.producto.findAll({ where: condition });
        if (condition != null) {
            estadisticas(pr);
        }

        res.json(pr);
    });

    const estadisticas = (data) => {

        data.map(async d => {

            let esta = await db.estadisticas.findOne({ where: { id_producto: d.id } });

            if (esta) {
                await esta.update({
                    cantidad_busqueda: db.sequelize.literal('cantidad_busqueda + 1')

                });


            } else {
                await db.estadisticas.create({
                    id_producto: d.id,
                    cantidad_busqueda: 1
                });
            }
        })

    }

    router.get('/estadistica', async(req, res) => {

        const estadistica = await db.estadisticas.findAll({
            limit: 20,
            include: [db.producto],
            order: [
                ['cantidad_busqueda', 'DESC']
            ]
        });

        res.json(estadistica);
    })
    app.use('/back', router);
}