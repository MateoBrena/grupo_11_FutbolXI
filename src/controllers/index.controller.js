const {all,one, generate, write} = require("../models/products.model")
const controller = {
    
    index: (req,res) => {
        let products = all()

        if(req.params.marcas){
            products = products.filter(e => e.marca == req.params.marcas)
            return res.render('index',{products})
        } 
        return res.render('index',{products})
    },
    
    register: (req,res) => {
        return res.render("../views/Users/register")
        
    },
    
    login: (req,res) => {
        return res.render("../views/Users/login")
        
    },
    

}

module.exports = controller