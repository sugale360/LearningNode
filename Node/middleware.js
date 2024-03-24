const reqFilter = (req,res,next)=>{
    if(!req.query.age){
        res.send('Please provide age')
    }
    else if(req.query.age < 18){
        res.send('Not Allowed')
    }
    else {
        next();
    } 
};

module.exports = reqFilter;