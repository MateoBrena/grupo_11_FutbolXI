const db = require('../../database/models');
const sequelize = db.sequelize;


const productsController = {
    'list': (req, res) => {
        db.Product.findAll()
            .then(products => {
                return res.status(200).json({
                    count: products.length,
                    productos: products.map( cadaProducto => {
                        return {
                            id: cadaProducto.id,
                            name: cadaProducto.nombre,
                            description: cadaProducto.descripcion,
                            detail: req.url+"/detail/"+cadaProducto.id
                        }
                    })
                })
            })
    },
    'detail': (req, res) => {
        db.Product.findByPk(req.params.id)
            .then(product => {
                return res.status(200).json({
                    id: product.id,
                    nombre: product.nombre,
                    categoria: product.categoria,
                    descripcion: product.descripcion,
                    precio: product.precio,
                    marca: product.marca_id,
                    oferta: product.oferta,
                    imagen: product.imagen
                });
            });
    }

}

module.exports = productsController;