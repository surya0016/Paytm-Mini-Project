const express = require('express');
const bcrypt = require('bcrypt');
const z = require('zod');
const secret = require('../config')
const jwt = require('jsonwebtoken');
const {User} = require('../db/db');
const authMiddleware = require('../middleware/authMiddleware');

const zodSchema = z.object({
    username:z.string().email(),
    firstName:z.string(),
    lastName:z.string(),
    password:z.string(),
})

const router = express.Router()

router.get("/test",(req,res)=>{
    res.send("Hello")
})

router.post("/signup" , async (req,res)=>{
    const body =  req.body;
    const username = body.username;
    const firstName = body.firstName;
    const lastName = body.lastName;
    const password = body.password;

    
    const response = zodSchema.safeParse(body);

    const userExists = await User.findOne({username:username});

    if(userExists){
        return res.status(411).json({
            msg:"User already exists. Please login or use another username"
        });
        
    }else if(!response.success){
        return res.status(411).json({msg:"Invalid Input",res:response});
    }else{
        const token = jwt.sign({
            username
        },secret)

        const salt = await bcrypt.genSalt(10)
        const hash = await bcrypt.hash(password, salt)

        const user = await User.create({
            username,
            firstName,
            lastName,
            password:hash
        })
        user.save();
        const userId = user._id;
        res.json({
            msg:"User created successfully !",
            token: token,
            userId: userId
        })
    }

})

router.post("/signin",async(req,res)=>{
    const zodVal = z.object({
        username:z.string(),
        password:z.string(),
    })
    const response = zodVal.safeParse(req.body);
    
    if(!response.success){
        return res.status(411).json({
            msg:"Invalid Input",
            error:response
        });
    }
try {
    

    const user = await User.findOne({
        username:req.body.username,
    })
    // console.log(user);
    const isMatch = await bcrypt.compare(req.body.password, user.password)

    if(!isMatch){
        res.json({mg:"Invalid Password"})
    }else{
    if(user){
        const token = jwt.sign({
            userId:user._id,
    },secret);

    res.json({
        token:token,
        user:user
    })

    return
    }
}} catch (error) {
    res.status(411).json({
        msg:"Error while logging in",
        error:error
    })
}
    

})

router.put("/",authMiddleware,async (req,res)=>{
    const zodVal = z.object({
        password:z.string().optional(),
        firstName:z.string().optional(),
        lastName:z.string().optional(),
    })

    const response = zodVal.safeParse(req.body);

    if(!response.success){
        return res.status(411).json({
            msg:"Invalid Input"
        })
    }

    await User.updateOne(req.body,{
        _id:req.userId
    })

    res.json({
        msg:"Updated successfully"
    })
})

router.get("/bulk",async (req,res)=>{
    const filter = req.query.filter || " ";

    const users = await User.find({
        $or:[{                             //   $or is used for search two things at same time
            firstName:{                    //   $regex is basically regex
                "$regex":filter,           //   filter is just the query parameter 
            }                              // 
        },{                                // 
            lastName:{                     //         
                "$regex":filter            //                 
            }
        }]
    })

    res.json({
        user: users.map(user=>({
            username:user.username,
            firstName:user.firstName,
            lastName:user.lastName,
            _id:user._id,
        }))
    })
})

module.exports = router;