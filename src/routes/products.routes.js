const {Router} = require('express')
const route = Router();
const controller = require("../controllers/products.controller")
route.get("/productCart",controller.cart)
route.get("/productDetail",controller.detail)
route.get("/productList",controller.list)
module.exports = route