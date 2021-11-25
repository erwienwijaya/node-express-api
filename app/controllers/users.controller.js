const db = require('../models');
const Users = db.users;

exports.getUser = (req, res) => {
    Users.find()
        .then((result) => {
            res.status(200).send({
                data: result,
                message: "Success"
            });

        }).catch((err) => {
            res.status(500).send({
                message: err.message || "Some error while retrieving users data"
            })  
        });
}

exports.createUser = (req, res) => {
    const user = req.body;
    
    const users = new Users({
        firstname: user.firstname,
        lastname: user.lastname,
        phone: user.phone,
        active: user.active ? user.active : true,
        time: Date.now()
    });

    users.save(users)
        .then((result) => {
            res.status(201).send({
                data: result,
                message: "Success Created"
            })

        }).catch((err) => {
            res.status(409).send({
                message: err.message || "Some error while create users data."
            })
        });
}

exports.getUserId = (req, res) => {
    const { id } = req.params
    var qtime = req.query.time;

    Users.findById(id)
        .then((result_1) => {
            if(!result_1) {
                return res.status(404).send({
                    message: "Data not found!"    
                })
            }

            //this logic for compare filter, when the time query params  
            //has not exist on the db then retrieve get find data by Id 
            if(qtime) {
                Users.find({time:qtime},(error, result_2) => {
                    if(error) {
                        res.status(409).send({
                            message: error.message || "Some error while find users data."
                        })
                    }else {
                        if(result_2.length === 0 ) {
                            res.status(200).send({
                                data: result_1,
                                message: "Success"
                            })
                        } else{
                            res.status(200).send({
                                data: result_2,
                                message: "Success"
                            })
                        }
                    }
                })
            } else {
                res.status(200).send({
                    data: result_1,
                    message: "Success"
                })
            }

        }).catch((err) => {
            res.status(409).send({
                message: err.message || "Some error while find users data."
            })
        });
}

exports.deleteUser = (req, res) => {
    const { id } = req.params;

    Users.findByIdAndRemove(id)
        .then((result) => {
            if(!result) {
                return res.status(404).send({
                    message: "User not found!"
                })
            }

            res.status(202).send({
                message: "Success deleted"
            });

        }).catch((err) => {
            res.status(409).send({
                message: err.message || "Some error while delete users data."
            })
        });
}

exports.updateUser =  (req, res) => {
    const { id } = req.params;
    
    Users.findByIdAndUpdate(id, req.body)
        .then((result) => {
            if(!result) {
                return res.status(404).send({
                    message: "User not found!"
                })
            }

            res.status(202).send({
                message: "Success updated"
            });

        }).catch((err) => {
            res.status(409).send({
                message: err.message || "Some error while update users data."
            })
        });
}