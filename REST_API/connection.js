const mongoose = require('mongoose');

async function ConnectMongodb(url){
    return mongoose.connect(url);
}

module.exports = ConnectMongodb;