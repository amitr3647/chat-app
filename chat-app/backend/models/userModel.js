const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
    name: { type: String, required: true},
    email: { type: String, required: true},
    password: { type: String, required: true},
    pic: { type: String, required: true, default: "https://www.shutterstock.com/image-vector/user-profile-icon-vector-avatar-260nw-2247726673.jpg"},
},{
    timestamps: true,
})
const User = mongoose.model("User", userSchema);
module.exports = User