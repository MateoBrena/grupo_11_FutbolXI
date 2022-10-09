const {all,one, generate, write} = require("../models/users.model")
const {unlinkSync} = require("fs");
const {resolve} = require('path');
const {hashSync} = require("bcrypt");
const {validationResult} = require("express-validator");
const {User,Image} = require("../database/models/index");
const { getMaxListeners } = require("process");
const userController = {
  /*  index: (req,res) => {
        let usuarios = all()
        return res.render('../views/Users/usersList',{usuarios})
    },*/
    index: (req,res)=>{
        User.findAll()
        .then(usuarios=> res.render("../views/Users/usersList",{usuarios}))
        .catch(error => res.status(404).json(error))
    },
    register: (req,res) => {
        return res.render("../views/Users/register")
        
    },
    login: (req,res) => {
        return res.render("../views/Users/login")
    },
   /* show: (req,res) =>{
         let user = one(req.params.id)
         if(user){
             return res.render('../views/Users/userProfile',{user})     
         }
            return res.render("../views/404Error")
    },*/
    show: (req,res) =>{

        User.findByPk(req.params.id)
        .then(user=> {if(user){
            return res.render('../views/Users/userProfile',{user})  
            
        }return res.render("../views/404Error")})
    },
    /*edit: (req,res) => {
        let user = one(req.params.id)
        return res.render("../views/Users/userEdit", {user})  
    }*/
    edit: (req,res) => {
        User.findByPk(req.params.id)
        .then(user=> res.render("../views/Users/userEdit", {user}) ) 
        .catch(error => res.status(404).json(error))
    }
    ,
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
        let nuevo = req.body;
        nuevo.imagen = req.files && req.files.length > 0 ? req.files[0].filename : "default.png";
        nuevo.clave = hashSync(req.body.clave,10)
        
        User.create({

            nombre: nuevo.nombre,
            apellido: nuevo.apellido,
            email: nuevo.email,
            clave:  nuevo.clave,
            admin: nuevo.email.includes("@futbolxi") ? 1: 0,
            image: "default.jpg"
            
            
        });
       
        return res.redirect("/usersList")
    },
    /*access : (req,res) => {
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
        
        req.session.user = user.findOne({where:{
             email: req.body.email
         }})
            .then(user => user,
                res.redirect("/"))
        let todos = all()
        req.session.user = todos.find(user => user.email == req.body.email)
       
        return res.redirect("/")

    },*/
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
        
        User.findAll()
        .then(user=> {
            req.session.user = user.find(user => user.email == req.body.email) ;
            return res.redirect("/")})
        .catch(error => res.status(404).json(error))

        

    },
    logout : (req,res) => {
        delete req.session.user
        res.cookie("user", null, {maxAge: -1})
        res.redirect("/")
    },
    update: (req,res) => {
        /*let todos = all();
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
        write(actualizados)*/
        let nuevo = req.body;

        User.update({
            nombre: nuevo.nombre,
            apellido: nuevo.apellido,
            email: nuevo.email,
            clave:  nuevo.clave,
            admin: nuevo.email.includes("@futbolxi") ? 1: 0,
            image: "default.jpg"
        },{
            where:{id: req.body.id}
        })
        return res.redirect("/usersList")
    },
    remove : (req,res) => {
        /*let user = one(req.body.id)
        if (user.imagen != "default.png") {
            let file = resolve(__dirname,"..","..","public","img","Usuarios", user.imagen)
            unlinkSync(file)
        }
        let todos = all();
        let noEliminados = todos.filter(elemento => elemento.id != req.body.id);
        write(noEliminados)*/
        User.destroy({
            where:{
                id: req.body.id
            }
        })
        return res.redirect("/usersList")
    }
}

module.exports = userController