const jwt = require('jsonwebtoken');
const secret = require('../config');

function authMiddleware(req,res,next){
    const authHeader = req.body.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(403).json({});
    }

    const token = authHeader.split(' ')[1];

    try {
        const decoded = jwt.verify(token,secret)
        if(!decoded.username){
            res.json({msg:"You are not authenticated"})
        }else{
            req.userId = decoded.userId;
            next()
        }
    } catch (error) {
        return res.json({msg:error})
    }
    
}

module.exports = authMiddleware;