function isAuthorized(req,res,next){
    // console.log(req.headers);
    if(!req.headers.authorization){
        res.status(401).end();
        return;
    }
    if(req.headers.authorization != "Bearer 1235"){
        res.status(401).end();
        return;
    }
    console.log(req.headers.authorization);
    next(); 
}
module.exports = {
    isAuthorized,
}