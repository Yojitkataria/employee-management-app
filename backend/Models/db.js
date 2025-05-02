require('dotenv').config();  // MUST BE AT THE VERY TOP
const mongoose = require('mongoose');

const mongo_url = process.env.MONGO_URL;
console.log('Mongo URL:', mongo_url);  // TEMP for debugging

mongoose.connect(mongo_url)
    .then(() => {
        console.log('MongoDB Connected...')
    }).catch((err) => {
        console.log('Error while MongoDB connecting ...', err);
    });
