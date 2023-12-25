
const loginmodel = require('../model/LoginModel');


const Register = async (req,res) => {
    try {
        
        var data = await loginmodel.create(req.body);
        
        res.status(200).json({
            status:"Success",
            data
        })

    } catch (error) {
        
        res.status(200).json({
            status:"Error",
            error
        })
    }
}

const Login = async (req,res) => {
    
    try {
        
        var data = await loginmodel.find({email:req.body.email});

        if(data[0].password == req.body.password)
        {
            res.status(200).json({
                status:"Login Success",
                data
            })
        }

    } catch (error) {
        
        res.status(200).json({
            status:"Error",
            error
        })
    }

}

module.exports = {
    Register,
    Login
}
