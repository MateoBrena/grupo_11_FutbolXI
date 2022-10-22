const {all,one, generate, write} = require("../models/index.model")
const {Product,Image}= require("../database/models/index")
const FileAppender = require("multer/lib/file-appender")
const controller = {
   /* 
    index: (req,res) => {
        let products = all()

        if(req.params.marcas){
            products = products.filter(e => e.marca == req.params.marcas)
            return res.render('index',{products})
        } 
        return res.render('index',{products})
    },*/

    index: (req,res)=>{
        Product.findAll({include:["images"]})
        .then(response=> res.render("index",{response}));
        
    }
}

module.exports = controller