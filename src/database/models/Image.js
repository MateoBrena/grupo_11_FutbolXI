const model = function(sequelize,DataTypes) {
    let alias = "image"
    let cols = {
        imagen: {
           type: DataTypes.STRING,
           allowNull: false
        },
        product_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }
    let config = {
        tableName: "images",
        timestamps: false
    }
    const Image = sequelize.define(alias,cols,config)

    Image.associate = function(models) {
        Image.belongsToMany(models.product,{
            as: "product",
            otherKey: "product_id"
        })
    }

    return Image
}

module.exports = model