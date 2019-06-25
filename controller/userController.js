var UserModel = require('../model/userModel'),
    um;
function UserController() {
    this.um = new UserModel();
};

UserController.prototype.getAll = function (req, res) {
    this.um.find(req.query, function (err, data) {
        if (err) {
            res.send(err);
        } else {
            res.send(data);
        }
    })
};
UserController.prototype.create = function (req, res) {
    this.um.create(req.body, function (err, data) {
        if (err) {
            res.send(err);
        } else {
            res.send(data);
        }
    })
};
UserController.prototype.update = function (req, res) {
    this.um.update(req.params.id, req.body, function (err, data) {
        if (err) {
            res.send(err);
        } else {
            res.send(data);
        }
    })
};
UserController.prototype.remove = function (req, res) {
    this.um.remove(req.params.id, function (err, data) {
        if (err) {
            res.send('error............');
        } else {
            res.send(data);
        }
    })
};


module.exports = UserController;