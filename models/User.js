import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

// Create a model from the schema
const User = mongoose.model('User', userSchema);

export default User; // Export the model to use in other parts of your app
