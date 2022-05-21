const mongoose = require('mongoose');

const newfooditems = new mongoose.Schema(
    {
        Food_name:{
            type:String,
            require:true
        },
        description:{
            type:String,
            require:true,
        },
        Amount:{
            type:Number,
            require:true,
        },
        category:{
            type:String,
            require:true,
        },
        sub_category:{
            type:String,
            require:true,
        },
        quantity:{
            type:Number,
            require:true,
        }
    });

module.exports = mongoose.model("newfooditemsData" , newfooditems);