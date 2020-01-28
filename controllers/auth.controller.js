const bcrypt = require("bcryptjs");
const User = require("../models/user.model");
const jwt = require("jsonwebtoken");
const cache = require("memory-cache");
const uuid = require("uuid/v1");

async function getToken(req, res, next) {
    try {
        let token = await authenticateUser(req.fields.email,req.fields.password);
        let refreshToken = uuid();
        cache.put(refreshToken, req.fields.email);
        res.json({
            token,refreshToken})
    } catch (error) {
        console.error(error)
        res.status(500).json({
            message: error
        })
    }
}

async function authenticateUser(email,password) {
    try {
        let user = await User.findOne({
            where: {
                email: email
            }
        })
        if (!user) {
            return Promise.reject("User not found")
        }
        if (!bcrypt.compareSync(password, user.password)) {
            return Promise.reject("Email or password incorrect")
        }
        let userObject = { user: user.email }
        let token = jwt.sign(userObject, process.env.JWT_SECRET)
        return token;
    } catch (error) {
        console.error(error)
        Promise.reject("Internal server error.")
    }
}
async function refreshToken(req,res,next){
    if(!req.fields.refreshToken){
        res.status(400).end();
        return;
    }
    if(!cache.get(req.fields.refreshToken)){
        res.status(400).end();
        return
    }
    let result = cache.get(req.fields.refreshToken)
    let userObject = { user: result }
    let token = jwt.sign(userObject, process.env.JWT_SECRET)
    let refreshToken = uuid();
    cache.put(refreshToken, req.fields.email);
    cache.del(req.fields.refreshToken)
    res.json({token,refreshToken})
}

module.exports = {
    getToken,
    refreshToken
}