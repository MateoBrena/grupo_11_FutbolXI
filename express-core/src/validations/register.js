const {body,check} = require("express-validator");
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

let clave = body("clave")
.notEmpty().withMessage("Debes ingresar una contraseña").bail()
.isLength({min:8}).withMessage("Mínimo 8 caraceteres")
.matches(validRegex).withMessage("La Contraseña debe tener minimo un caracter especial, una mayuscula y un número")

let confirmarClave = body("confirmarClave").notEmpty().withMessage("Debes confirmar la contraseña").bail().isLength({min:8}).withMessage("Mínimo 4 caraceteres").custom((value,{req}) => {
    if (value !== req.body.clave) {
      throw new Error('La confirmación no coincide con la contraseña');
    }
    return true;
})

const imageValidation =
check("imagen")
.custom((value, {req}) => {
    let files = req.files.map(file=> file.mimetype)
    console.log(files);
   let validations= files.forEach(file => {
        console.log(file);
        if (file == 'image/png' || file == "image/jpg" || file == "image/gif" || file == "image/jpeg"){
            return true;
        } 
        throw new Error ('El archivo no es PNG, JPG, JPEG O GIF')
    })
    
    return true
})

let validaciones = [email,clave,confirmarClave,imageValidation]

module.exports = validaciones;