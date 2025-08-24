const mongoose = require('mongoose');

const connectToMongo = async () => {
    const mongoURI = `${process.env.MONGODB_URI}/NoteCrate`;

    await mongoose.connect(mongoURI);
    console.log("Connected to MongoDB successfully");
};

module.exports = connectToMongo;