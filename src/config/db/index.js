const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/blog', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log('Connect Successfully!');
    } catch (error) {
        console.log('FAILED TO CONNECT!');
    }
}

module.exports = { connect };
