const mongoose = require('mongoose');

const mongoURI = "mongodb://localhost:27017/iNoteBook";

const connectToMongo = async () => {
    await mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log("Connected to MongoDB successfully");
};

module.exports = connectToMongo;
