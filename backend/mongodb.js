const mongoose = require('mongoose');
const mongoURI = 'mongodb://ankit2020cs142:Ankit123456@ac-zyjv8cw-shard-00-00.90r7jw8.mongodb.net:27017,ac-zyjv8cw-shard-00-01.90r7jw8.mongodb.net:27017,ac-zyjv8cw-shard-00-02.90r7jw8.mongodb.net:27017/profilemanagementsystem?ssl=true&replicaSet=atlas-lboia4-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0'


async function dbConnect() {
    await mongoose.connect(mongoURI).then(async () => {
        console.log("Connected Successfully !!");
        const browse_profile = await mongoose.connection.db.collection('browseprofiles')
        await browse_profile.find({}).toArray().then(
            async (data, err) => {
                if (err) {
                    console.log("---", err);
                } else {
                    global.browse_profile_data = data;
                    // global.user_profile_data = userdata;
                }
            })
    }).catch((err) => {
        console.log("---", err);
    });
}

module.exports = dbConnect();