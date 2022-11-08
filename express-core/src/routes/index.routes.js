const {Router} = require('express')
const route = Router();
const controller = require("../controllers/index.controller")

route.get("/",controller.index)

module.exports = route