const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const userSchema = mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

//used to validae before save data in database(to ensure that no two users can share the same email)
userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', userSchema);