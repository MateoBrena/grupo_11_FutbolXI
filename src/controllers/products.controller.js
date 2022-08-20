const {all,one, generate, write} = require("../models/products.model")

const controller = {
    cart: (req,res) => {

        return res.render("../views/Product/productCart")  
    },

    detail: (req,res) => {

        return res.render("../views/Product/productDetail.ejs")    
    },

    list: (req,res) => {

        return res.render("../views/Product/productList")    
    },

    create: (req,res) => {
        
        return res.render("../views/Product/create.ejs")
    },
    
    edits: (req,res) => {

        return res.render("../views/Product/edits")  
    },

    save: (req,res) => {
       // req.body.image = req.files && req.files.length >0 ? req.files[0].filename : "default.png";
        let nuevo = generate(req.body)
        let todos = all()
        todos.push(nuevo)
        write(todos)
        return res.redirect("/")
    },
    
    remove: (req,res) => {

        return res.send("Eliminado!")
    }

}

module.exports = controller