const {all,one, generate, write} = require("../models/index.model")
const controller = {
    
    index: (req,res) => {
        let products = all()

        if(req.params.marcas){
            products = products.filter(e => e.marca == req.params.marcas)
            return res.render('index',{products})
        } 
        return res.render('index',{products})
    },
}

module.exports = controller