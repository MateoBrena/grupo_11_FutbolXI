const {Router} = require('express')
const route = Router();
const controller = require("../controllers/user.controller")
const isLogged = require("../middlewares/isLogged")
const {resolve, extname} = require("path")
const { existsSync,mkdirSync } = require('fs')
const destination = function(req,file,cb){
    let folder = resolve(__dirname,"..","..","public","img","Usuarios")
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
const validaciones = require("../validations/register")
const validatorLogin = require("../validations/login")


const upload = multer({
    storage: multer.diskStorage({destination,filename})
})

route.get("/login",controller.login)
route.post("/access", validatorLogin ,controller.access)

route.get("/register",controller.register)
route.post("/register/save", upload.any(), validaciones,controller.save)

route.get("/usersList",[isLogged],controller.index)
route.get("/userProfile/:id",[isLogged],controller.show)

route.get('/userEdit/:id',controller.edit)
route.put("/actualizar",upload.any(),controller.update)

route.delete("/borraruser", controller.remove)
route.get('/logout', controller.logout)


module.exports = route