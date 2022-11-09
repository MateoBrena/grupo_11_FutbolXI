const {Product}= require("../database/models/index")
const controller = {


    index: (req,res)=>{
        Product.findAll()
        .then(response=> res.render("index",{response}));
        
    }
}

module.exports = controller