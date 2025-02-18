const mongoose = require('mongoose');

// Database connection function
const connectDB = async () => {
    try {
      await mongoose.connect('mongodb://localhost:27017/myDatabase', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log('Connected to MongoDB successfully!');
    } catch (err) {
      console.error('Error connecting to MongoDB:', err.message);
      process.exit(1); // Exit the process with failure
    }
  };
  
  mongoose.Promise = global.Promise;
module.exports = connectDB;