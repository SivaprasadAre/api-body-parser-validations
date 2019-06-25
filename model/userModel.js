var mongoose = require('mongoose');
var schome = mongoose.Schema;
var userSchome = new schome({
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
    },
    password: { type: String, required: true },
    confimePassword: { type: String, required: true }
});
var userSchomeModeu = mongoose.model('user', userSchome, 'user');

function UserModel() {
    this.userSchomeModeu = userSchomeModeu;
};

UserModel.prototype.find = function (params = {}, callback) {
    console.log(params);
    this.userSchomeModeu.find(params,callback);
};

UserModel.prototype.create = function (body, callback) {
    this.userSchomeModeu.create(body, callback);
};
UserModel.prototype.update = function (id, body, callback) {
    this.userSchomeModeu.update({ "_id": id }, body, callback);
};
UserModel.prototype.remove = function (id, callback) {
    this.userSchomeModeu.remove({ "_id":id }, callback);
};



module.exports = UserModel;