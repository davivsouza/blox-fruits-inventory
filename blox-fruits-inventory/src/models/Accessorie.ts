import { model, Schema } from "mongoose";

const accessoriesSchema = new Schema({
  name:{
    type: String,
    required: true
  },
  imageURL: String,
  price: String
});

const Accessorie = model("Accessorie", accessoriesSchema);

export { Accessorie };
