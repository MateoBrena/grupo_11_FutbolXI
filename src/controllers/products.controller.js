const {all,one, generate, write} = require("../models/products.model")
const {unlinkSync} = require("fs");
const {resolve} = require('path');

const controller = {

    index: (req,res) => {
        let products = all()

        if(req.params.marcas){
            products = products.filter(e => e.marca == req.params.marcas)
            return res.render('../views/Product/productList',{products})
        } 
        return res.render('../views/Product/productList',{products})
    },

   

    show: (req,res) =>{
         let product = one(req.params.producto)
         if(product){
             return res.render('../views/Product/productDetail',{product})     
         }
  
            return res.render('../views/Product/productDetail',{product:null})
    },
            
    
    cart: (req,res) => {

        return res.render("../views/Product/productCart")  
    },
       

    create: (req,res) => {
        
        return res.render("../views/Product/create.ejs")
    },
    
    edits: (req,res) => {

        return res.render("../views/Product/edits")  
    },

    save: (req,res) => {
        req.body.imagen = req.files && req.files.length > 0 ? req.files.map(elemento => elemento.filename): "default.png";
        let nuevo = generate(req.body)
        let todos = all()
        todos.push(nuevo)
        write(todos)
        return res.redirect("/productList")
    },
    
    remove: (req,res) => {
    let product = one(req.body.id)
    if(product.image != "default.png"){
        let file = resolve (__dirname,"..","..","public","products",product.image)
        unlinkSync(file)

    }
    let todos = all();
    let noEliminados = todos.filter(elemento => elemento.id != req.body.id)
    write(noEliminados)
    return res.redirect ("/productos")    
    }

}

module.exports = controller