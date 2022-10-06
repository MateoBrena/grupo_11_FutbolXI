const model = function(sequelize,DataTypes) {
    let alias = "product"
    let cols = {
        nombre: {
           type: DataTypes.STRING,
           allowNull: false
        },
        categoria: {
            type: DataTypes.STRING,
            allowNull: false
        },
        descripcion: {
            type: DataTypes.STRING,
            allowNull: false
        },
        precio: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        marca_id: {
            type: DataTypes.BIGINT(10),
            allowNull: false
        },
        oferta: {
            type: DataTypes.BIGINT(10),
            allowNull: false
        }
    }
    let config = {
        tableName: "products",
        timestamps: false
    }
    const Product = sequelize.define(alias,cols,config)

    Product.associate = function(models) {
        Product.belongsTo(models.marca,{
            as: "marca",
            foreignKey: "marca_id"
        })
        Product.hasMany(models.image,{
            as: "image",
            foreignKey: "product_id"
        })
    }
    return Product
}

module.exports = model