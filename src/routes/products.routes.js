const {Router} = require('express')
const route = Router();
const controller = require("../controllers/products.controller")
const isLogged = require("../middlewares/isLogged")
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
const multer = require("multer");
const { show } = require('../controllers/user.controller');


const upload = multer({
    storage: multer.diskStorage({destination,filename})
})


route.get("/create",[isLogged],controller.create)
route.post("/save",[isLogged], upload.any(), controller.save)

route.get("/productList/:marca?",controller.index)
route.get("/productDetail/:producto", controller.show)
route.get("/productCart",[isLogged],controller.cart)

route.get("/edit/:id",[isLogged],controller.edit)
route.put("/update",[isLogged],upload.any(), controller.update)

route.delete("/borrar", controller.remove)


module.exports = route