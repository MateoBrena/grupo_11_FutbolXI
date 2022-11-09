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
            }).catch(error => res.send(error))
    },
    'detail': (req, res) => {
        db.Product.findByPk(req.params.id)
            .then(product => {
                let marca = "";
                switch (product.marca_id) {
                    case 1 : 
                        marca = "Adidas"
                        break;
                    case 2 : 
                        marca = "Nike"
                        break;
                    case 3 : 
                        marca = "Puma"
                        break;
                    default:
                        break;
                }
                let oferta = ""
                if(product.oferta == 1) {
                    oferta = "Si"
                } else {
                    oferta = "No"
                }
                return res.status(200).json({
                    id: product.id,
                    nombre: product.nombre,
                    categoria: product.categoria,
                    descripcion: product.descripcion,
                    precio: product.precio,
                    marca: marca,
                    oferta: oferta,
                    imagen: "/img/Botines/"+product.imagen
                });
            }).catch(error => res.send(error))
    }

}

module.exports = productsController;