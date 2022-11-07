const {Product,Image}= require("../database/models/index")
const controller = {


    index: (req,res)=>{
        Product.findAll({include:["images"]})
        .then(response=> res.render("index",{response}));
        
    }
}

module.exports = controller