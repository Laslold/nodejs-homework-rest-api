const { Schema, model } = require("mongoose");
const { handleMongooseError } = require("../helpers");
const Joi = require("joi");
const emailRegexp = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/;
const packet = ["starter", "pro", "business"];
const userSchema = new Schema(
  {
    subscription: {
      type: String,
      enum: packet,
      default: "starter",
    },
    email: {
      type: String,
      match: emailRegexp,
      unique: true,
      required: [true, "Email is required"],
    },
    password: {
      type: String,
      minlength: 6,
      required: [true, "Password is required"],
    },
    token: {
      type: String,
      default: null,
    },
    avatarURL: String,
    verify: {
      type: Boolean,
      default: false,
    },
    verificationToken: {
      type: String,
      required: [true, "Verify token is required"],
    },
  },
  { versionKey: false, timestamps: true }
);
userSchema.post("save", handleMongooseError);

const registerSchema = Joi.object({
  subscription: Joi.string().valid(...packet),
  email: Joi.string().pattern(emailRegexp).required(),
  password: Joi.string().min(6).required(),
});
// ********************
const emailSchema = Joi.object({
  email: Joi.string().pattern(emailRegexp).required(),
});
// *******************
const loginSchema = Joi.object({
  email: Joi.string().pattern(emailRegexp).required(),
  password: Joi.string().min(6).required(),
});
// ********************
const updateSubscribeSchema = Joi.object({
  subscription: Joi.string()
    .valid(...packet)
    .required(),
});
// *****************
const schemas = {
  registerSchema,
  loginSchema,
  updateSubscribeSchema,
  emailSchema,
};
const User = model("user", userSchema);
module.exports = {
  schemas,
  User,
};
