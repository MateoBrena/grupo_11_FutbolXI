const db = require('../../database/models');
const sequelize = db.sequelize;


const usersController = {
    'list': (req, res) => {
        db.User.findAll()
            .then(users => {
                return res.status(200).json({
                    count: users.length,
                    usuarios: users.map( cadaUsuario => {
                        return {
                            id: cadaUsuario.id,
                            nombre: cadaUsuario.nombre,
                            email: cadaUsuario.email,
                            detail: req.url+"/"+cadaUsuario.id,
                        }
                    })
                })
            })
    },
    'detail': (req, res) => {
        db.User.findByPk(req.params.id)
            .then(user => {
                return res.status(200).json({
                    id: user.id,
                    nombre: user.nombre,
                    apellido: user.apellido,
                    email: user.email,
                    imagen: user.image
                });
            });
    }

}

module.exports = usersController;