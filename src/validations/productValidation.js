const {body} = require("express-validator");
const { is } = require("express/lib/request");
const {Product} = require("../database/models/index");

const nameValidation = 
body("nombre")
.notEmpty().withMessage("Nombre del producto no puede quedar vacío").bail()
.isLength({min:5}).withMessage("Mínimo 5 caraceteres");

const descriptionValidation = 
body("descripcion")
.notEmpty().withMessage("La descripción del producto no puede quedar vacío").bail()
.isLength({min:20}).withMessage("Mínimo 20 caraceteres");

const imageValidation =
body("imagen")
.isIn([ "PNG", "JPEG", "GIF" ]).withMessage("El archivo debe ser JPEG, PNG O GIF")


module.exports = [nameValidation,descriptionValidation,imageValidation]