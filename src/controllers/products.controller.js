const {all,one, generate, write} = require("../models/products.model")
const {unlinkSync} = require("fs");
const {resolve} = require('path');
const {Product,Image} = require("../database/models");
const { where, Association } = require("sequelize");
const { emitWarning } = require("process");
const { query } = require("express");
const controller = {
   /*index: (req,res) => {
        let products = all()
        let data = {
            Adidas: products.filter(elemento => (elemento.marca === "Adidas")),
            Nike: products.filter(elemento => (elemento.marca === "Nike")),
            Puma: products.filter(elemento => (elemento.marca === "Puma")),
            marcas: ["Adidas","Nike","Puma"],
            title: "Lista de botines"
        }

        if(req.params.marca){
            data.marcas = [req.params.marca]
            data.title = "Botines " + req.params.marca
           // data = products.filter(e => e.marca == req.params.marcas)
            return res.render('../views/Product/productList',{data})
        } 
        return res.render('../views/Product/productList',{data})
    },
    
    */
    index: (req,res)=>{
     
        Product.findAll({include:["images"]})
        .then(products => {
            let data = {
                image: Image.findAll(),
                Adidas: products.filter(elemento => (elemento.marca_id == "1")),
                Nike: products.filter(elemento => (elemento.marca_id == "2")),
                Puma: products.filter(elemento => (elemento.marca_id == "3")),
                marcas: ["Adidas","Nike","Puma"],
                title: "Lista de botines"
        }
        if(req.params.marca){
            data.marcas = [req.params.marca]
            data.title = "Botines " + req.params.marca
           // data = products.filter(e => e.marca == req.params.marcas)
            return res.render('../views/Product/productList',{data})
        } 
            return res.render('../views/Product/productList',{data})
        })
        .catch(error => res.status(404).json(error))
    },
    /*show: (req,res) =>{
        let product = one(req.params.producto)
        if(product){
            return res.render('../views/Product/productDetail',{product})     
        }
 
        return res.render("../views/404Error")
   },*/
    show: (req,res) =>{

        Product.findByPk(req.params.producto, {include:["images"]}).
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
        Product.findByPk(req.params.id, {include:["images"]}).
        then(product => {if(product){
            return res.render('../views/Product/productEdit',{product})  
        }return res.render("../views/404Error")})
        .catch(error => res.status(404).json(error))
    },
       /* let product = one(req.params.id)
        return res.render("../views/Product/productEdit", {product})  }*/

    update: (req,res) => {

        let nuevo = req.body;
        Product.update({
            nombre: nuevo.nombre,
            categoria: nuevo.terreno,
            descripcion: nuevo.descripcion,
            precio:  parseInt(nuevo.precio),
            marca_id: parseInt(nuevo.marca),
            oferta: parseInt(nuevo.oferta),

        },
        {
            where:{id: req.body.id}
        })
        .then(()=>{
            let nombreImagenes = req.files.map(elemento => elemento.filename)
            Image.findAll({
                where:{
                product_id: req.body.id
            }}).then(arrayImagenes => {
                for (let i = 0; i < arrayImagenes.length; i++) {
                    const imagenes = arrayImagenes[i]
                    Image.update({
                        imagen: nombreImagenes[i]
                       
                    },{
                        where:{id: imagenes.id
                            
                        }
                    })
                }
                
                    
                
                
           
            })
            
           
        })
        /*Product.update({
            nombre: nuevo.nombre,
            categoria: nuevo.terreno,
            descripcion: nuevo.descripcion,
            precio:  parseInt(nuevo.precio),
            marca_id: parseInt(nuevo.marca),
            oferta: parseInt(nuevo.oferta),

        },
        {
            where:{id: req.body.id}
        }).then(() => {
            Image.findAll({
                where:{
                product_id: req.body.id
            }})
        })*/
        .catch(error => res.status(404).json(error))
        /*let todos = all();
        let actualizados = todos.map(elemento => {
            if(elemento.id == req.body.id){
                elemento.nombre = req.body.nombre;
                elemento.marca = req.body.marca;
                elemento.terreno = req.body.terreno;
                elemento.precio = req.body.precio;
                elemento.oferta = req.body.oferta;
                elemento.imagen = req.files && req.files.length > 0 ? req.files.map(elemento => elemento.filename) : elemento.imagen;
                elemento.descripcion = req.body.descripcion;
            }
            return elemento
        })
        write(actualizados)*/
        return res.redirect("/productList")
    },
    save: (req,res) => {
        let nuevo = (req.body)
    
        Product.create({
            nombre: nuevo.nombre,
            categoria: nuevo.terreno,
            descripcion: nuevo.descripcion,
            precio:  parseInt(nuevo.precio),
            marca_id: parseInt(nuevo.marca),
            oferta: parseInt(nuevo.oferta),
        }).then(() => {
            Product.findAll().then(resultado => {
                let product = resultado.pop().id
                let nombreImagenes = req.files.map(elemento => elemento.filename)
                nombreImagenes.forEach(unaFoto => {
                    Image.create({
                        imagen: unaFoto,
                        product_id: product,
                    })
                })
                /*Image.create({
                    imagen: nuevo.imagen = req.files && req.files.length > 0 ? req.files.map(elemento => elemento.filename): ["default.jpg"],
                    product_id : product
                }) */
            })
            return res.redirect("/productList")
        })
    },
    /*remove: (req,res) => {
    
    let product = one(req.body.id)
    product.imagen.forEach( (unaImagen) => {
        if(unaImagen != "default.jpg"){
            let file = resolve(__dirname,"..","..","public","img","Botines",unaImagen)
            unlinkSync(file)
        }})
    let todos = all();
    let noEliminados = todos.filter(elemento => elemento.id != req.body.id)
    write(noEliminados)
    return res.redirect ("/productList")    
    }*/
    remove: (req,res) => {
        Image.findAll({
            where:{
            product_id: req.body.id
        }}).then(arrayImagenes => {
            arrayImagenes.forEach(cadaImagen => {
                if (cadaImagen.imagen != "default.jpg") {
                    let file = resolve(__dirname,"..","..","public","img","Botines", cadaImagen.imagen)
                    unlinkSync(file)
                }
                Image.destroy({
                    where:{
                        id: cadaImagen.id
                    }
                })
            })
        }).then(() => {
            Product.destroy({
                where:{
                    id: req.body.id
                }
            })
        })
        
        return res.redirect ("/productList")    
        },

    search:  (req,res) => {
        
        let querys = req.query.q
        let config = {
            where: {nombre:querys},            
            include:["images"]}

        Product.findOne(config)
        .then(product => 
            
            {
                
                if(product == null){
                 return res.render("../views/404Error")} 
        return res.render('../views/Product/productDetail',{product})})   
        
        .catch(error => res.status(404).json(error))
    }
}

module.exports = controller