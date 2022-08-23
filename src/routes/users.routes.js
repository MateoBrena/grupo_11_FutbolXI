const {Router} = require('express')
const route = Router();
const controller = require("../controllers/user.controller")

const {resolve, extname} = require("path")
const { existsSync,mkdirSync } = require('fs')
const destination = function(req,file,cb){
    let folder = resolve(__dirname,"..","..","public","img","Users")
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

route.get("/login",controller.login)


route.get("/register",controller.register)
route.post("/register/save", upload.any(), controller.save)

route.get("/usersList",controller.index)
route.get("/userProfile/:id", controller.show)

route.get('/userEdit/:id',controller.edit)
route.put("/actualizar",upload.any(),controller.update)

route.delete("/borrar", controller.remove)


module.exports = route