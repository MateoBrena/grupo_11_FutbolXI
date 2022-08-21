const {Router} = require('express')
const route = Router();
const controller = require("../controllers/products.controller")

const {resolve, extname} = require("path")
const { existsSync,mkdirSync } = require('fs')
const destination = function(req,file,cb){
    let folder = resolve(__dirname,"..","..","public","img")
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
route.post("/save", controller.save)

route.get("/productList",controller.index)
route.get("/productDetail/:id?",controller.detail)
route.get("/productCart",controller.cart)

route.get("/edits",controller.edits)
//route.put("/update", controller.update)

route.delete("/delete/:id", controller.remove)


module.exports = route