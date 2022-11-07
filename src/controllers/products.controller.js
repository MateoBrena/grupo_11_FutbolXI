const {unlinkSync} = require("fs");
const {resolve} = require('path');
const {Product,Image} = require("../database/models");
const {validationResult} = require("express-validator");

const controller = {
  
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
            return res.render('../views/Product/productList',{data})
        } 
            return res.render('../views/Product/productList',{data})
        })
        .catch(error => res.status(404).json(error))
    },

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
        .catch(error => res.status(404).json(error))
        return res.redirect("/productList")
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
                
            })
            return res.redirect("/productList")
        })
    },
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