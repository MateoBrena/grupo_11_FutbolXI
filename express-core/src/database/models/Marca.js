const model = function(sequelize,DataTypes) {
    let alias = "Marca"
    let cols = {
        nombre: {
           type: DataTypes.STRING,
           allowNull: false
        },
        marcasIMG: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }
    let config = {
        tableName: "marcas",
        timestamps: false
    }
    const Marca = sequelize.define(alias,cols,config)

    Marca.associate = function(models) {
        Marca.hasMany(models.Product,{
            as: "products",
            foreignKey: "marca_id"
        })
    }

    return Marca
}

module.exports = model