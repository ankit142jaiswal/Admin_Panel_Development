const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../models/User');
const { body, validationResult } = require('express-validator');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const jwtSecret = "MynameisEndtoEndYoutubeChannel$#"

router.put('/updateuser/:_id', [
    body('email').isEmail(),
    body('password', 'Incorrect Password').isLength({ min: 5 })
]
    ,
    async (req, resp) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return resp.status(400).json({ errors: errors.array() })
        }
       
        let password = req.body.password;
        let password1 = req.body.password1;
        try {         
            if (password != password1) {
                return resp.status(400).json({ errors: "Password Missmatch ! Please Enter same Password" });

            }
            let data = await User.updateOne(
                { _id: req.params._id },
                { $set: req.body })
            // return resp.send(data);
            return resp.json({ success: true });



        } catch (error) {
            console.log(error)
            return resp.json({ success: false });


        }


    })



router.post('/userprofile',async (req, resp) => {
    try {
        const user_profile =  await mongoose.connection.db.collection('users')
        await user_profile.find({}).toArray().then(
            async(data,err)=>{
                if(err){
                    console.log("---",err);
                }else{                    
                    if (data.length > 0) {
                        console.log(data)
                        // return resp.json({success:true});
                        return resp.send([data]);
                    }
                    else {
                        return resp.json({ success: false });
                    }
                }
            })
      
    } catch (error) {
        console.error(error.message);
        resp.send("Server Error")
    }
})






module.exports = router;