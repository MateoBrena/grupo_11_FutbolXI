const {resolve} = require("path")
const fs = require("fs")

let userModel ={
    all: function(){
        let file = resolve(__dirname,"../data/users.json");
        let data = fs.readFileSync(file);
        return JSON.parse(data);
    },
    one: function (id){
        let all = userModel.all();
        return all.find(u => u.id == id)
    },
    generate: function(data){
        let all = userModel.all()
        let last = all.pop()
        let user = {}

        user.id = last.id + 1
        user.nombre = data.nombre
        user.apellido = data.apellido
        user.email = data.email
        user.clave = data.clave
        user.categoria = data.email.includes("@futbolxi") ? "Administrador" : "Cliente"
        user.imagen = data.imagen
        return user;
    },
    write: function(data){
        let file = resolve(__dirname,'../data','users.json')
        let json = JSON.stringify(data,null,2)
        return fs.writeFileSync(file,json)
    },
}

module.exports = userModel