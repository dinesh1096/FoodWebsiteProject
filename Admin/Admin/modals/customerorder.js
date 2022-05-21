const mongoose = require("mongoose");
const userSchema = mongoose.Schema(
    {
        Customer_Id: {
            type:Number,
            required: true,
        },
        Customer_Name: {
            type: String,
            required: true,
        },
        Order_Id: {
            type: Number,
            required: true,
        },
        Payment_Id: {
            type: Number,
            required: true,
        },
        Payment_Details: {
            type: String,
            required: true,
        },
        Payment_Amount: {
            type:Number,
            required: true,
        },
    });

module.exports = mongoose.model("Customerorders", userSchema);
