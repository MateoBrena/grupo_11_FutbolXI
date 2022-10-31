const {body, validationResult} = require("express-validator");
const {User} = require("../database/models/index");

let validRegex = new RegExp("(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})");

let email = body("email").notEmpty().withMessage("Email no puede quedar vacío").bail().isEmail().withMessage("Email no válido").custom((value,{req}) => {
  let user = User.findOne({where:{email: req.body.email}}).then(userFound=>
      {if(!userFound){
        return true
      }
      throw new Error("Email ya registrado")
      
  })
  return user
})

let clave = body("clave").notEmpty().withMessage("Debes ingresar una contraseña").bail()
.isLength({min:8}).withMessage("Mínimo 8 caraceteres")
.matches(validRegex).withMessage("La Contraseña debe tener minimo un caracter especial, una mayúscula y un número")




let confirmarClave = body("confirmarClave").notEmpty().withMessage("Debes confirmar la contraseña").bail().isLength({min:8}).withMessage("Mínimo 4 caraceteres").custom((value,{req}) => {
    if (value !== req.body.clave) {
      throw new Error('La confirmación no coincide con la contraseña');
    }
    return true;
  })



let validaciones = [email,clave,confirmarClave]

module.exports = validaciones;