const express = require('express')
const router = express.Router();
const mongoose = require('mongoose');


router.post('/viewprofile/:email',async (req, resp) => {
    try {
        const user_profile =  await mongoose.connection.db.collection('browseprofiles')
        await user_profile.find({email:req.body.email}).toArray().then(
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

router.post('/dmuser/:email',async (req, resp) => {
    try {
        const user_profile =  await mongoose.connection.db.collection('browseprofiles')
        await user_profile.find({email:req.body.email}).toArray().then(
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

router.post('/browseprofile', (req, resp) => {
    try {
        console.log([global.browse_profile_data])
        resp.send([global.browse_profile_data])

    } catch (error) {
        console.error(error.message);
        resp.send("Server Error")
    }
})


module.exports = router;