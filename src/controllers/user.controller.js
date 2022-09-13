const {all,one, generate, write} = require("../models/users.model")
const {unlinkSync} = require("fs");
const {resolve} = require('path');
const {hashSync} = require("bcrypt");
const {validationResult} = require("express-validator");

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
            return res.render("../views/404Error")
    },
    edit: (req,res) => {
        let user = one(req.params.id)
        return res.render("../views/Users/userEdit", {user})  
    },
    save: (req,res) => {
        // control de las validaciones 
        const result = validationResult(req)
        if(!result.isEmpty()) {
            let errores = result.mapped();
            return res.render("../views/Users/register",{ 
                errores: errores,
                data: req.body
            })
        }
        req.body.imagen = req.files && req.files.length > 0 ? req.files[0].filename : "default.png";
        req.body.clave = hashSync(req.body.clave,10)
        let nuevo = generate(req.body)
        let todos = all()
        todos.push(nuevo)
        write(todos)
        return res.redirect("/usersList")
    },
    access : (req,res) => {
        const result = validationResult(req)
        if(!result.isEmpty()) {
            let errores = result.mapped();
            return res.render("../views/Users/login",{
                errores: errores,
                data: req.body
            })
        }
        if(req.body.check != undefined){
            res.cookie("user", req.body.email, {maxAge: 1000 * 60 * 3 })
            
        }
        
        let todos = all()
        req.session.user = todos.find(user => user.email == req.body.email)
       
        return res.redirect("/")

    },
    logout : (req,res) => {
        delete req.session.user
        res.cookie("user", null, {maxAge: -1})
        res.redirect("/")
    },
    update: (req,res) => {
        let todos = all();
        let actualizados = todos.map(elemento => {
            if(elemento.id == req.body.id){
                elemento.nombre = req.body.nombre;
                elemento.apellido = req.body.apellido
                elemento.email = req.body.email
                elemento.categoria = req.body.email.includes("@futbolxi") ? "Administrador" : "Cliente";
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
            let file = resolve(__dirname,"..","..","public","img","Usuarios", user.imagen)
            unlinkSync(file)
        }
        let todos = all();
        let noEliminados = todos.filter(elemento => elemento.id != req.body.id);
        write(noEliminados)
        return res.redirect("/usersList")
    }
}

module.exports = userController