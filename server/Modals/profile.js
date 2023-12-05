const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const autoIncrement = require('mongoose-auto-increment');


const profileSchema = new Schema({
    Profile_Name: {
        type: String,
        required: true
    },
    Profile_img: {
        type: String,
    },
    Email: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    Mobile_No: {
        type: Number,
        required: true
    },
    Gender: {
        type: String,
        required: true
    }, 
    Id: {
         type: Number, 
         unique: true 
    }
});
// Add auto-increment plugin
// autoIncrement.initialize(mongoose.connection);
// profileSchema.plugin(autoIncrement.plugin, {
//     model: 'Profile',
//     field: 'Id', // This assumes you want to use 'Id' as the auto-incremented field
//     startAt: 1,
//     incrementBy: 1
// });


module.exports = mongoose.model("Profile",profileSchema);
