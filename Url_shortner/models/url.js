const mongoose = require('mongoose');

const UrlSchema = mongoose.Schema(
    {
        shortID:{
            type: String,
            required: true,
            unique: true
        },
        redirectUrl:{
            type: String,
            required: true,
        },
        visithistory:[{timestramp:{type: Number}}]
    },
    {timestamps: true}
);
const URL = mongoose.model('url',UrlSchema);

module.exports = URL;