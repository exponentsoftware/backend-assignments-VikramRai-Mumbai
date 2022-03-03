const { timeStamp } = require("console");
const mongoose = require("mongoose");

const TODO = mongoose.model(
    "TODO",
    new mongoose.Schema({
        username: {
            type:String,
            trim:true,
            lowercase:true,
            minlength:3, 
            maxlength:100
        },
        title: {
            type:String,
            trim:true,
            lowercase:true,
            minlength:3, 
            maxlength:100
        },
        status: {
            type:String,
            trim:true,
            lowercase:true,
            minlength:3, 
            maxlength:25
        },
        category: {
            type:String,
            trim:true,
            lowercase:true,
            enum: ["work", "hobby", "task", "other"]
        }

    }, {timeStamp: true})
);

module.exports = TODO;