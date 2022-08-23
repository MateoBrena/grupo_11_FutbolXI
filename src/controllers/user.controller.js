const {all,one, generate, write} = require("../models/users.model")
const {unlinkSync} = require("fs")
const {resolve} = require('path');

const userController = {

    index: (req,res) => {
        let usuarios = all()
        return res.render('../views/Users/usersList',{usuarios})
    },
      
    register: (req,res) => {
        return res.render("../views/Users/register")
        
    },
    
    login: (req,res) => {
        return res.render("../views/Users/login")
        
    },
    show: (req,res) =>{
         let user = one(req.params.id)
         if(user){
             return res.render('../views/Users/userProfile',{user})     
         }
            return res.render('../views/Users/userProfile',{user:null})
    },
    edit: (req,res) => {
        let user = one(req.params.id)
        return res.render("../views/Users/userEdit", {user})  
    },

    save: (req,res) => {
        req.body.imagen = req.files && req.files.length > 0 ? req.files[0].filename : "default.png";
        let nuevo = generate(req.body)
        let todos = all()
        todos.push(nuevo)
        write(todos)
        return res.redirect("/usersList")
    },
    update: (req,res) => {
        let todos = all();
        let actualizados = todos.map(elemento => {
            if(elemento.id == req.body.id){
                elemento.nombre = req.body.nombre;
                elemento.apellido = req.body.apellido
                elemento.email = req.body.email
                elemento.categoria = req.body.categoria;
                elemento.imagen = req.files && req.files.length > 0 ? req.files[0].filename : elemento.imagen;
            }
            return elemento
        })
        write(actualizados)
        return res.redirect("/usersList")
    },
    remove : (req,res) => {
        let user = one(req.body.id)
        if (user.imagen != "default.png") {
            let file = resolve(__dirname,"..","..","public","Usuarios", user.imagen)
            unlinkSync(file)
        }
        let todos = all();
        let noEliminados = todos.filter(elemento => elemento.id != req.body.id);
        write(noEliminados)
        return res.redirect("/usersList")
    }
}

module.exports = userController