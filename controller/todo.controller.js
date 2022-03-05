const db = require("../model");
const TODO = db.todo;

exports.homepage = (req, res) => {
res.status(200).send("Welcome, TODO Home Page Content");
};


exports.newTODO = (req, res) => {
    const newTODO = new TODO ({
       username: req.body.username,
       title: req.body.title,
       status: "Active",
       category: req.body.category
    });
    newTODO.save((error,data)=>{
       if(error){
        res.status(200).send({message : " new TODO creation failed."});
       }
       res.status(200).send({message : "new TODO item created."});
    });

   

    };

exports.getTODO = (req, res) => {
    const todoID = req.params.todoID;
    TODO.find( todoID ? {_id : req.params.todoID} : {}, function (err, data){
       if(err){
        res.status(200).send({message : "something went wrong. error: ", error: err});
       }
       res.status(200).send(data);

    })
        };


exports.updateTODO = (req, res) => {
    const todoID = req.params.todoID;
    TODO.updateOne( todoID ? {_id : req.params.todoID} : {_id : req.body.todoID},
        {
            username: req.body.username,
            title: req.body.title,
            status: req.body.status,
            category: req.body.category
        }
         ,function (err, data){
       if(err){
        res.status(200).send({message : "something went wrong. error: ", error: err});
       }
       res.status(200).send(data);

    })

      };



      exports.deleteTODO = (req, res) => {
        const todoID = req.params.todoID;
        TODO.deleteOne( todoID ? {_id : req.params.todoID} : {_id : req.body.todoID},
           function (err, data){
           if(err){
            res.status(200).send({message : "something went wrong. error: ", error: err});
           }
           res.status(200).send(data);
    
        })
    
          }; 