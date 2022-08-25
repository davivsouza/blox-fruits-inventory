import {model, Schema} from 'mongoose'

const fruitsSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  imageURL:{
    type: String,
    required: true,
  },
  price:{
    type:String,
    required: true,
  },
  createdAt: {
    type: Date,
    required: true,
    default: () => Date.now(),
    immutable: true
  },

})

const Fruit = model('Fruit', fruitsSchema)

export {Fruit}