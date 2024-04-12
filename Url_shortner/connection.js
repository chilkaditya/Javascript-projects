const mongoose = require('mongoose');

async function ConnectMongodb(url){
    return  await mongoose.connect(url);
}
module.exports = ConnectMongodb;