
const User = require('../models/user');

// Register user.
exports.postuserController = async(req,res,next) => {
    try{
        const {username,email,password} = req.body;
        if(!username || !email || !password){
            const errors = new Error("Please mention all inputs fields is required");
            errors.statusCode = 400;
            throw errors;
        }

        const newUser = new User({
            username,
            email,
            password
        });
        await newUser.save();
        res.status(200).json({
            status : "OK",
            message : "User is registered"
        })
    }
    catch(err) {
        res.status(err.statusCode || 500).json({
            message : err.message
        })
    }
}

// Login user.
exports.loginuserController = async(req,res,next) => {
    try{
        const {email,password} = req.body;
        if(!email || !password){
            const errors = new Error("Please mention all inputs fields is required");
            errors.statusCode = 400;
            throw errors;
        }
        const result = await User.findOne({email:email});
        if(result.username == null) {
            const errors = new Error("Email is incorrect");
            errors.statusCode = 400;
            throw errors;
        }
        if(result.password == password){
            res.status(200).json({
                status : "OK",
                message : "Login is sucessful"
            })
        }

    }
    catch(err){
        res.status(err.statusCode || 500).json({
            message : err.message
        })
    }
}