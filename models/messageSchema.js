import mongoose from "mongoose";
import validator from "validator";
const messageShema = new mongoose.Schema({
  firstName: {
    type: String,
    require: true,
    minLength: [3, "First name must contain atleast 3 characters"],
  },
  lastName: {
    type: String,
    require: true,
    minLength: [3, "First name must contain atleast 3 characters"],
  },
  email: {
    type: String,
    require: true,
    validate: [validator.isEmail, "Please provide a valid email"],
  },
  phone: {
    type: String,
    require: true,
      minLength: [11, "Phone number must contain exact 11 digits"],
      maxLength: [11, "Phone number must contain exact 11 digits"],
  },
  message: {
    type: String,
    require: true,
    minLength: [10, "Message must contain atleast 10 characters"],
  },
});

export const Message = mongoose.model("Message", messageShema);
