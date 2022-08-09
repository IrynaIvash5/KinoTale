const users = require("../models/User");
const { Schema, model } = require("mongoose");

const Filmschema = new Schema({
  _id: { type: Schema.ObjectId },
  name: { type: String, required: true },
  duration: { type: String, required: true },
  status: { type: String, required: true },
  premiere: { type: String},
  isPremiere: { type: Boolean},
  age: { type: Number, required: true },
  country: { type: String, required: true },
  ganres: [{ type: String, required: true, ref: "Genre" }],
  translate: { type: String, required: true },
  voiceActing: { type: String, required: true },
  director: { type: String, required: true },
  actors: [{ type: String, required: true, ref: "Actors" }],
  watchUrl: { type: String, required: true },
  description: { type: String, required: true },
  imgUrl: { type: String, required: true },
  likes: {
    counterAngry: [{ type: Schema.ObjectId, required: true, ref: "User" }],
    counterCryning: [{ type: Schema.ObjectId, required: true, ref: "User" }],
    counterDown: [{ type: Schema.ObjectId, required: true, ref: "User" }],
    counterUp: [{ type: Schema.ObjectId, required: true, ref: "User" }],
    counterGlasses: [{ type: Schema.ObjectId, required: true, ref: "User" }],
    counterHappy: [{ type: Schema.ObjectId, required: true, ref: "User" }],
    counterLove: [{ type: Schema.ObjectId, required: true, ref: "User" }],
    counterNeutral: [{ type: Schema.ObjectId, required: true, ref: "User" }],
    counterSad: [{ type: Schema.ObjectId, required: true, ref: "User" }],
    counterSmail: [{ type: Schema.ObjectId, required: true, ref: "User" }],
    counterVomiting: [{ type: Schema.ObjectId, required: true, ref: "User" }],
  },
  comments: [
    {
      type: {
        created: {
          type: Date,
          default: Date.now,
        },
        movieId: {
          type: Schema.ObjectId,
        },
        comment: {
          type: String,
        },
        userId: {
          type: Schema.ObjectId,
        },
      },
      required: true,
      default: [],
    },
  ],
});

module.exports = model("Filmschema", Filmschema);
