const db = require("../model");
const User = db.user;

exports.newUser = (req, res) => {
    const newUser = new User({
       username: req.body.username,
       email: req.body.email,
       mobile: req.body.mobile,
       role: "user"
    });
    newUser.save((error,data)=>{
       if(error){
        res.status(200).send({message : " new User creation failed.", error : error});
       }
       res.status(200).send({message : "new User created."});
    });

   

    };

exports.getUser = (req, res) => {
    const UserID = req.params.UserID;
    const role = req.body.role;
    const email = req.body.email;
    const mobile = req.body.mobile;
    const createdAt = req.body.createdAt;
    const isSortByCreatedAt = req.body.isSortByCreatedAt;
    let filter = true;
    if(!role && !email && !mobile && !createdAt){ filter = false}
    User.find( UserID ? {_id : req.params.UserID} :( 
        filter ? { $or : [{ role : role}, { email : email}, { mobile : mobile}, {createdAt: createdAt}]} : {}),
        isSortByCreatedAt ? {  sort: {createdAt: -1}} : {},
         function (err, data){
       if(err){
        res.status(200).send({message : "something went wrong. error: ", error: err});
       }
       res.status(200).send(data);

    })
        };


exports.updateUser = (req, res) => {
    const UserID = req.params.UserID;
    User.updateOne( UserID ? {_id : req.params.UserID} : {_id : req.body.UserID},
        {
            username: req.body.username,
            mobile: req.body.mobile,
            email: req.body.email,
            role: req.body.role
        }
         ,function (err, data){
       if(err){
        res.status(200).send({message : "something went wrong. error: ", error: err});
       }
       res.status(200).send(data);

    })

      };



      exports.deleteUser = (req, res) => {
        const UserID = req.params.UserID;
        User.deleteOne( UserID ? {_id : req.params.UserID} : {_id : req.body.UserID},
           function (err, data){
           if(err){
            res.status(200).send({message : "something went wrong. error: ", error: err});
           }
           res.status(200).send(data);
    
        })
    
          }; 