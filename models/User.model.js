const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    username: {
      type: String,
      trim: true,
      required: false,

    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true
    },
    password: {
      type: String,
      required: true
    },
    role: {
      type: String,
      enum: ['USER', 'ROOMHOLDER', 'ADMIN'],
    }
  },
  {
    timestamps: true
  }
);

const User = model("User", userSchema);

module.exports = User;
