const { Schema, model } = require("mongoose");

const userRolesEnum = require("../constants/user-roles.enum");
const userGendersEnum = require("../constants/user-gender.enum");

const User = new Schema(
  {
    name: { type: String, trim: true, required: true },
    email: {
      type: String,
      trim: true,
      lowercase: true,
      unique: true,
      required: true,
    },
    age: { type: Number, default: 18 },
    gender: { type: String, enum: Object.values(userGendersEnum) },
    role: {
      type: String,
      enum: Object.values(userRolesEnum),
      default: userRolesEnum.USER,
    },
    password: { type: String, required: true, default: null, select: false },
  },
  { timestamps: true }
);

User.virtual("chats", {
  ref: "Chat_Room_2_User",
  localField: "_id",
  foreignField: "user",
  justOne: false,
});

User.pre("findOne", function () {
  this.populate("chats");
});

module.exports = model("User", User);
