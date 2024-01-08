import mongoose from "mongoose";

// Create a dog schema
const DogSchema = new mongoose.Schema({
  name: String,
  puppy: Boolean,
  special_adoption: Boolean,
  size: String,
});

const DogModel = mongoose.model("Dog", DogSchema)

export default DogModel