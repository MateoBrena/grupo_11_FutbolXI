const {all,one, generate, write} = require("../models/users.model")
const {unlinkSync} = require("fs");
const {resolve} = require('path');
const {hashSync} = require("bcrypt");
const {validationResult} = require("express-validator");
const {User,Image} = require("../database/models/index");
const { getMaxListeners } = require("process");
const { json } = require("sequelize");
const { stringify } = require("querystring");
const userController = {
  /*  index: (req,res) => {
        let usuarios = all()
        return res.render('../views/Users/usersList',{usuarios})
    },
      show: (req,res) =>{
         let user = one(req.params.id)
         if(user){
             return res.render('../views/Users/userProfile',{user})     
         }
            return res.render("../views/404Error")
    },access : (req,res) => {
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

    },
    // control de las validaciones 
        edit: (req,res) => {
        let user = one(req.params.id)
        return res.render("../views/Users/userEdit", {user})  
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
    }, remove : (req,res) => {
        /*let todos = all();
        let noEliminados = todos.filter(elemento => elemento.id != req.body.id);
        write(noEliminados
    */


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
    show: (req,res) =>{

        User.findByPk(req.params.id)
        .then(user=> {if(user){
            return res.render('../views/Users/userProfile',{user})  
            
        }return res.render("../views/404Error")})
    },
 
    edit: (req,res) => {
        User.findByPk(req.params.id)
        .then(user=> res.render("../views/Users/userEdit", {user}) ) 
        .catch(error => res.status(404).json(error))
    }
    ,
    save: (req,res) => {
        
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
            image: nuevo.imagen
        });
       
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
            res.cookie("user", req.body.email, {maxAge: 10000 * 60 * 60 * 24 })
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
        let nuevo = req.body;
        User.update({
            nombre: nuevo.nombre,
            apellido: nuevo.apellido,
            email: nuevo.email,
            clave: nuevo.clave,
            admin: nuevo.email.includes("@futbolxi") ? 1: 0,
            image: req.files && req.files.length > 0 ? req.files[0].filename : "default.png"
        },{
            where:{id: req.body.id}
        })
        return res.redirect("/usersList")
    },
    remove : (req,res) => {
        User.findByPk(req.body.id).then(resultado => {
            if (resultado.image != "default.png") {
                let file = resolve(__dirname,"..","..","public","img","Usuarios", resultado.image)
               return unlinkSync(file)
            }
        }).then(() => {
            User.destroy({
                where:{
                    id: req.body.id
                }
            })
        })
        
        return res.redirect("/")
    }
}

module.exports = userController