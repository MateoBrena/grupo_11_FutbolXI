const {all,one, generate, write} = require("../models/products.model")

const controller = {
    cart: (req,res) => {

        return res.render("productCart")  
    },

    detail: (req,res) => {

        return res.render("productDetail")    
    },

    list: (req,res) => {

        return res.render("productList")    
    },

    create: (req,res) => {
        
        return res.render("create")
    },
    
    edits: (req,res) => {

        return res.render("edits")  
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