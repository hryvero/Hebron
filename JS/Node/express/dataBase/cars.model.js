const { Schema, model } = require("mongoose");

const carModelsEnum = require("../constants/user-roles.enum");
const userRolesEnum = require("../constants/user-roles.enum");

const Car = new Schema(
  {
    model: {
      type: String,
      trim: true,
      required: true,
      uppercase: true,
      enum: Object.values(carModelsEnum),
    },
    year: { type: Number, default: 2004 },
    owner: { enum: Object.values(userRolesEnum) },
  },
  { timestamps: false }
);

module.exports = model("Car", Car);
