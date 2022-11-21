let middleware = (req,res,next) => {
    if (!req.session.user) {

        next()
    }
    
    res.redirect("/userProfile/"+ req.session.user.id)
}


module.exports = middleware