
exports.homepage = (req, res) => {
res.status(200).send("Welcome, TODO Home Page Content");
};


exports.newTODO = (req, res) => {

    res.status(200).send("Welcome, create new TODO item");

    };

exports.updateTODO = (req, res) => {
    
        res.status(200).send("Welcome, update TODO item");
    
        };