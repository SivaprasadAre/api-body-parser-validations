var ClientModel = require("../model/clientModel");
function clientController() {
  this.cm = new ClientModel();
}

clientController.prototype.getAll = function(req, res) {
  this.cm.find(req.query, function(err, data) {
    if (err) {
      res.send(err);
    } else {
      res.send(data);
    }
  });
};
clientController.prototype.create = function(req, res) {
  this.cm.create(req.body, function(err, data) {
    if (err) {
      res.send(err);
    } else {
      res.send(data);
    }
  });
};
clientController.prototype.update = function(req, res) {
  this.cm.update(req.params.id, req.body, function(err, data) {
    if (err) {
      res.send(err);
    } else {
      res.send(data);
    }
  });
};
clientController.prototype.remove = function(req, res) {
  this.cm.remove(req.params.id, function(err, data) {
    if (err) {
      res.send("error............");
    } else {
      res.send(data);
    }
  });
};

module.exports = clientController;
