const controller = {
    cart: (req,res) => {
        return res.render("productCart")
        
    },
    detail: (req,res) => {
        return res.render("productDetail")
        
    },
    list: (req,res) => {
        return res.render("productList")
        
    }

}

module.exports =controller