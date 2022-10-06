const model = function(sequelize,DataTypes) {
    let alias = "user"
    let cols = {
        nombre: {
           type: DataTypes.STRING,
           allowNull: false
        },
        apellido: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        clave: {
            type: DataTypes.STRING,
            allowNull: false
        },
        admin: {
            type: DataTypes.BIGINT(10),
            allowNull: false
        },
        image: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }
    let config = {
        tableName: "users",
        timestamps: false
    }
    const User = sequelize.define(alias,cols,config)
    return User
}

module.exports = model