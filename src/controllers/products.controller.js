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
        
        return res.send("Llego info")
    },
    
    remove: (req,res) => {

        return res.send("Eliminado!")
    }

}

module.exports = controller