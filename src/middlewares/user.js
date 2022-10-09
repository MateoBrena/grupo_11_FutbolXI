const {all} = require("../models/users.model")
const {User} = require("../database/models/index");

let middleware = (req,res,next) => {
    let user =  null
    // Step 1: cookie from user exists
    if(req.cookies && req.cookies.user){
        User.findOne({where:{
            email: req.cookies.user
        }})
        .then(result=> {
            return req.session.user = result
        })
       
    }
    // Step 2: user in session exists
    if(req.session && req.session.user){
        user = req.session.user
    }

    res.locals.user = user
    return next()
}

module.exports = middleware