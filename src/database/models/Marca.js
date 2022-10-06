const model = function(sequelize,DataTypes) {
    let alias = "marca"
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
        Marca.hasMany(models.product,{
            as: "product",
            foreignKey: "marca_id"
        })
    }

    return Marca
}

module.exports = model