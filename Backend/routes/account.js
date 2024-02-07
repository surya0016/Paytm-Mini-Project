const express = require('express');
const { Account,User } = require('../db/db');
const authMiddleware = require('../middleware/authMiddleware');
const mongoose = require('mongoose');

const router = express.Router();

router.get("/balance", authMiddleware, async (req, res) => {
    const account = await Account.findOne({
        userId: req.userId
    });

    res.json({
        balance: account.balance
    })
});

router.post("/transfer",authMiddleware,async(req,res)=>{
    const session = await mongoose.startSession();

    session.startTransaction();
    const {amount,to} = req.body;
    // const to = req.body.to; //expect this to be userId
    
    const reciever = await Account.findOne({
        userId:to
    })

    if(!reciever){
        res.status(400).json({
            message:"Invalid Account"
        })
        return
    }

    //Storing semder account details in reciever variable
    const senderAccount = await Account.findOne({
        userId:req.userId
    })

    //checking if sender has sufficient balance
    if(senderAccount.balance < amount || senderAccount.balance === 0){
        res.json({
            message:"Insufficient balance",
        })
        return
    }

    await Account.updateOne({
        userId:req.userId
    },{
        $inc:{
            balance: -amount
        }
    })

    await Account.updateOne({
        userId:to
    },{
        $inc:{
            balance: amount
        }
    })
    await session.commitTransaction();
    res.json({
        message:"Transfer successful"
    })
})

module.exports = router;




    // //adding the amount in reciever account
    // const totalAmount = recieverAccount.balance + transferAmount;

    // //updating the reciever account 
    // const updateRecieverAccount = await Account.findOneAndUpdate({
    //     userId:reciever._id
    // },{
    //     $set:{
    //         balance:totalAmount,
    //     }
    // })
    
    // //calulating the total amount after sending money
    // const deduct = senderAccount.balance - transferAmount;
     
    // //updating the total amount of the sender in database
    // const updateSenderAccount  = await Account.findOneAndUpdate({
    //     userId:req.userId
    // },{
    //     $set:{
    //         balance:deduct
    //     }
    // })

    // updateSenderAccount.save()
    // updateRecieverAccount.save()