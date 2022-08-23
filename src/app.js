const express = require('express');
const methodOverride = require('method-override');

const server = express();
const {join,resolve} = require('path');
const{port,start} = require("./modules/server")
server.listen(port,start());

server.set('views', resolve(__dirname, 'views'))
server.set('view engine', 'ejs')

const static = require("./modules/static")
server.use(static(join(__dirname, '../public')));
server.use(express.urlencoded({extended:true}))
server.use(methodOverride("m"))

const productsRoutes = require('./routes/products.routes'); 
const indexRoutes = require("./routes/index.routes")
const usersRoutes = require("./routes/users.routes")

server.use(productsRoutes); 
server.use(indexRoutes);
server.use(usersRoutes); 

