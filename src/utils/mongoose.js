module.exports = {
    mongooseToObject: (mongoose) => {
        return mongoose ? mongoose.toObject() : mongoose;
    },
    multipleMongooseToObject: (mongooseArrays) => {
        return mongooseArrays.map((mongooseArray) => mongooseArray.toObject());
    },
};
