const {body} = require("express-validator");

let email = body("email").notEmpty().withMessage("Email no puede quedar vacío").bail().isEmail().withMessage("Email no válido")
let clave = body("clave").notEmpty().withMessage("Debes ingresar una contraseña").bail().isLength({min:4}).withMessage("Mínimo 4 caraceteres")
let confirmarClave = body("confirmarClave").notEmpty().withMessage("Debes confirmar la contraseña").bail().isLength({min:4}).withMessage("Mínimo 4 caraceteres").custom((value,{req}) => {
    if (value !== req.body.clave) {
      throw new Error('La confirmación no coincide con la contraseña');
    }
    return true;
  })

let validaciones = [email,clave,confirmarClave]

module.exports = validaciones;