const controller = {
    index: (req,res) => {
        return res.render("index")
        
    },
    register: (req,res) => {
        return res.render("register")
        
    },
    login: (req,res) => {
        return res.render("login")
        
    },
    create: (req,res) => {
        return res.render("create")
        
    },
    edits: (req,res) => {
        return res.render("edits")
        
    }

}

module.exports = controller