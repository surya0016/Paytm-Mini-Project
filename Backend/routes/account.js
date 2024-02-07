const express = require('express');
const { Account,User } = require('../db/db');
const authMiddleware = require('../middleware/authMiddleware');

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
    const transferAmount = req.body.amount;
    const to = req.body.to;
    //Storing reciever user details in reciever variable
    const reciever = await User.findOne({
        username:to
    })
    
    //Storing reciever account details in reciever variable
    const recieverAccount = await Account.findOne({
        userId:reciever._id
    })

    //Storing semder account details in reciever variable
    const senderAccount = await Account.findOne({
        userId:req.userId
    })

    //checking if reciever exists or reciever account is valid
    if(!recieverAccount){
        res.json({
            message:"Invalid Account"
        })
        return
    }

    //checking if sender has sufficient balance
    if(senderAccount.balance < transferAmount || senderAccount.balance === 0){
        res.json({
            message:"Insufficient balance",
            test:reciever
        })
        return
    }

    //adding the amount in reciever account
    const totalAmount = recieverAccount.balance + transferAmount;

    //updating the reciever account 
    const updateRecieverAccount = await Account.findOneAndUpdate({
        userId:reciever._id
    },{
        $set:{
            balance:totalAmount,
        }
    })
    
    //calulating the total amount after sending money
    const deduct = senderAccount.balance - transferAmount;
     
    //updating the total amount of the sender in database
    const updateSenderAccount  = await Account.findOneAndUpdate({
        userId:req.userId
    },{
        $set:{
            balance:deduct
        }
    })

    updateSenderAccount.save()
    updateRecieverAccount.save()

    res.json({
        message:"Transfer successful"
    })
})

module.exports = router;