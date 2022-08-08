const {Router} = require('express')
const route = Router();
const controller = require("../controllers/index.controller")
route.get("/",controller.index)
route.get("/login",controller.login)
route.get("/register",controller.register)
route.get("/create",controller.create)
route.get("/edits",controller.edits)
module.exports = route