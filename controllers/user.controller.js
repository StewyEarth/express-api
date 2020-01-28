const User = require("../models/user.model");
const bcrypt = require("bcryptjs")
async function createUser(req,res,next){
    try {
        req.fields.password = bcrypt.hashSync(req.fields.password,10)
        let user = await User.create(req.fields);
        res.status(201).json(user)
    } catch (error) {
        console.error(error);
        res.status(400).end();
    }
}

module.exports = {
    createUser
}