const {all,one, generate, write} = require("../models/products.model")
const {unlinkSync} = require("fs");
const {resolve} = require('path');

const controller = {
    index: (req,res) => {
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
    
    show: (req,res) =>{
         let product = one(req.params.producto)
         if(product){
             return res.render('../views/Product/productDetail',{product})     
         }
  
         return res.render("../views/404Error")
    },
    cart: (req,res) => {

        return res.render("../views/Product/productCart")  
    },
    create: (req,res) => {
        
        return res.render("../views/Product/create.ejs")
    },
    edit: (req,res) => {
        let product = one(req.params.id)
        return res.render("../views/Product/productEdit", {product})  
    },
    update : (req,res) => {
        let todos = all();
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
        write(actualizados)
        return res.redirect("/productList")
    },
    save: (req,res) => {
        req.body.imagen = req.files && req.files.length > 0 ? req.files.map(elemento => elemento.filename): ["default.jpg"];
        let nuevo = generate(req.body)
        let todos = all()
        todos.push(nuevo)
        write(todos)
        return res.redirect("/productList")
    },
    remove: (req,res) => {
    let product = one(req.body.id)
    if(product.imagen != "default.jpg"){
        product.imagen.forEach( (unaImagen) => {
            let file = resolve(__dirname,"..","..","public","img","Botines",unaImagen)
            unlinkSync(file)
        })
    }
    let todos = all();
    let noEliminados = todos.filter(elemento => elemento.id != req.body.id)
    write(noEliminados)
    return res.redirect ("/productList")    
    }
}

module.exports = controller