const JWT = require('jsonwebtoken')
require('dotenv').config()

module.exports = {
    authenticate:(req,res,next)=>{
        const header = req.headers['authorization']
        
        if(!header){
            res.status(500).json({message:"auth header missing"})
        }
        if(header.startsWith("Bearer ")){
           const token = header.split(" ")[1]
           JWT.verify(token,process.env.SECRET,(error,decoded)=>{
            if(error){
                res.status(400).json({message:"expired token"})
            }else{
                req.id = decoded.id;
                next();
            }
           })
    }
            res.status(500).json({message:"BAD REQUEST"})
    },


    signToken: user => {
        const token = JWT.sign({
            id: user._id
        },
        process.env.SECRET,
        {
            expiresIn: '45m'
        }
        )
        return token;
    }
    
}