const expressJWT = require('express-jwt')
require('dotenv').config()


exports.requireJWT = expressJWT({
    secret: process.env.JWT_SECRET,
    algorithms: ["HS256"],
    userProperty: 'auth'
})


exports.isAuth = (req,res,next) => {


    let bool = req.profile && req.auth && (req.profile._id == req.auth._id)

    if(!bool) {
        return res.status(403).json({
            error: "access denied "
        })
    }
    next()
}