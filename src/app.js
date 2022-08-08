const express = require('express');
const server = express();
const {join} = require('path');
const{port,start} = require("./modules/server")
server.listen(port,start());

server.set('views', join(__dirname,'./views'))
server.set('view engine', 'ejs')

const static = require("./modules/static")
server.use(static(join(__dirname, '../public')));
const productsRoutes = require('./routes/products.routes'); 
const indexRoutes = require("./routes/index.routes")
server.use(productsRoutes); 
server.use(indexRoutes)