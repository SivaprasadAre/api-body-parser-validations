var mongoose = require('mongoose');
var schome = mongoose.Schema;
var clientModel = new schome({
    name: { type: String, required: true },
    email: {
        type: String,
        required: 'Please enter your email',
        trim: true,
        lowercase: true,
        validate: [{
            validator: function (email) {
                var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                return re.test(String(email).toLowerCase());
            }, msg: 'The e-mail field cannot be empty.'
        }]

    },
    phonNumber: {
        type: String,
        validate: {
            validator: function (v) {
                return /\d{10}/.test(v);
            },
            message: '{VALUE} is not a valid phone number!'
        },
        required: [true, 'User phone number required']
    }
});
var clientSchomeModeu = mongoose.model('client', clientModel, 'client');

function ClientModel() {
    this.clientSchomeModeu = clientSchomeModeu;
};

ClientModel.prototype.find = function (params = {}, callback) {
    console.log(params);
    this.clientSchomeModeu.find(params,callback);
};

ClientModel.prototype.create = function (body, callback) {
    this.clientSchomeModeu.create(body, callback);
};
ClientModel.prototype.update = function (id, body, callback) {
    this.clientSchomeModeu.update({ "_id": id }, body, callback);
};
ClientModel.prototype.remove = function (id, callback) {
    this.clientSchomeModeu.remove({ "_id":id }, callback);
};


module.exports = ClientModel;