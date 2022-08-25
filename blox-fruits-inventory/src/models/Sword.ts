import { model, Schema } from "mongoose";

const swordsScheam = new Schema({
  name: {
    type: String,
    required: true,
  },
  imageURL:{
    type: String,
  },
  createdAt: {
    type: Date,
    required: true,
    default: () => Date.now(),
    immutable: true
  },
})

const Sword = model('Sword', swordsScheam)

export {Sword}