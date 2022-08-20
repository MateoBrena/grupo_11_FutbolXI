const {Router} = require('express')
const route = Router();
const controller = require("../controllers/products.controller")



route.get("/create",controller.create)
route.post("/save", controller.save)

route.get("/productList",controller.list)
route.get("/productDetail/:id?",controller.detail)
route.get("/productCart",controller.cart)

route.get("/edits",controller.edits)
//route.put("/update", controller.update)

route.delete("/delete/:id", controller.remove)


module.exports = route