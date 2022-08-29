const {Router} = require('express')
const route = Router();
const controller = require("../controllers/products.controller")

const {resolve, extname} = require("path")
const { existsSync,mkdirSync } = require('fs')
const destination = function(req,file,cb){
    let folder = resolve(__dirname,"..","..","public","img","Botines")
    if(!existsSync(folder)){
        mkdirSync(folder)
    }
return cb(null,folder)
}

const filename = function(req,file,cb){
    let unique = Date.now() + "-" + Math.round(Math.random() * 1E9)
    let name = file.fieldname + "-" + unique + extname(file.originalname);
    return cb(null, name)
}
const multer = require("multer")


const upload = multer({
    storage: multer.diskStorage({destination,filename})
})


route.get("/create",controller.create)
route.post("/save", upload.any(), controller.save)

route.get("/productList",controller.index)
route.get("/productDetail/:producto", controller.show)
route.get("/productCart",controller.cart)

route.get("/edit/:id",controller.edit)
route.put("/update",upload.any(), controller.update)

route.delete("/borrar", controller.remove)


module.exports = route