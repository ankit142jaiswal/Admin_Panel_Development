const express = require('express')
const router = express.Router()


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