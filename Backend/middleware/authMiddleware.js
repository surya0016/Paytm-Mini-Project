const jwt = require('jsonwebtoken');
const secret = require('../config');

function authMiddleware(req,res,next){
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(403).json({
            msg:"Authorization header not found",
        });
    }
    
    const token = authHeader.split(' ')[1];
    
    try {
        const decoded = jwt.verify(token,secret)
        console.log(decoded)
        if(!decoded.userId){
            res.json({msg:"You are not authenticated"})
        }else{
            req.userId = decoded.userId;
            console.log("Authentication Success")
            next()
        }
    } catch (error) {
        return res.json({msg:error})
    }
    
}

module.exports = authMiddleware;