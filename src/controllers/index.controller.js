const controller = {
    
    index: (req,res) => {
        return res.render("index")
        
    },
    
    register: (req,res) => {
        return res.render("../views/Users/register")
        
    },
    
    login: (req,res) => {
        return res.render("../views/Users/login")
        
    },
    

}

module.exports = controller