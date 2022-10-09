const {body} = require("express-validator");
const {all} = require("../models/users.model")
const {compareSync} = require("bcrypt")
const {User} = require("../database/models/index");

let email = 
body("email").notEmpty().withMessage("Email no puede quedar vacío").bail().isEmail().withMessage("Email no válido").custom((value,{req}) => {
/*let users = all()let lisOfEmails = users.map(user => user.email)
if(lisOfEmails.indexOf(value) == -1) {
    throw new Error("Usuario no encontrado")
}*/
User.findAll()
.then(users=> {
    let user = users
    let lisOfEmails = user.map(user => user.email)
    if(lisOfEmails.indexOf(value) == -1) {
        throw new Error("Usuario no encontrado")
    }
    return true
})
.catch(error => console.log(error))
})


let clave = 
   body("clave").notEmpty().withMessage("Debes ingresar una contraseña").bail().isLength({min:4}).withMessage("Mínimo 4 caraceteres").custom((value,{req}) => {
    /*let users = all() let result = users.find(user => user.email == req.body.email)
    if(!result) {
        throw new Error("Credenciales inválidas")
    }
    if (!compareSync(value,result.clave)) {
        throw new Error("La contraseña no coincide")
    }
    return true
    })*/
    User.findAll({where:{email : req.body.email}})
    .then(result =>
        
        {
        let user = result.find(user => user.email == req.body.email)
        if(!user) {
        throw new Error("Credenciales inválidas")
    }
    
    if (!compareSync(value,user.clave)) {
        throw new Error("La contraseña no coincide")
    }
    return true
    })
    .catch(error => console.log(error))
})

let validaciones = [email,clave]

module.exports = validaciones;