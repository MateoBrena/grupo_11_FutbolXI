const {body,check} = require("express-validator");




const nameValidation = 
body("nombre")
.notEmpty().withMessage("Nombre del producto no puede quedar vacío").bail()
.isLength({min:5}).withMessage("Mínimo 5 caraceteres");

const descriptionValidation = 
body("descripcion")
.notEmpty().withMessage("La descripción del producto no puede quedar vacío").bail()
.isLength({min:20}).withMessage("Mínimo 20 caraceteres");

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




module.exports = [nameValidation,descriptionValidation,imageValidation]