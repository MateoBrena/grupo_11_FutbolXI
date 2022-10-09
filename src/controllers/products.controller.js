const {all,one, generate, write} = require("../models/products.model")
const {unlinkSync} = require("fs");
const {resolve} = require('path');
const {Product,Image} = require("../database/models/index");
const { where } = require("sequelize");
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
     
        Product.findAll()
        .then(products => {
            let data = {
                image: Image.findAll().then(image=>image),
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

        Product.findByPk(req.params.producto).
        then(product => {if(product){
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
        Product.findByPk(req.params.id).
        then(product => {if(product){
            return res.render('../views/Product/productEdit',{product})  
        }return res.render("../views/404Error")})
        .catch(error => res.status(404).json(error))
    },
       /* let product = one(req.params.id)
        return res.render("../views/Product/productEdit", {product})  }*/

    update: (req,res) => {

        let nuevo = req.body;

        if(nuevo.marca == "Adidas"){
            nuevo.marca = 1
        }else if(nuevo.marca == "Nike"){
            nuevo.marca = 2
        }else{
            nuevo.marca = 3
        };

        if (nuevo.oferta == "Si"){
            nuevo.oferta = 1
        } else{
            nuevo.oferta = 0
        }
        Product.update({
            nombre: nuevo.nombre,
            categoria: nuevo.terreno,
            descripcion: nuevo.descripcion,
            precio:  parseInt(nuevo.precio),
            marca_id: nuevo.marca,
            oferta: nuevo.oferta,
        },{
            where:{id: req.body.id}
        })
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
        req.body.imagen = req.files && req.files.length > 0 ? req.files.map(elemento => elemento.filename): ["default.jpg"];
        let nuevo = (req.body)
        if(nuevo.marca == "Adidas"){
            nuevo.marca = 1
        }else if(nuevo.marca == "Nike"){
            nuevo.marca = 2
        }else{
            nuevo.marca = 3
        };

        if (nuevo.oferta == "Si"){
            nuevo.oferta = 1
        } else{
            nuevo.oferta = 0
        }
        
        Product.create({
            nombre: nuevo.nombre,
            categoria: nuevo.terreno,
            descripcion: nuevo.descripcion,
            precio:  parseInt(nuevo.precio),
            marca_id: nuevo.marca,
            oferta: nuevo.oferta,
            
        });

        return res.redirect("/productList")
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
        Product.destroy({
            where:{
                id: req.body.id
            }
        })
        
        return res.redirect ("/productList")    
        }
   
}

module.exports = controller