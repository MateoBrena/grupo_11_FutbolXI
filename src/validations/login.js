const {body} = require("express-validator");
const {all} = require("../models/users.model")
const {compareSync} = require("bcrypt")

let email = body("email").notEmpty().withMessage("Email no puede quedar vacío").bail().isEmail().withMessage("Email no válido").custom((value,{req}) => {
let users = all()
let lisOfEmails = users.map(user => user.email)
if(lisOfEmails.indexOf(value) == -1) {
    throw new Error("Usuario no encontrado")
}
return true
})

let clave = body("clave").notEmpty().withMessage("Debes ingresar una contraseña").bail().isLength({min:4}).withMessage("Mínimo 4 caraceteres").custom((value,{req}) => {
    let users = all()
    let result = users.find(user => user.email == req.body.email)
    if(!result) {
        throw new Error("Credenciales inválidas")
    }
    if (!compareSync(value,result.clave)) {
        throw new Error("La contraseña no coincide")
    }
    return true
    })

let validaciones = [email,clave]

module.exports = validaciones;