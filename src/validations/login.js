const {body} = require("express-validator");
const {compareSync} = require("bcrypt")
const {User} = require("../database/models/index");
/*let users = all()let lisOfEmails = users.map(user => user.email)
if(lisOfEmails.indexOf(value) == -1) {
    throw new Error("Usuario no encontrado")
}*/
const emailValidation = 

body("email")
.notEmpty().withMessage("Email no puede quedar vacío").bail()
.isEmail().withMessage("Email no válido")
.custom((value,{req}) => {
    let user = User.findOne({where:{email: req.body.email}}).then(userFound=>
        {if(!userFound){
        throw new Error("Usuario no encontrado")
        }
        return true
    })
    return user
})

 /*let users = all() let result = users.find(user => user.email == req.body.email)
    if(!result) {
        throw new Error("Credenciales inválidas")
    }
    if (!compareSync(value,result.clave)) {
        throw new Error("La contraseña no coincide")
    }
    return true
    })*/

const passwordValidation = 
   body("clave")
   .notEmpty().withMessage("Debes ingresar una contraseña").bail()
   .isLength({min:4}).withMessage("Mínimo 4 caraceteres")
   .custom((value,{req}) => {
     let password = User.findOne({where:{email : req.body.email}})
    .then(userFound => {
        if(!userFound){
            throw new Error("Credenciales inválidas")

        }
        console.log(userFound.clave);
        if (!compareSync(value,userFound.clave)) {
            throw new Error("La contraseña no coincide")
        }
        return true
    })
  
    return password
})

let validations = [emailValidation,passwordValidation]

module.exports = validations;