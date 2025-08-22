import mongoose from "mongoose";

const schema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxlength: 10,
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  profile: {
    type: String,
    default: "",
  },
});

const model = mongoose.model("usermodel", schema);
export default model;
