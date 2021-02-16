const moongose = require('mongoose');

const userSchema = new moongose.Schema({
    id: moongose.Types.ObjectId,
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    }
});

module.exports = moongose.model('User', userSchema);