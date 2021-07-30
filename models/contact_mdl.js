// Require the mongoose module
var mongoose = require('mongoose');
// Set up a mongoose connection
// var mongoDB = 'mongodb://localhost:27017/blog';
var mongoDB = "mongodb+srv://mongo_user:232774@cluster0.nxero.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
// Get the connection
var db = mongoose.connection;
// Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

db.once('open', function () {
    console.log("we're connected!")
});

const contactPostSchema = new mongoose.Schema({
    Name: {
        type: String,
        // required: "Please enter the post title.",
        trim: true
    },
    Email: {
        type: String,
        // required: "Please write your post body.",
        trim: true
    },
    Phone: {
        type: String,
        trim: true
    },
    Message: {
        type: String,
        trim: true
    },
    // more fields defined below
});

module.exports.contacts = mongoose.model('contacts', contactPostSchema);