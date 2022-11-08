const {unlinkSync} = require("fs");
const {resolve} = require('path');
const {Product, Sequelize} = require("../database/models");
const {validationResult} = require("express-validator");
const Op = Sequelize.Op
const controller = {
  
    index: (req,res)=>{
        Product.findAll()
        .then(products => {
            let data = {
                Adidas: products.filter(elemento => (elemento.marca_id == "1")),
                Nike: products.filter(elemento => (elemento.marca_id == "2")),
                Puma: products.filter(elemento => (elemento.marca_id == "3")),
                marcas: ["Adidas","Nike","Puma"],
                title: "Lista de botines"
        }
        if(req.params.marca){
            data.marcas = [req.params.marca]
            data.title = "Botines " + req.params.marca
            return res.render('../views/Product/productList',{data})
        } 
            return res.render('../views/Product/productList',{data})
        })
        .catch(error => res.status(404).json(error))
    },
    show: (req,res) =>{
        Product.findByPk(req.params.producto).
        then(product =>    
            {if(product){
            return res.render('../views/Product/productDetail',{product})  
        }return res.render("../views/404Error")})
        .catch(error => res.status(404).json(error))
    },
    cart: (req,res) => {

        return res.render("../views/Product/productCart")  
    },
    create: (req,res) => {
        
        return res.render("../views/Product/create.ejs")
    },
    edit: (req,res) => {
        Product.findByPk(req.params.id,).
        then(product => {if(product){
            return res.render('../views/Product/productEdit',{product})  
        }return res.render("../views/404Error")})
        .catch(error => res.status(404).json(error))
    },
    update: (req,res) => {

        let nuevo = req.body;
        Product.update({
            nombre: nuevo.nombre,
            categoria: nuevo.terreno,
            descripcion: nuevo.descripcion,
            precio:  parseInt(nuevo.precio),
            marca_id: parseInt(nuevo.marca),
            oferta: parseInt(nuevo.oferta),
            imagen: nuevo.imagen
        },
        {
            where:{id: req.body.id}
        })
        .then(()=> res.redirect("/productList"))           
        .catch(error => res.status(404).json(error))
       
    },
    save: (req,res) => {
        let nuevo = (req.body)
        const result = validationResult(req)
        if(!result.isEmpty()) {
            let errores = result.mapped();
            return res.render("../views/Product/create",{
                errores: errores,
                data: req.body
            })
        }
        Product.create({
            nombre: nuevo.nombre,
            categoria: nuevo.terreno,
            descripcion: nuevo.descripcion,
            precio:  parseInt(nuevo.precio),
            marca_id: parseInt(nuevo.marca),
            oferta: parseInt(nuevo.oferta),
            imagen: nuevo.imagen
        })
        .then(() => res.redirect("/productList") )
        .catch(error => res.status(404).json(error))   
        }
    ,
    remove: (req,res) => {
        Product.findByPk(req.body.id).then(resultado => {
            if (resultado.imagen != "default.png") {
                let file = resolve(__dirname,"..","..","public","img","Usuarios", resultado.image);
               return unlinkSync(file);
            
            }
            Product.destroy({
                where:{
                    id: resultado.id
                }
            })
            .then(() => res.redirect("/"))
        })
        
        
    }
    ,
        search:  (req,res) => {
            Product.findAll({where: {nombre: {[Op.like]: req.query.q}}})
            .then(products => {
                let product = products.pop() 
                console.log(product);
                  if(product == null){
                     return res.render("../views/404Error")} 
            
            return res.render('../views/Product/productDetail',{product})})   
            .catch(error => res.status(404).json(error))
        }
            
        
    }


module.exports = controller